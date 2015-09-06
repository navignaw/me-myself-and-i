var React = require('react');

var LinkFactory = require('./Link.react.js');

var StoryMixin = {
  /* Master object of story text */
  storyText: function(id, value) {
    var Link = LinkFactory(this.proceedStory, id);

    switch (value) {
      case 'menu':
        return (
          <div className="menu text-center">
            <h5><Link to="start">Start</Link></h5>
            <h5><Link to="credits">Credits</Link></h5>
          </div>
        );

      case 'start':
        return (
          <p>I awaken in a grassy field to the glare of sunlight and a throbbing headache. Rubbing my temples, I crawl to the nearby stream to splash my face. A blank-eyed <Link to="boy">boy</Link>, <Link to="girl">girl</Link> stares back at me.</p>
        );

      case 'credits':
        return (
          <div className="credits text-center">
            <h5>Story & Design: Ivan Wang (one)</h5>
            <h5>Programming: Ivan Wang (two)</h5>
            <h5>Testing: </h5>
            <h5><Link to="menu">Back</Link></h5>
          </div>
        );

      default:
        return null;
    }
  },

  /* On link click, proceed story */
  proceedStory: function(id, to) {
    var {storybox0, storybox1, storybox2, storybox3, storybox4, storybox5, storybox6, storybox7, storybox8} = this.refs;
    var storyboxes = [storybox0, storybox1, storybox2, storybox3, storybox4, storybox5, storybox6, storybox7, storybox8];

    console.log(id, to);
    switch (to) {
      default:
        storyboxes[id].setText(this.storyText(id, to));
    }
  },
};

module.exports = StoryMixin;
