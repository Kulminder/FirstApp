import React from 'react';
import './UserInfo.css';
import propTypes from 'prop-types'


const UserInfo = (props) => props.users.map((user, index) => {

  return (
    <div key={user.id} className="person-item">
      <img alt={user.first_name} className="avatar-img" src={user.avatar} />
      <div className="person-details">
        <div className="user-name">
          {user.first_name} {user.first_name}
        </div>
        <a className="button-link" onClick={(e) => { props.onDelete(e, index); }}
        >Delete</a>
      </div>
    </div>
  )
})

UserInfo.defaultProps = {
  users: []
}

UserInfo.propTypes = {
  users: propTypes.array.isRequired,
  onClick: propTypes.func
}

export default UserInfo;
