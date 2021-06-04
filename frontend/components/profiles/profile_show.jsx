import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PostFormContainer from '../posts/post_create_form_container'
import FriendButtonContainer from '../friendships/friend_button_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'timeline'
    }

    this.renderFriendList = this.renderFriendList.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  renderAbout() {
    if (!this.props.match.params.userId) { return null }
    return (
      <div>
        <p className='intro'>Intro</p>
        <p className='p'><i className="fas fa-birthday-cake intro-fab"></i>Bithday: {this.props.profile.birthday} </p>
        <p className='p'><i className="fas fa-home intro-fab"></i>Lives in: {this.props.profile.location} </p>
        <p className='p'><i className="fas fa-briefcase intro-fab"></i>Works at: {this.props.profile.work} </p>

        {(this.props.currentUser && this.props.currentUser.id === this.props.profile.id) ? (
          <Link to={`/users/${this.props.profile.id}/edit`}>
            <button className='profile-edit-button' type='submit'>Update Profile</button>
          </Link>) : null}
      </div>
    )
  }

  renderOwnPosts() {
    let myPosts = [];

    for (let i = 0; i < this.props.posts.length; i++) {
      if (this.props.posts[i].author_id === this.props.profile.id) {
        myPosts.push(this.props.posts[i])
      }
    }
    if (this.props.currentUser) {
      return (
        <div>{myPosts.reverse().map((post, idx) => (
          <ul key={idx} className='each-posts'>
            <div className='post-name-icon'>
              <div className='post-prof-icon'>
                {this.props.profile.photoUrl ? <img src={this.props.profile.photoUrl} alt={this.props.profile.username} /> : <div className='post-default-icon'></div>}
              </div>
              <div>
                <h2 className='author-name'>{this.props.profile.username}</h2>
                <div className='posted-at'>{post.created_at.slice(0, 10)}</div>
              </div>
            </div>
            <h2 className='body'>{post.body}</h2>

            {(this.props.currentUser.id === this.props.profile.id) ? (
              <div className='button-edit-post'>
                <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
              </div>) : <div className='button-edit-post'><a><i className="far fa-comment-alt"></i>Comment</a></div>}

            <div className='comment-container'>
              <CommentIndexContainer
                post_id={post.id}
              />
              <CommentFormContainer
                post_id={post.id}
              />
            </div>
          </ul>
        ))}
        </div>
      )
    }
  }

  renderFriendList() {
    if (this.props.profile.follows) {
      let friendId = [];
      let arr = this.props.profile.follows;
      for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
          if (arr[i][key] !== this.props.profile.id) {
            friendId.push(arr[i][key])
          }
        }
      }

      let fin = [];
      for (let j = 0; j < this.props.users.length; j++) {
        if ((friendId).includes(this.props.users[j].id)) {
          fin.push(this.props.users[j])
        }
      }

      return (
        <div>
          <div>{fin.map((user, idx) => (
            <li className='per-friend' key={idx}>
              <Link className='per-fname' to={`/users/${user.id}/show`}>
                <i className="far fa-hand-point-right"></i>
                <p>{user.username}</p>
              </Link>
            </li>
          ))}
          </div>
        </div>
      )
    }
  }

  handlePageToRender(field) {
    return (e) => {
      this.setState({ page: field });
    }
  }

  renderPage() {
    if (this.state.page === 'about') {
      return (
        <div className='modal-con'>
          <div className='mask'></div>
          <div className='dropdown'>
            <div>
              <p className='intro'>Bio</p>
              <p className='p'><i className="fas fa-user intro-fab"></i>Name: {this.props.profile.username}</p>
              <p className='p'><i className="fas fa-birthday-cake intro-fab"></i>Bithday: {this.props.profile.birthday} </p>
              <p className='p'><i className="fas fa-home intro-fab"></i>Lives in: {this.props.profile.location} </p>
              <p className='p'><i className="fas fa-briefcase intro-fab"></i>Works at: {this.props.profile.work} </p>
            </div>
          </div>
        </div>
      )
    } else if (this.state.page === 'timeline') {
      return (
        <div></div>
      )
    } else if (this.state.page === 'friends') {
      return (
        <div className='modal-con'>
          <div className='mask'></div>
          <div className='dropdown'>
            <h2>Friends {this.props.profile.username} is following</h2>
            {this.renderFriendList()}
          </div>
        </div>
      )
    }
  }


  render() {
    if (!this.props.profile) { return null }

    return (
      <div className='profile-page'>
        <header className='profile-header-container'>
          <div className='cover-img'>
            <div className='inner-img'></div>
          </div>
          {this.props.profile.photoUrl ? <img className='profile-img' src={this.props.profile.photoUrl} alt={this.props.profile.username} /> : <div className='profile-img' ></div>}

          <h1 className='username'>{this.props.profile.username}</h1>

          <div className='profile-links-container'>
            <div className='fb-container'>
              <FriendButtonContainer
                profile={this.props.profile}
              />
            </div>

            <div className='p-container'>
              <div onClick={this.handlePageToRender('about')}><p>about</p></div>
              <div onClick={this.handlePageToRender('friends')}><p>friends</p></div>
              <div onClick={this.handlePageToRender('timeline')}><p>timeline</p></div>
            </div>

          </div>
        </header>


        <div className='profile-body'>

          <div className={this.state.page === 'timeline' ? '' : 'renderpage'} >{this.renderPage()}</div>

          <div className='left-body'>
            <div className='render-about'>{this.renderAbout()}</div>
            <div className='list-of-friends-you-follow'>
              <div className="friends-list-containerz">
                <ul className='friends'>
                  <h1> Friends You Follow</h1>
                  {this.renderFriendList()}
                </ul>
              </div>

            </div>
          </div>

          <div className='right-body'>
            <div><PostFormContainer /></div>
            <div>{this.renderOwnPosts()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileForm;