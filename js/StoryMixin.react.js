var React = require('react');

var {ChoiceFactory, LinkFactory} = require('./Link.react.js');

var StoryMixin = {
  /* Master object of story text */
  storyText: function(id, value) {
    var Link = LinkFactory(this.proceedStory, id);
    var Choice = ChoiceFactory(this.proceedStory, id);

    switch (value) {
      case 'menu':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <h5><Link to="start">Start</Link></h5>
            <h5><Link to="credits">Credits</Link></h5>
          </div>
        );

      case 'start':
        return (
          <p>I awaken in a grassy field to the glare of sunlight and a throbbing headache. Rubbing my temples, I crawl to the nearby stream to splash my face. A blank-eyed <Choice of={{boy: 'boy', girl: 'girl'}} /> stares back at me.</p>
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

      case 'river1':
        return (
          <p>Reflected in the rippling current is a familiar face. Lips stuck in a permanent grimace. Glassy eyes, somewhere far in the distance. But as usual, I am drawn to the <Link to="river2">red ink</Link> scrawled on my forehead.</p>
        );

      case 'river2':
        return (
          <p>One. That was the number I was assigned. We were all, once. All <Link to="river3">nine of us</Link>...</p>
        );

      case 'river3':
        return (
          <p>Yes, back then, we were a gang. <Link to="meeting1">Together, inseparable.</Link> Life was different then.</p>
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
      case 'boy':
        this.setState({gender: 'M'});
        storyboxes[id].setText(this.storyText(id, 'river1'));
        break;

      case 'girl':
        this.setState({gender: 'F'});
        storyboxes[id].setText(this.storyText(id, 'river1'));
        break;

      case 'river3':
        storyboxes[id].appendText(this.storyText(id, to));
        break;

      default:
        storyboxes[id].setText(this.storyText(id, to));
        break;
    }

  },
};

module.exports = StoryMixin;
