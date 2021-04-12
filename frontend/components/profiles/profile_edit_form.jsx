import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profile
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateProfile(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    render() {
        console.log(this.state.username)
        return (
            <div> 
                <form className='profile-edit-form' onSubmit={this.handleSubmit}>
                    <p>this is profile edit page</p> 
                    <label>Name:
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={this.update('username')} />
                    </label>
                    <label>Birthday:
                    <input
                        type='date'
                        value={this.state.birthday}
                        onChange={this.update('birthday')} />
                    </label>
                    {/* <Link to={`/users/${this.state.id}/show`}> */}
                        <button className='profile-edit-button' type='submit'>Update Profile</button>
                    {/* </Link> */}

                </form>
            </div>
        )
    }
}

export default ProfileEditForm;