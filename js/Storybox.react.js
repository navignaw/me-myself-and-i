var React = require('react');
var TransitionGroup = require('timeout-transition-group');

var cx = require('classnames');
var TimerMixin = require('react-timer-mixin');

/**
 * Each storybox is a physical box corresponding to the POV of a single clone.
 */
var Storybox = React.createClass({
  mixins: [TimerMixin],

  propTypes: {
    key: React.PropTypes.number,
  },

  getInitialState: function() {
    return {
      active: false,
      alive: true,
      asleep: false,
      content: [],
    };
  },

  setActive: function(value) {
    this.setState({active: value === undefined ? true : value});
    if (value === false) {
      this.clearText();
    }
  },

  setAsleep: function(value) {
    this.setState({asleep: value === undefined ? true : value});
    if (value === false) {
      this.clearText();
    }
  },

  die: function() {
    this.setState({alive: false});
  },

  reanimate: function() {
    this.clearText();
    this.setState({
      alive: true,
      active: false,
      asleep: false,
    });
  },

  clearText: function() {
    this.setState({content: []});
  },

  setText: function(value, append) {
    var content;
    if (append === true) {
      content = this.state.content;
      content.push(value);
      this.setState({content: content});
    } else {
      this.clearText();
      this.setTimeout(() => this.setState({content: [value]}), 250);
    }
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
          'asleep': this.state.alive && this.state.asleep,
          'dead': !this.state.alive,
        })}>
          <TransitionGroup
            enterTimeout={200}
            leaveTimeout={100}
            transitionName="content">
            {content}
          </TransitionGroup>
        </div>
      </div>
    );
  },
});

module.exports = Storybox;
