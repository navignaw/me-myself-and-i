var React = require('react');

global.$ = global.jQuery = require('jquery');
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
      backgroundImage: null,
      content: [],
    };
  },

  setActive: function(value) {
    this.setState({active: value});
  },

  clearText: function() {
    this.setState({content: []});
  },

  setText: function(value, append) {
    var content = (append === true) ? this.state.content : [];
    content.push(value);
    this.setState({content: content});
  },

  appendText: function(value) {
    this.setText(value, true);
  },

  render: function() {
    var content = this.state.content.map((Elem, index) =>
      React.cloneElement(Elem, {key: index})
    );

    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className={cx('storybox', {
          'active': this.state.active,
          'dead': !this.state.alive,
        })}>
          {content}
        </div>
      </div>
    );
  },
});

module.exports = Storybox;
