import React from 'react';
import { shallow, mount } from 'enzyme';
import FilmListMenu from './FilmListMenu';
import FilmListSortingOptions from './filmListSortingOptions/FilmListSortingOptions';

describe('FilmListMenu', () => {
    it('should render component with sorting view and count of film', () => {
        const component = shallow(<FilmListMenu resultLength={'7'} filmSorting={true}/>);

        expect(component).toMatchSnapshot();
    });

    it('should render component with film genre name', () => {
        const component = shallow(<FilmListMenu genreName='drama'/>);

        expect(component).toMatchSnapshot();
    });

    it('should set correct title with film genre name', () => {
        const genreProps = 'drama';
        const genreName = `Films by ${genreProps} genre`;

        const component = mount(<FilmListMenu genreName={genreProps}/>);

        expect(component.find('span.film-list-menu__left').text()).toEqual(genreName);
    });

    it('should set correct title with details of count of film', () => {
        const resultLengthProps = '7';
        const resultLengthText = `${resultLengthProps} movies found`;

        const component = mount(<FilmListMenu resultLength={resultLengthProps}/>);

        expect(component.find('span.film-list-menu__left').text()).toEqual(resultLengthText);
    });

    it('should show sorting option if props is available', () => {
        const filmSorting = true;

        const component = mount(<FilmListMenu filmSorting={filmSorting}/>);

        expect(component.find(FilmListSortingOptions)).toHaveLength(1);
    });
});
