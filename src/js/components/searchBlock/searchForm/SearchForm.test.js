import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';
import Logo from '../../common/logo/Logo';
import Button from '../../common/button/Button';

describe('SearchForm', () => {
    let component;
    beforeEach(() => {
        component = shallow(<SearchForm/>);
    });
    it('should render component correctly in case when all props defined', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain logo and search btn', () => {
        expect(component.find(Logo)).toHaveLength(1);
        expect(component.find(Button)).toHaveLength(1);
    });
});
