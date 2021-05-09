import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_action';
import FriendshipsIndex from '../friendships/friendships_index'
import FriendshipContainer from '../friendships/friendships_container';
import PostFormContainer from '../posts/post_create_form_container'
import PostItemContainer from '../posts/post_item_container';
import FriendButtonContainer from '../friendships/friend_button_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);


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
      <div className='render-about'>
        <p className='intro'>Intro</p>
        <p><i className="fas fa-birthday-cake intro-fab"></i>Bithday: {this.props.profile.birthday} </p>
        <p><i className="fas fa-home intro-fab"></i>Lives in: {this.props.profile.location} </p>
        <p><i className="fas fa-briefcase intro-fab"></i>Works at: {this.props.profile.work} </p>

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
        <div>{myPosts.map((post, idx) => (
          <ul key={idx} className='each-posts'>
            <h2 className='author-name'>{this.props.profile.username}</h2>
            <h2>{post.body}</h2>

            {(this.props.currentUser.id === this.props.profile.id) ? (
              <div className='button-edit-post'>
                <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
              </div>) : null}
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
          fin.push(this.props.users[j].username)
        }
      }

      return (
        <div>
          <div>{fin.map((fName, idx) => (
            <li className='per-friend' key={idx}>  <div className='per-fname'>{fName}</div></li>
          ))}
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

          <img className='profile-img' src={this.props.profile.photoUrl} alt={this.props.profile.username} />
          <h1 className='username'>{this.props.profile.username}</h1>

          <div className='profile-links-container'>
            <div className='fb-container'><FriendButtonContainer
              profile={this.props.profile}
            /></div>
            <div className='p-container'>
              <p className="tool-tip">posts
            <span className="tool-tip-text">Features Coming Soon!</span>
              </p>
              <p className="tool-tip">about
            <span className="tool-tip-text">Features Coming Soon!</span>
              </p>
              <p className="tool-tip">friends
            <span className="tool-tip-text">Features Coming Soon!</span>
              </p>
            </div>

          </div>
        </header>

        <div className='profile-body'>

          <div className='left-body'>
            <div>{this.renderAbout()}</div>
            <div className='list-of-friends-you-follow'>
              <div className="friends-list-containerz">
                <ul className='friends'>Friends
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