import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { search } from '../redux';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: '',
      hits: [],
    };
  }

  render() {
    const storeSearch = (e) => {
      e.preventDefault();
      this.setState({
        results: e.target.value,
      });
    };

    const submitSearch = () => {
      axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.results}&tags=story`)
        .then((res) => {
          this.setState({
            hits: res.data.hits,
          });
        });
      this.props.search([`${this.state.results}`]);
    };
    const searchWords = this.props.searchTerms.map((item) => <li>{item}</li>);
    const newsResults = this.state.hits.map((item) => <li><a className="searchLink" target="blank" href={item.url}>{item.title}</a></li>);
    const results = newsResults.length ? (
      <div className="searchresults">
        {newsResults}
      </div>
    ) : null;

    return (
      <div>
        <input id="searchInput" onChange={storeSearch} value={this.state.results} />
        <button onClick={submitSearch}>
          Search
        </button>
        <h3>Your Search Terms:</h3>
        <div className="searchWords">
          {searchWords}
        </div>
        <h1>Search Results</h1>
        {results}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerms: state.searchTerms,
});

const mapDispatchToProps = {
  search,
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
