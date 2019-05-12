import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('should render component correctly in case when all props defined', () => {
        const component = shallow(<Button text='test' action={() => {}}/>);

        expect(component).toMatchSnapshot();
    });

    it('should show btn name correctly', () => {
        const name = 'testName';
        const component = shallow(<Button text={name} action={() => {}}/>);

        expect(component.matchesElement(<button>{name}</button>)).toBeTruthy();
    });

    it('should call action func when user click on btn', () => {
        const mockAction = jest.fn();
        const component = shallow(<Button text='name' action={mockAction}/>);
        component.simulate('click');

        expect(mockAction.mock.calls.length).toBe(1);
    });
});
