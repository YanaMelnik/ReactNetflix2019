import React from 'react';
import { shallow } from 'enzyme';
import FilmList from './FilmList';
import FilmListElement from './filmListElement/FilmListElement';
import expect from 'expect';

describe('FilmList', () => {
    it('should render component correctly in case when all props defined', () => {
        const film = {
            id: 1,
            title: 'test',
            release_date: 1991,
            genres: ['drama'],
            poster_path: 'test'
        };
        const component = shallow(<FilmList filmsArray={[film]}/>);

        expect(component).toMatchSnapshot();
    });

    it('should render component correctly in when films are not defined', () => {
        const component = shallow(<FilmList/>);

        expect(component).toMatchSnapshot();
    });

    it('should render film list component in case when films are defined', () => {
        const film = {
            id: 1,
            title: 'test',
            release_date: 1991,
            genres: ['drama'],
            poster_path: 'test'
        };
        const component = shallow(<FilmList filmsArray={[film]}/>);

        expect(component.find(FilmListElement)).toHaveLength(1);
    });

    it('should render special text in case when films are not defined', () => {
        const component = shallow(<FilmList/>);

        expect(component.find('div.no_content')).toHaveLength(1);
    });
});
