import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_action';
import FriendshipsIndex from '../friendships/friends_index'
import FriendButton from '../friendships/friendship_status';
 import FriendshipContainer from '../friendships/friendships_container';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);    
    console.log(this.props.match)
   }

  componentDidMount(){
       this.props.fetchUsers();
      this.props.fetchUser(this.props.match.params.userId)
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
                  {(this.props.profile.id === this.props.currentUser.id) ? (null) : <FriendshipContainer/> }
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
                      <div>friends</div>
                  </div>
                  <div className='right-body'>
                      <div>create post</div>
                      <div>own post feed</div>
                  </div>
              </div>


          </div>
      )
  }
}

export default ProfileForm;