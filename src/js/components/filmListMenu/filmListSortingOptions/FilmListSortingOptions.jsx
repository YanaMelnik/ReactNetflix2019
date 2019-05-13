import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortBy } from '../../../actions/actions';

class FilmListSortingOptions extends Component {
  handleOptionChange(changeEvent) {
    console.log(1);
    this.props.sortFilmCallback(changeEvent.target.value);
  }

  render() {
    return <form>
      <span>Sort by</span>
      <span>
        <input
          name='sort__by'
          type='radio'
          value='date'
          onClick={ event => this.handleOptionChange(event) }
        />
        release date
      </span>
      <span>
        <input
          name='sort__by'
          type='radio'
          value='rating'
          checked
          onClick={ event => this.handleOptionChange(event) }
        />
        rating
      </span>
    </form>;
  }
}

FilmListSortingOptions.propTypes = {
  sortFilmCallback: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  sortFilmCallback: text => (dispatch(sortBy(text))),
});


export default connect(null, mapDispatchToProps)(FilmListSortingOptions);
