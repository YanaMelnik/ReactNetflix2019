import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import FilmPoster from '../common/filmPoster/FilmPoster';
import Logo from '../common/logo/Logo';
import Button from '../common/button/Button';

import './FilmDetails.css';

class FilmDetails extends Component {
  goToSearch(e) {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='film-details'>
        <div className='header wrapper'>
          <Logo/>
          <Button text='Search' action={ e => this.goToSearch(e) }/>
        </div>
        <div className='wrapper film-details__content'>
          <FilmPoster filmName={this.props.filmName} imgUrl={this.props.url}/>

          <div className='film-details__content-text'>
            <div className='film-details__header'>
              <span className='film-details__title'>{this.props.filmName}</span>
              <div className='film-details__rate'>
                <span>{this.props.rate}</span>
              </div>
            </div>

            <span className='film-details__shortDescription'>{this.props.shortDescription}</span>

            <div className='film-details__numbers-details'>
              <span className='film-details__year'>{this.props.yearOfIssue}</span>
              <span className='film-details__duration'>{this.props.duration} min</span>
            </div>

            <span className='film-details__longDescriptions'>{this.props.longDescriptions}</span>
          </div>
        </div>
      </div>
    );
  }
}

FilmDetails.propTypes = {
  filmName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  shortDescription: PropTypes.string.isRequired,
  yearOfIssue: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  longDescriptions: PropTypes.string.isRequired,
  history: PropTypes.object,
};

export default withRouter(FilmDetails);
// export default FilmDetails;
