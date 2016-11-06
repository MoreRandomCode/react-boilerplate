var React = require('react');
var Inputform = require('Inputform');
var WeatherMessages = require('WeatherMessages');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 45
    }
  },
  handleSearch: function (location) {
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
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
