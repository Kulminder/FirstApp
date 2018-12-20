import React from "react";
import { shallow } from 'enzyme';
import { PearsonUsers } from "./PearsonUsers";
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

const setup = () => shallow(<PearsonUsers />);

describe("PearsonUsers component", () => {

  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

  it('instance should not be null', () => {
    const wrapper = setup();
    const instance = wrapper.instance();
    expect(instance).not.toBe(null);
  });

  it('should renders correctly', () => {
    const wrapper = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should renders a h1', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual("Pearson User Management");

  });

  it('should have User Info as child component', () => {
    const wrapper = setup();
    expect(wrapper.find('UserInfo')).toBeDefined();
  });

  it('should have User Info as child component', () => {
    const wrapper = setup();
    expect(wrapper.find('UserInfo')).toBeDefined();
  });

  it("handleDeleteUser function should be defined", () => {
    const wrapper = setup();
    const event = { preventDefault: () => { } };
    expect(wrapper.instance().handleDeleteUser(event, 4)).toBeUndefined();
  });

  // it('should update state', (done) => {
  //   const wrapper = mount(<PearsonUsers />);

  //   const initialUserList = [
  //     {
  //       id: 4,
  //       first_name: "Eve",
  //       last_name: "Holt",
  //       avatar:
  //         "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  //     },
  //   ]

  //   const result = {
  //     data: {
  //       users: {
  //         id: 5,
  //         first_name: "George",
  //         last_name: "Bush",
  //         avatar:
  //           "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  //       },
  //     }
  //   }
  //   const promise = Promise.resolve(result);

  //   expect(wrapper.state().users).toEqual(initialUserList);

  //   promise.then(() => {
  //     wrapper.update();
  //     console.log('wrapper.state().users', wrapper.state().users)
  //     //expect(wrapper.state().users).toEqual(props.data.data);

  //     done();
  //   });
  // });
});