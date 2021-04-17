# README


# Tomobook
[Tomobook](https://tomobook.herokuapp.com/#/login) is a clone of the populasocial media site [Facebook](https://www.facebook.com). Here users can connect with others (make friends),post on  walls and upload profile.  

## Technologies 
* React/Redux
* Ruby on Rails
* PostgreSQL
* Javascript
* JQuery (ajax)
* Heroku
* CSS
* Webpack
* Amazon Web Service

[Design Docs](https://github.com/sdean14/bananaTime/wiki) 

## Key Features
1. User Authentication 
1. Making Your Profile
2. Following friends
3. Posting On Walls
4. News Feed
5. S3 AWS Image hosting

## Code

### User Authentication
New users can signup and make an account. All they need is a username, email, password(6 characters or more) and birthday.

Existing users can login in withtheir email and password. Both log in and sign up will take you to news feed page.

### Making Your Profile
You can edit your profile info on the profile edit page, you can upload profile picture also.


### Making Friends
On the news feed page, you can see all of the users name. Clicking on their username will take you to their profile page and you will be able to become friend by clicking friend button.

#### Filtering Friends
```javascript
renderFriendList() {
    if (this.props.profile.follows) {
      let friendId = [];
      let arr = this.props.profile.follows;
      for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
          friendId.push(arr[i][key])
        }
      }
   
      let fin = [];
      for (let j = 0; j < this.props.users.length; j++) {
        for (const key in this.props.users[j]) {
          if ((friendId).includes(this.props.users[j][key])) {
            fin.push(this.props.users[j].username)
          }
        }
      }

      return (
        <div>
          <div>{fin.map((fName, idx) => (
            <li className='per-friend' key={idx}>  <div className='per-fname'>{fName}</div></li>
          ))}
          </div>
        </div>
      )
    }
  }

```

### Posting On Walls
You can easily post on your own wall or on news feed page. 
You can also delete and edit your own posts. 

