import React, { Component } from 'react';
import UserInfo from './UserInfo';

const fetchAllUserURL = 'https://reqres.in/api/users?page=1&per_page=10' //URL to fetch all Users

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
    fetch(fetchAllUserURL)
      .then(response => {
        if (response.ok) {return response.json();
        } else {throw new Error('Something went wrong ...');}
      })
      .then(data =>
        this.setState((prevState) => {
          return {
            users: [...prevState.users, ...data.data],
          }}, () => { this.getUniqueUsers() })
      )
      .catch(error => this.setState({ error }));

  }

  getUniqueUsers = () => {
    this.setState((prevState) => {
      return {
        users: prevState.users.map(e => e['id'])
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter(e => prevState.users[e]).map(e => prevState.users[e])
      }
    })
  }

  handleDeleteUser = (event, userID) => {
    const userList = this.state.users.filter(user => user.id !== userID);
    this.setState({ users: userList });
    event.preventDefault();
  }

  render() {
    const { users, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    let userList = users.map((user, index) =>
      <UserInfo user={user} key={index} onDelete={(e) => this.handleDeleteUser(e, user.id)} />
    )
    return (
      <div>
        <h1 className='userTitle'>Pearson User Management</h1>
        <ul className="persons">
          {userList}
        </ul>
      </div>
    );
  }
}
