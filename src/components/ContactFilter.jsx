import { Fragment } from 'react';
import PropTypes from 'prop-types';

export const ContactFilter = ({ handleFilter }) => (
  <Fragment>
    <span>Find contacts by name</span>
    <input type="text" name="filter" onChange={handleFilter}></input>
  </Fragment>
);

ContactFilter.propTypes = {
  handleFilter: PropTypes.func,
};
