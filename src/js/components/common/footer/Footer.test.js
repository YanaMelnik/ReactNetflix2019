import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import Logo from '../logo/Logo';

describe('Footer', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Footer/>);
    });
    it('should render component correctly in case when all props defined', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain logo', () => {
        expect(component.find(Logo)).toHaveLength(1);
    });
});
