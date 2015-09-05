var React = require('react');

var TextGame = React.createClass({
  getInitialState: function() {
    return {
      gender: null,
      style: null,
      currentClothing: 0,
    };
  },

  render: function() {
    return (
      <div>
        HELLO WORLD
      </div>
    );
  },
});

module.exports = TextGame;
