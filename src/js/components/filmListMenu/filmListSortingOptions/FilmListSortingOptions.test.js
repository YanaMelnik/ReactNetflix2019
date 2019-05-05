import React from 'react';
import { shallow } from 'enzyme';
import FilmListSortingOptions from './FilmListSortingOptions';

describe('FilmListSortingOptions', () => {
    it('should render component correctly', () => {
        const component = shallow(<FilmListSortingOptions/>);

        expect(component).toMatchSnapshot();
    });
});
