import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class Searchbar extends Component {

  state = { term: '' };

  handleChange(e) {
    const term = e.target.value;
    this.setState({term});
  }

  handleSubmit(e) {
    e.preventDefault();

    // FETCH WEATHER DATA
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="row">
          <div className="col-xs-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Get a five-day foreacast in your city"
                value={this.state.term}
                onChange={e => this.handleChange(e)}
              />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit">Search</button>
              </span>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);
