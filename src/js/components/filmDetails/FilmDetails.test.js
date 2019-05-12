import React from 'react';
import { shallow } from 'enzyme';
import FilmDetails from './FilmDetails';
import Logo from '../common/logo/Logo';
import Button from '../common/button/Button';
import FilmPoster from '../common/filmPoster/FilmPoster';

describe('FilmDetails', () => {
    let component;
    beforeEach(() => {
        component = shallow(<FilmDetails
            duration={3}
            filmName='test'
            longDescriptions='test'
            rate={7}
            shortDescription='test'
            url='test'
            yearOfIssue={1991}/>);
    });
    it('should render component correctly in case when all props defined', () => {
        expect(component).toMatchSnapshot();
        // TODO: Is it ok to add only snapshot test for dumb components?
    });

    it('should always contain header with logo and search btn', () => {
        expect(component.find(Logo)).toHaveLength(1);
        expect(component.find(Button)).toHaveLength(1);
    });

    it('should always contain film poster', () => {
        expect(component.find(FilmPoster)).toHaveLength(1);
    });
});
