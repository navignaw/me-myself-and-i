var React = require('react');

var cx = require('classnames');

var $ = require('jquery');
require('./helper.js');

var Link = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
  },

  getInitialState: function() {
    return {
      clicked: false,
    };
  },

  _onClick: function(id, to) {
    if (this.state.clicked || this.state.disabled) {
      return;
    }

    this.setState({clicked: true});
    this.props.onClick(id, to);
  },

  render: function() {
    return (
      <a
        className={cx('story-link', {
          'disabled': this.state.clicked,
          'gray': this.props.disabled,
        })}
        onClick={this._onClick}>
        {this.props.children}
      </a>
    );
  },
});

var LinkFactory = function(onClick, id) {
  return React.createClass({
    propTypes: {
      children: React.PropTypes.node.isRequired,
      to: React.PropTypes.string.isRequired,
      disabled: React.PropTypes.bool,
    },

    render: function() {
      return (
        <Link onClick={onClick.bind(null, id, this.props.to)} disabled={this.props.disabled}>
          {this.props.children}
        </Link>
      );
    },
  });
};

var ChoiceFactory = function(onClick, id) {
  return React.createClass({
    propTypes: {
      of: React.PropTypes.object.isRequired,
      to: React.PropTypes.string.isRequired,
      newLines: React.PropTypes.bool,
    },

    getInitialState: function() {
      return {
        clickedVal: null,
      };
    },

    _onClick: function(id, to, key, value) {
      if (this.state.clickedVal) {
        return;
      }

      this.setState({clickedVal: key});
      onClick(id, to, value);
    },

    render: function() {
      var choices = this.props.of;
      var to = this.props.to;

      // Hide other choices if we already clicked
      if (this.state.clickedVal) {
        return <span>{this.state.clickedVal}</span>;
      }

      var links = $.map(choices, (value, key) =>
        <Link key={key} clicked={this.state.clicked}
          onClick={this._onClick.bind(null, id, to, key, value)}>
          {key}
        </Link>
      );

      if (this.props.newLines) {
        return <span>{links.intersperse(<br />)}</span>;
      }

      return (
        <span className={cx({'choice': !this.state.clicked})}>
          {'{'}{links.intersperse(', ')}{'}'}
        </span>
      );
    },
  });
};

module.exports = {
  ChoiceFactory,
  LinkFactory,
};
