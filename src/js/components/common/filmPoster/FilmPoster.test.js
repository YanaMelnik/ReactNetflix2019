import React from 'react';
import { shallow } from 'enzyme';
import FilmPoster from './FilmPoster';

describe('FilmPoster', () => {
    it('should render component correctly in case when all props defined', () => {
        const component = shallow(<FilmPoster imgUrl='url' filmName='name'/>);

        expect(component).toMatchSnapshot();
    });

    it('should show alternative text if we have some trouble with img url', () => {
        const component = shallow(<FilmPoster imgUrl='url' filmName='name'/>);

        expect(component.find('img').prop('alt')).toBe('name');
    });

    it('should show picture from img url', () => {
        const component = shallow(<FilmPoster imgUrl='url' filmName='name'/>);

        expect(component.find('img').prop('src')).toBe('url');
    });

});