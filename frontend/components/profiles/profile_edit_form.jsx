import React from 'react';
import { Redirect } from 'react-router-dom';

class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profile;
        this.state.photoFile = null;
        this.state.photoUrl = null;
        this.state.redirect = false;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[username]', this.state.username);
        formData.append('user[birthday]', this.state.birthday);
        formData.append('user[location]', this.state.location);
        formData.append('user[work]', this.state.work);
        if (this.state.photoFile) {
            formData.append('user[photo]', this.state.photoFile);
        }
        this.props.updateProfile(formData, this.state.id);
        this.setState({ redirect: `/users/${this.state.id}/show` })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        const director = () => {
            if (this.state.redirect) {
                return (
                    <Redirect to={this.state.redirect} />
                )
            }
        }
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div className='prof-edit-page'>

                <form className='profile-edit-form' onSubmit={this.handleSubmit}>
                    <p>Profile</p>
                    <label className='edit-p label'>Name:
                        <input className='edit-p'
                            type='text'
                            value={this.state.username}
                            onChange={this.update('username')} />
                    </label>
                    <label className='edit-p label'>Birthday:
                        <input
                            className='edit-p'
                            type='date'
                            value={this.state.birthday}
                            onChange={this.update('birthday')} />

                    </label>
                    <label className='edit-p label'>Lives in:
                        <input className='edit-p'
                            type='text'
                            value={this.state.location}
                            onChange={this.update('location')} />
                    </label>
                    <label className='edit-p label'>Works at:
                        <input className='edit-p'
                            type='text'
                            value={this.state.work}
                            onChange={this.update('work')} />
                    </label>


                    <label className='edit-p label'>Profile Photo:
                        <input type="file"
                            onChange={this.handleFile.bind(this)}
                            className='photo-upload' />
                    </label>
                    {preview}

                    <button className='profile-edit-button' type='submit'>Update Profile</button>

                </form>
                {director()}
            </div>
        )
    }
}

export default ProfileEditForm;