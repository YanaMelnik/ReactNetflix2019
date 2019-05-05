import React from 'react';
import { shallow } from 'enzyme';
import FilmListElement from './FilmListElement';
import FilmPoster from '../../common/filmPoster/FilmPoster';

describe('FilmListElement', () => {
    let component;
    beforeEach(() => {
        component = shallow(<FilmListElement
            filmName='testName'
            yearOfIssue={1997}
            genre='testGenre'
            filmPosterUrl='testUrl'/>);
    });
    it('should render component correctly in case when all props defined', () => {
        expect(component).toMatchSnapshot();
    });

    it('should always contain FilmPoster component', () => {
        expect(component.find(FilmPoster)).toHaveLength(1);
    });
});
