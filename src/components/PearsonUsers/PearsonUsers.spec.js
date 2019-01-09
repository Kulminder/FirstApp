import React from "react";
import { shallow,mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PearsonUsers } from "./PearsonUsers";
import UserInfo from '../UserInfo/UserInfo';
import sinon from 'sinon';
import { userTestData } from '../../test_data/testdata';

const setup = () => shallow(<PearsonUsers />);

let wrapper = null;
describe("PearsonUsers component", () => {
  beforeEach(() => {
    wrapper = setup();
  })

  it('instance should not be null', () => {
    const instance = wrapper.instance();
    expect(instance).not.toBe(null);
  });

  it('should renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should renders a element for header', () => {
    expect(wrapper.find('h1').text()).toEqual("Pearson User Management");

  });

  it('should have User Info as child component', () => {
    expect(wrapper.find('UserInfo')).toBeDefined();
  });

  it("handleDeleteUser function should be defined", () => {
    const event = { preventDefault: () => { } };
    expect(wrapper.instance().handleDeleteUser(event, 4)).toBeUndefined();
  });
  
  it('ComponentDidMount should be called', () => {
    const spy = jest.spyOn(PearsonUsers.prototype, 'componentDidMount');
    const wrapper = shallow(<PearsonUsers/>);
    expect(spy).toHaveBeenCalled();
  });

});