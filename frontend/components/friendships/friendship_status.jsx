import React from 'react';
import { Link } from 'react-router-dom';

//make friends logic and button
class FriendButton extends React.Component {
    constructor(props) {
      super(props);
      let temp = this.props.friend.followed_by_current_user
     
      if(!!temp){
        this.state = {
          friend: true
        } 
      } else {
        this.state = {
          friend: false
        }
      }
    }
    handlefriend(e){
      e.preventDefault()
      if (this.props.friend.followed_by_current_user){
        this.props.refetch();
        this.props.deleteFriend(this.props.friend.id).then(() => {
          this.setState({
              friend: false
          });
        });
      } else {
        this.props.refetch();
        this.props.createFriend(this.props.friend.id).then(() => {
            this.setState({
                friend: true
            });
        });
      }
    }

    render(){
      return(
        <div >
          {(this.props.friend.followed_by_current_user) ? (
            <button className='friend-button' onClick={this.handlefriend}>unfriend</button>
          ) : (
            <button className='friend-button' onClick={this.handlefriend}>friend</button>
          )}

        </div>
      )
    }
  }

  export default FriendButton;