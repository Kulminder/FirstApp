import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => (
  <li className="person-list">
    <img alt={props.user.first_name} className="avatar-img" src={props.user.avatar} />
    <div className="person-details">
      <div className="user-info">
        <p>{props.user.first_name} {props.user.first_name}</p> </div>
      <button
        className="button button--link btn-delete"
        onClick={(e) => {
          props.onDelete(e, props.user.id);
        }}
      >
        Delete
      </button>
    </div>
  </li>
);

UserInfo.PropTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default UserInfo;
