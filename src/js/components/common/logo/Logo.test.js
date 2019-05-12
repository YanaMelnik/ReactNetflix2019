import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
    it('should render component correctly in case when all props defined', () => {
        const component = shallow(<Logo/>);

        expect(component).toMatchSnapshot();
    });

    it('should show site name correctly', () => {
        const name = 'netflixroulette';
        const component = shallow(<Logo/>);

        expect(component.matchesElement(<div>{name}</div>)).toBeTruthy();
    });

    it('should show logo with correct classes', () => {
        const component = shallow(<Logo/>);

        expect(component.find('div.logo.wrapper')).toHaveLength(1);
    });
});
