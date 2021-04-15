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
  }
  
  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts();
    
  }
  
  renderAbout(){
    if(!this.props.match.params.userId){return null}
    return(
      <div  className='render-about'>
            <p className='intro'>Intro</p>
            <p>Bithday: {this.props.profile.birthday} </p>
            <p>From: New Zealand</p>

            {(this.props.currentUser.id === this.props.profile.id) ? (
            <Link to={`/users/${this.props.profile.id}/edit`}>
            <button className='profile-edit-button' type='submit'>Update Profile</button>
            </Link>) : null}
      </div>
    )
  }
  
  renderOwnPosts() {
    let myPosts = [];
    // let author;
    for (let i = 0; i < this.props.posts.length; i++) {
      if(this.props.posts[i].author_id === this.props.profile.id){
        myPosts.push(this.props.posts[i])
      }      
    }
    
    // author= this.props.users[post.author_id];
    return (
      <div>{myPosts.map((post, idx) =>(
        <ul key={idx} className='each-posts'>  
          <h2 className='author-name'>{this.props.profile.username}</h2>  
          <h2>{post.body}</h2>

          {(this.props.currentUser.id === this.props.profile.id) ? (
            <div className='button-edit-post'>
            <Link  to={`/posts/${post.id}/edit`}>Edit</Link>
            <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
          </div> ) : null}
        </ul>
      ))}
      </div>
    )

  }

  render (){
    if(!this.props.profile){return null} 

  
    return (
      <div className='profile-page'>
          <header className='profile-header-container'>
              <div className='cover-img'>cover img</div>
              <div className='profile-img'>profile icon</div>   
              <h1 className='username'>{this.props.profile.username}</h1>
            
          
            
   
              <div className='profile-links-container'>
                <div className='fb-container'><FriendButtonContainer 
                  profile={this.props.profile}
                /></div>
                <p>posts</p> 
                <p>about</p>
                <p><Link to={'/following'}>
                  <button className='profile-links-buttons' >friends</button>
                </Link></p>
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