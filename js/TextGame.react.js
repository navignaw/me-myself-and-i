var React = require('react');

var Storybox = require('./Storybox.react.js');
var StoryMixin = require('./StoryMixin.react.js');

var TextGame = React.createClass({
  mixins: [StoryMixin],

  getInitialState: function() {
    return {
      gender: null,
      faveCategory: null,
      faveItem: null,
    };
  },

  componentDidMount: function() {
    this.refs.storybox4.setActive(true);
    this.refs.storybox4.appendText(this.storyText(4, 'menu'));
  },

  render: function() {
    return (
      <div className="container" id="stories">
        <Storybox ref="storybox0" key={0} />
        <Storybox ref="storybox1" key={1} />
        <Storybox ref="storybox2" key={2} />
        <Storybox ref="storybox3" key={3} />
        <Storybox ref="storybox4" key={4} />
        <Storybox ref="storybox5" key={5} />
        <Storybox ref="storybox6" key={6} />
        <Storybox ref="storybox7" key={7} />
        <Storybox ref="storybox8" key={8} />
      </div>
    );
  },
});

module.exports = TextGame;
