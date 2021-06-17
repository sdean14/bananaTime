import React from "react";
import UserIndexItem from './user_index_item'

class UserIndex extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchUser(this.props.currentUser.id);

  }
  
  render(){
    let otherUsers = [];
    for (let i = 0; i < this.props.users.length; i++) {
      if(this.props.users[i].id !== this.props.currentUser.id){
        otherUsers.push(this.props.users[i])
      }      
    }
      return(
        <ul>
          {otherUsers.map(user => (
            <UserIndexItem
              user={user}
              key={user.id}
            />
            ))}
        </ul>
      ) 
  }
}

export default UserIndex;