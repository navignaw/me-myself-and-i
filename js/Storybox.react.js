var React = require('react');

var cx = require('classnames');

/**
 * Each storybox is a physical box corresponding to the POV of a single clone.
 */
var Storybox = React.createClass({
  propTypes: {
    key: React.PropTypes.number,
  },

  getInitialState: function() {
    return {
      active: false,
      alive: true,
      text: '',
    };
  },

  setActive: function(value) {
    this.setState({active: value});
  },

  setText: function(value) {
    this.setState({text: value});
  },

  render: function() {
    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className={cx('storybox', {
          'active': this.state.active,
          'dead': !this.state.alive,
        })}>
          <p>{this.state.active && this.state.text}</p>
        </div>
      </div>
    );
  },
});

module.exports = Storybox;
