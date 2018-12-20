import React from "react";
import { shallow } from 'enzyme';
import UserInfo from "./UserInfo";
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

const props = {
  user: [
    {
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    }
  ]
};

beforeEach(() => {
  sinon.stub(console, 'error');
});

afterEach(() => {
  console.error.restore();
});

describe("UserInfo component", () => {
  it('should renders correctly', () => {
    const wrapper = shallow(
      <UserInfo user={props} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('should invoke pleaseMockMe callback', () => {
    let onDelete = jest.fn();
    let wrapper = shallow(<UserInfo user={props} onDelete={onDelete} />);
    wrapper.find('button').simulate('click', { target: { value: 1 } }); 
    expect(onDelete).toHaveBeenCalled();
  });

});
