var React = require('react');

var cx = require('classnames');

require('./helper.js');

var Link = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      clicked: false,
    };
  },

  _onClick: function(id, to) {
    if (this.state.clicked) {
      return;
    }

    this.setState({clicked: true});
    this.props.onClick(id, to);
  },

  render: function() {
    return (
      <a
        className={cx('story-link', {'disabled': this.state.clicked})}
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
    },

    render: function() {
      return (
        <Link onClick={onClick.bind(null, id, this.props.to)}>
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
      newLines: React.PropTypes.bool,
    },

    render: function() {
      var choices = this.props.of;

      var links = $.map(choices, (value, key) =>
        <Link key={key} onClick={onClick.bind(null, id, key)}>
          {value}
        </Link>
      );

      if (this.props.newLines) {
        return <span>{links.intersperse(<br />)}</span>;
      }

      return (
        <span className="choice">
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
