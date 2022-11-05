import { Component } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Wraper, SearchForm, SearchBtn, SearchField } from './Searchbar.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const { query } = this.state;

    if (query.trim().length > 0) {
      this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
      return;
    }

    toast.warn(
      'You have not entered anything, try to write the name of what you are looking for'
    );
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <Wraper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit" aria-label="search button">
            <CiSearch size="24" />
          </SearchBtn>
          <SearchField
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </SearchForm>
      </Wraper>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
