var React = require('react');

var Link = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired,
  },

  render: function() {
    return (
      <a className="story-link" onClick={this.props.onClick}>
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

module.exports = LinkFactory;
