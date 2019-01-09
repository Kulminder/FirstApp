import React, { Component } from 'react';
import './PearsonUsers.css';
import UserInfo from '../UserInfo/UserInfo';
import userDataService from '../../services/users-service'

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }],
      error: null
    };
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    userDataService.fetchAllUsers()
      .then(response => {
        if (response.data) {
          return this.filterUniqueUsers(response.data)
        } else { throw new Error('Something went wrong ...'); }
      })
      .catch(error => this.setState({ error }));
  }

  filterUniqueUsers = (response) => {
    this.setState((prevState) => {
      let users = [...prevState.users, ...response.data];
      return {
        users: users.map(e => e['id'])
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter(e => users[e]).map(e => users[e])
      }
    })
  }

  handleDeleteUser = (event, userIndex) => {
    const userList = [...this.state.users]
    userList.splice(userIndex, 1);
    this.setState({ users: userList });
    event.preventDefault();
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    let users = null;
    if (this.state.users && this.state.users.length) {
      users = (
        <UserInfo
          onDelete={this.handleDeleteUser}
          users={this.state.users} />
      )
    }

    return (
      <React.Fragment>
        <h1 className='page-title'>Pearson User Management</h1>
        <div className="person-list-area">
             {users}
        </div>
      </React.Fragment>
    );
  }
}
