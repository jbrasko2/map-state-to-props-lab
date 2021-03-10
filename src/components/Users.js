import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
// class Users extends Component {

//   render() {
//     return (
//       <div>
//         <ul>
//           Users!
//           {/* Write code here that displays the usernames of all users in the Redux store */}
//           {this.props.users.map(user => {
//             return <li key={user.username}>{user.username}</li>
//           })}
//           {/* In addition, display the total number of users curently in the store */}
//         </ul>
//         <p>{this.props.userCount}</p>
//       </div>
//     )
//   }
// }

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        {this.props.userCount}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users)
