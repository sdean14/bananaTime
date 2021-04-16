import React from 'react';
import { Link } from 'react-router-dom';
import FriendButton from './friend_button'
import FriendIndexItem from './friend_index_item'
//make list of friends you follow
class FriendshipsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.fetched = false;

    this.handlefriend = this.handlefriend.bind(this)
    // this.isFriend = this.isFriend.bind(this)
    // console.log(this.props.users)
    // console.log( (this.props.profile.followers).concat(this.props.profile.followings) )
    // (this.props.profile.followers).concat(this.props.profile.followings)
    // arr.concat((this.props.profile.followings),  (this.props.profile.followers))
    // console.log(this.props.profile)

  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchUser(this.props.currentUser.id);

  }
  componentDidUpdate(prevProps) {
    if (!this.fetched) {
      this.props.fetchUsers();
      this.fetched = true;
    }
  }
  refetch() {
    this.fetched = false;
  }

  //added
  handlefriend() {
    // e.preventDefault()

    if (this.props.friend.followed_by_current_user) {
      this.refetch();
      this.props.deleteFriend(this.props.friend.id).then(() => {
        this.setState({
          followed: false
        });
      });
    } else {
      this.refetch();
      this.props.createFriend(this.props.friend.id).then(() => {
        this.setState({
          followed: true
        });
      });
    }
  }

  isFriend() {
    if (!this.props.profile.followings) { return null }
    let friendListIds = [];
    let emptyArr = [];
    let arr = emptyArr.concat((this.props.profile.followers), (this.props.profile.followings))
    for (let i = 0; i < arr.length; i++) {
      for (const key in arr[i]) {
        if (!friendListIds.includes(arr[i][key])) {
          friendListIds.push(arr[i][key])
        }
      }
    }
    // console.log('-----')
    return (
      <div>
        {/* {console.log(friendListIds)} */}
        {/* {console.log(this.props.users)} */}

        {friendListIds.map(id => (
          <div key={id}>{this.props.users[id]}</div>
        ))}
      </div>
    )
  }


  render() {

    if (!this.props.users || this.props.users.length <= 1) {
      return null
    };
    //test
    //  if (!this.arr) { return null}     
    let friendsYouFollow = [];
    this.props.users.map((user) => {
      if (user.followed_by_current_user && user !== this.props.currentUser) {
        friendsYouFollow.push(user);
      }
    });
    return (
      <div>
        {/* <div className='list-of-friends-you-follow'>
          <h2 className='friends'>Friends List</h2>
          {/* {this.isFriend()} */}

          <ul>
            {/* { friendsYouFollow.map((friend, idx) => {
                return(
                  <li className='per-friend' key={idx}>
                   
                   <Link to={`/users/${friend.id}/show`} className='per-friendname'>{friend.username}</Link>
         
                  <FriendIndexItem
                   refetch={this.refetch.bind(this)}
                   friend={friend}
                   profile={this.props.profile}
                   createFriend={this.props.createFriend}
                   deleteFriend={this.props.deleteFriend}
                   handlefriend={this.handlefriend} />  
                 </li> 
                   );
                })} */}
          </ul>

        {/* </div> */} 
      </div>
    )
  }

}

export default FriendshipsIndex;