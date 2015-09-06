var React = require('react');

var {ChoiceFactory, LinkFactory} = require('./Link.react.js');

var CHOICES = {
  gender: {
    M: 'boy',
    F: 'girl'
  },
  faveCategory: {
    food: 'food',
    color: 'color',
    sport: 'sport',
  },
  food: {
    burgers: 'burgers',
    'ice cream': 'ice cream',
    ramen: 'ramen',
    steak: 'steak',
  },
  color: {
    red: 'red',
    orange: 'orange',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    purple: 'purple',
    pink: 'pink',
    black: 'black',
    white: 'white',
  },
  sport: {
    baseball: 'baseball',
    soccer: 'soccer',
    football: 'football',
    tennis: 'tennis',
  },
};

var StoryMixin = {
  _numActive: 1,

  getInitialState: function() {
    return {
      gender: null,
      faveCategory: null,
      faveItem: null,
    };
  },

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
          <p>I awaken in a grassy field to the glare of sunlight and a throbbing headache. Rubbing my temples, I crawl to the nearby stream to splash my face. A blank-eyed <Choice of={CHOICES.gender} to="gender" /> stares back at me.</p>
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

      case 'meeting1':
        return (
          <p>I first met Two, napping in the library. There was something familiar about {this.genderObject()}, something that called to me, <Link to="meeting2">drawing my attention</Link>.</p>
        );

      case 'meeting2':
        return (
          <p>I walked over, curious. Two, sensing my presence, <Link to="meeting3">opened {this.genderPossessive()} eyes</Link>.</p>
        );

      case 'meeting3-0':
        return (
          <div>
            <p>{this.genderSubject().capitalize()} sat up and gazed at me.</p>
            <p><Link to="meeting4">I waved at {this.genderObject()}.</Link></p>
          </div>
        );

      case 'meeting3-1':
        return (
          <p>Sensing a presence, I sat up and gazed at {this.genderObject()}.</p>
        );

      case 'meeting4-1':
        return (
          <div>
            <p>{this.genderSubject().capitalize()} waved at me.</p>
            <p><Link to="meeting5">I waved back.</Link></p>
          </div>
        );

      case 'meeting5-0':
        return (
          <div>
            <p>{this.genderSubject().capitalize()} waved back.</p>
            <p><Link to="meeting6">"I'm One," I told {this.genderObject()}.</Link></p>
          </div>
        );

      case 'meeting6-1':
        return (
          <div>
            <p>"I'm One," {this.genderSubject()} told me.</p>
            <p><Link to="meeting7">"Two," I replied.</Link></p>
          </div>
        );

      case 'meeting7-0':
        return (
          <p>"Two," {this.genderSubject()} replied.</p>
        );

      case 'meeting8-0':
        return (
          <p>I told {this.genderObject()} my favorite <Choice of={CHOICES.faveCategory} to="fave1" /></p>
        );

      case 'meeting9-0':
        return (
          <p>was <Choice of={CHOICES[this.state.faveCategory]} to="fave2" />,</p>
        );

      case 'meeting10-0':
        return (
          <p>and it turned out {this.genderPossessive2()} was the same!</p>
        );

      case 'meeting10-1':
        return (
          <p>{this.genderSubject().capitalize()} told me {this.genderObject()} favorite {this.state.faveCategory} was {this.state.faveItem}, and it turned out mine was the same!</p>
        );

      case 'meeting11':
        return (
          <p>Our friendship clicked,</p>
        );

      case 'meeting12':
        return (
          <p>and we set off with a spring in our steps.</p>
        );

      case 'intros-0':
        return (
          <p>The next day, I met <Link to="intros-3">Four</Link> in the kitchen.</p>
        );

      case 'intros-1':
        return (
          <p>The next day, I met <Link to="intros-8">Nine</Link> in the hallway.</p>
        );

      case 'intros-3':
        return (
          <p>One and I shared laughs over drinks and snacks.</p>
        );

      case 'intros-3-2':
        return (
          <p>I hung out with <Link to="intros-2">Three</Link>, <Link to="intros-5">Six</Link>, and <Link to="intros-6">Seven</Link> at the park.</p>
        );

      case 'intros-8':
        return (
          <p>Two and I were headed to the same room.</p>
        );

      case 'intros-8-2':
        return (
          <p><Link to="intros-4">Five</Link> convinced me to try and ride two sheep.</p>
        );

      case 'intros-park':
        return (
          <p>We {this.getParkActivity()}, and chatted the whole evening.</p>
        );

      case 'intros-4':
        return (
          <p>Seven and I cornered two sheep, while <Link to="intros-7">Eight</Link> watched.</p>
        );

      case 'intros-7':
        return (
          <p>Five and Seven fell off spectacularly and the sheep fled.</p>
        );

      case 'intros-done':
        return (
          <p><Link to="friends">friends</Link>.</p>
        );
      case 'friends':
        return (
          <p><Link to="death1">But it didn't last.</Link></p>
        );


      default:
        return null;
    }
  },

  /* On link click, proceed story */
  proceedStory: function(id, to, choice) {
    var {storybox0, storybox1, storybox2, storybox3, storybox4, storybox5, storybox6, storybox7, storybox8} = this.refs;
    var storyboxes = [storybox0, storybox1, storybox2, storybox3, storybox4, storybox5, storybox6, storybox7, storybox8];

    switch (to) {
      case 'gender':
        this.setState({gender: choice});
        storyboxes[id].setText(this.storyText(id, 'river1'));
        break;

      case 'river3':
        storyboxes[id].appendText(this.storyText(id, to));
        break;

      case 'meeting1':
        storyboxes[id].setActive(false);
        setTimeout(() => {
          storyboxes[0].setActive();
          storyboxes[0].setText(this.storyText(0, to));
        }, 800);
        break;

      case 'meeting3':
        storyboxes[0].setText(this.storyText(0, 'meeting3-0'));
        storyboxes[1].setActive();
        storyboxes[1].setText(this.storyText(1, 'meeting3-1'));
        this._numActive++;
        break;

      case 'meeting4':
        storyboxes[1].appendText(this.storyText(1, 'meeting4-1'));
        break;

      case 'meeting5':
        storyboxes[0].appendText(this.storyText(0, 'meeting5-0'));
        break;

      case 'meeting6':
        storyboxes[1].appendText(this.storyText(1, 'meeting6-1'));
        break;

      case 'meeting7':
        storyboxes[0].appendText(this.storyText(0, 'meeting7-0'));
        setTimeout(() => this.proceedStory(0, 'meeting8'), 1000);
        break;

      case 'meeting8':
        storyboxes[0].setText(this.storyText(0, 'meeting8-0'));
        storyboxes[1].clearText();
        break;

      case 'fave1':
        this.setState({faveCategory: choice});
        setTimeout(() => storyboxes[0].appendText(this.storyText(0, 'meeting9-0')), 200);
        break;

      case 'fave2':
        this.setState({faveItem: choice});
        setTimeout(() => {
          storyboxes[0].appendText(this.storyText(0, 'meeting10-0'));
          storyboxes[1].appendText(this.storyText(1, 'meeting10-1'));
        }, 200);
        setTimeout(() => {
          storyboxes[0].setText(this.storyText(0, 'meeting11'));
          storyboxes[1].setText(this.storyText(1, 'meeting11'));
        }, 4000);
        setTimeout(() => {
          storyboxes[0].appendText(this.storyText(0, 'meeting12'));
          storyboxes[1].appendText(this.storyText(1, 'meeting12'));
        }, 5000);
        setTimeout(() => {
          storyboxes[0].setText(this.storyText(0, 'intros-0'));
          storyboxes[1].setText(this.storyText(1, 'intros-1'));
        }, 10000);
        break;

      case 'intros-3':
        storyboxes[3].setActive();
        storyboxes[3].setText(this.storyText(3, 'intros-3'));
        setTimeout(() => storyboxes[3].appendText(this.storyText(3, 'intros-3-2')), 1500);
        this._numActive++;
        break;
      case 'intros-8':
        storyboxes[8].setActive();
        storyboxes[8].setText(this.storyText(8, 'intros-8'));
        setTimeout(() => storyboxes[8].appendText(this.storyText(8, 'intros-8-2')), 2000);
        this._numActive++;
        break;

      case 'intros-2':
        storyboxes[2].setActive();
        storyboxes[2].setText(this.storyText(2, 'intros-park'));
        this._numActive++;
        this.checkAllAlive();
        break;
      case 'intros-5':
        storyboxes[5].setActive();
        storyboxes[5].setText(this.storyText(5, 'intros-park'));
        this._numActive++;
        this.checkAllAlive();
        break;
      case 'intros-6':
        storyboxes[6].setActive();
        storyboxes[6].setText(this.storyText(6, 'intros-park'));
        this._numActive++;
        this.checkAllAlive();
        break;

      case 'intros-4':
        storyboxes[4].setActive();
        storyboxes[4].setText(this.storyText(4, 'intros-4'));
        this._numActive++;
        break;
      case 'intros-7':
        storyboxes[7].setActive();
        storyboxes[7].setText(this.storyText(7, 'intros-7'));
        this._numActive++;
        this.checkAllAlive();
        break;

      case 'intros-done':
        storyboxes.forEach((box) => box.clearText());
        setTimeout(() => storyboxes[0].setText(<p>We joked,</p>), 100);
        setTimeout(() => storyboxes[1].setText(<p>and laughed,</p>), 800);
        setTimeout(() => storyboxes[2].setText(<p>and talked together;</p>), 1600);
        setTimeout(() => storyboxes[3].setText(<p>we dueled,</p>), 3000);
        setTimeout(() => storyboxes[4].setText(<p>and played,</p>), 3600);
        setTimeout(() => storyboxes[5].setText(<p>and fought sometimes;</p>), 4200);
        setTimeout(() => storyboxes[6].setText(<p>but in the end,</p>), 5000);
        setTimeout(() => storyboxes[7].setText(<p>we were still</p>), 5500);
        setTimeout(() => storyboxes[8].setText(this.storyText(8, 'intros-done')), 6000);
        break;

      case 'friends':
        storyboxes.slice(1, 9).forEach((box) => box.setActive(false));
        storyboxes[0].setText(this.storyText(0, 'friends'));
        break;

      default:
        storyboxes[id].setText(this.storyText(id, to));
        break;
    }
  },

  checkAllAlive: function() {
    if (this._numActive === 9) {
      setTimeout(() => this.proceedStory(0, 'intros-done'), 5000);
    }
  },

  genderSubject: function() {
    return this.state.gender === 'M' ? 'he' : 'she';
  },

  genderObject: function() {
    return this.state.gender === 'M' ? 'him' : 'her';
  },

  genderPossessive: function() {
    return this.state.gender === 'M' ? 'his' : 'her';
  },

  genderPossessive2: function() {
    return this.state.gender === 'M' ? 'his' : 'hers';
  },

  getParkActivity: function() {
    var parkActivity = '';
    if (this.state.faveCategory && this.state.faveItem) {
      if (this.state.faveCategory === 'food') {
        parkActivity = 'ate ' + this.state.faveItem;
      } else if (this.state.faveCategory === 'color') {
        parkActivity = 'were all wearing ' + this.state.faveItem + ' shirts';
      } else if (this.state.faveCategory === 'sport') {
        parkActivity = 'played ' + this.state.faveItem;
      }
    }
    return parkActivity;
  },
};

module.exports = StoryMixin;
