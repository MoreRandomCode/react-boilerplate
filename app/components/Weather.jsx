var React = require('react');
var Inputform = require('Inputform');
var WeatherMessages = require('WeatherMessages');

var Weather = React.createClass({
  handleSearch: function (location) {
    alert(location);
  },
  render: function() {
    return (
      <div>
        <h3>Weather component</h3>
        <Inputform onSearch={this.handleSearch}/>
        <WeatherMessages/>
      </div>
    )
  }
});

module.exports = Weather;
