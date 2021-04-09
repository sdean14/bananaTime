import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
class ProfileEditForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.profile
    }
  
    componentDidMount(){
        this.props.receiveCurrentUser(this.props.match.params.userId)
    }
    render (){
        return (
            <div>
                this is profile edit page
            </div>
        )
    }
}

export default ProfileEditForm;