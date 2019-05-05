import React from 'react';
import { shallow } from 'enzyme';
import SearchBlock from './SearchBlock';
import SearchForm from './searchForm/SearchForm';

describe('SearchBlock', () => {
    let component;
    beforeEach(() => {
        component = shallow(<SearchBlock/>);
    });
    it('should render component correctly in case when all props defined', () => {
        expect(component).toMatchSnapshot();
    });

    it('should contain search form', () => {
        expect(component.find(SearchForm)).toHaveLength(1);
    });

    it('should show search block with correct classes', () => {
        expect(component.find('div.search-film__block')).toHaveLength(1);
    });
});
