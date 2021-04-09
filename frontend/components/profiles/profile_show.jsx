import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile
  }

  componentDidMount(){
      this.props.receiveCurrentUser(this.props.match.params.userId)
  }
  renderAbout(){
    return(
        <div>
            <h2>Intro</h2>
            <p>Bithday {this.state.birthday}</p>
            <p>From</p>
            <Link to={`/users/${this.state.id}/edit`}>
                <button className='profile-edit-button' type='submit'>Update Profile</button>
            </Link>
        </div>
    )
}
  render (){
      return (
          <div className='profile-page'>
              <header className='profile-header-container'>
                  <div className='cover-img'>cover img</div>
                  <div className='profile-img'>profile icon</div>
                  <h1 className='username'>My name is {this.state.username}</h1>
                  {/* {console.log(this.state.username)} */}
                  <div className='profile-links-container'>
                      {/* link/button to render each page */}
                      <p>posts</p> 
                      <p>about</p>
                      <p>friends</p>
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