var React = require('react');
var Inputform = require('Inputform');
var WeatherMessages = require('WeatherMessages');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 45
    }
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function() {
    var {temp, location} = this.state;
    return (
      <div>
        <h3>Weather component</h3>
        <Inputform onSearch={this.handleSearch}/>
        <WeatherMessages location={location} temp={temp}/>
      </div>
    )
  }
});

module.exports = Weather;
