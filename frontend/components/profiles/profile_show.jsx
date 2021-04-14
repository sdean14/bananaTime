import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_action';
import FriendshipsIndex from '../friendships/friends_index'
import FriendButton from '../friendships/friendship_status';
import FriendshipContainer from '../friendships/friendships_container';
import FriendshipButtonContainer from '../friendships/friendships_button_container';
import PostFormContainer from '../posts/post_create_form_container'
import PostItemContainer from '../posts/post_item_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);    
  }
  
  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts();
    
  }
  
  renderAbout(){
    if(!this.props.match.params.userId){return null}
    return(
      <div>
            <h2>Intro</h2>
            <p>Bithday {this.props.profile.birthday} </p>
            <p>From</p>
            <Link to={`/users/${this.props.profile.id}/edit`}>
            <button className='profile-edit-button' type='submit'>Update Profile</button>
            </Link>
        </div>
    )
  }
  
  renderOwnPosts() {
    let myPosts = [];
    for (let i = 0; i < this.props.posts.length; i++) {
      if(this.props.posts[i].author_id === this.props.profile.id){
        myPosts.push(this.props.posts[i])
      }      
    }
    return (
      <div>{myPosts.map((post, idx) =>(
        <ul key={idx} className='each-posts'>  
          <h2 className='author-name'>{this.props.profile.username}</h2>  
          <h2>{post.body}</h2>
          <div className='button-edit-post'>
          <Link  to={`/posts/${post.id}/edit`}>Edit</Link>
          <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
          </div>
        </ul>
      ))}
      </div>
    )

  }

  render (){
    if(!this.props.profile){return null} 
    // const friendButton = () =>(   
    //     this.props.users.map((friend,idx) =>(
    //         <FriendshipContainer
    //         friend={friend}
    //         key={idx}
    //         deleteFriend={this.props.deleteFriend}
    //         createFriend={this.props.createFriend}
    //         /> ) )
    //  ) 
  
      return (
          <div className='profile-page'>
              <header className='profile-header-container'>
                  <div className='cover-img'>cover img</div>
                  <div className='profile-img'>profile icon</div>   
                  <h1 className='username'>My name is {this.props.profile.username}</h1>
                  {(this.props.currentUser && this.props.profile.id === this.props.currentUser.id) ? (null) : <button>friend?</button> }
                 {/* friendButton() */}
                              
                      <div className='profile-links-container'>
                      <p>posts</p> 
                      <p>about</p>
                      <Link to={'/following'}>
                        <button className='profile-links-buttons' >friends</button>
                      </Link>
                  </div>
              </header>
              <div className='profile-body'>
                  <div className='left-body'>
                      <div>{this.renderAbout()}</div>
                      <div><FriendshipContainer /></div>
                        
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