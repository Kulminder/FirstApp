import React from "react";
import { shallow } from 'enzyme';
import UserInfo from "./UserInfo";
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { UserTestData } from '../../test_data/testdata'

describe("UserInfo component", () => {
  
  it('should renders correctly', () => {
    const wrapper = shallow(
      <UserInfo users={UserTestData}/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('should renders all the users props ', () => {
    const wrapper = shallow(<UserInfo users={UserTestData} />);
    expect(wrapper.find('img')).toHaveLength(3);
  });

  it('should renders all the anchor tags ', () => {
    const spyDeleteUser = jest.fn();
    const props = [
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "/marcoramires/128.jpg"
      }]
    const wrapper = shallow(
      <UserInfo onDelete={spyDeleteUser} users={props} />
    );
    expect(wrapper.find('a')).toHaveLength(1);
    wrapper.find('a').simulate('click', { target: 4 }); 
    expect(spyDeleteUser).toHaveBeenCalled();
  });

});
