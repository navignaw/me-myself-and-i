var React = require('react');

var {ChoiceFactory, LinkFactory} = require('./Link.react.js');

var CHOICES = {
  gender: {
    boy: 'M',
    girl: 'F'
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
  },
  sport: {
    basketball: 'basketball',
    baseball: 'baseball',
    soccer: 'soccer',
    football: 'football',
    tennis: 'tennis',
  },

  lifeReasons: {
    'I was just lucky.': 'lucky',
    'I was number One. I deserved it.': 'selfish',
    'I was a coward.': 'coward',
  },

  endingChoice: {
    'I wash the number off in the river.': 'cleanse',
    'I keep the number.': 'keep',
  },
};

var StoryMixin = {
  _numActive: 1,
  _pills: 0,
  _refusals: 0,
  _volunteers: 0,

  getInitialState: function() {
    return {
      gender: null,
      faveCategory: null,
      faveItem: null,
      dead: [],
      lifeReason: null,
      unlockedEndings: [],
    };
  },

  /* Master object of story text */
  storyText: function(id, value) {
    var Link = LinkFactory(this.proceedStory, id);
    var Choice = ChoiceFactory(this.proceedStory, id);

    switch (value) {
      case 'menu':
        var testing = <h4><Link to="TESTING_ONLY">TESTING ONLY</Link></h4>;
        var cover = <h4><Link to="TITLE_COVER">Cover</Link></h4>;

        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <h4><Link to="start">Start</Link></h4>
            <h4><Link to="credits">Credits</Link></h4>
            {/*testing || cover*/ null}
          </div>
        );

      case 'title-cover-0':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of multiple identities</p>
          </div>
        );

      case 'title-cover-1':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of camaraderie</p>
          </div>
        );

      case 'title-cover-2':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of luck</p>
          </div>
        );

      case 'title-cover-3':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of friendship and trust</p>
          </div>
        );

      case 'title-cover-4':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of selfishness</p>
          </div>
        );

      case 'title-cover-5':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of betrayal</p>
          </div>
        );

      case 'title-cover-6':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of courage</p>
          </div>
        );

      case 'title-cover-6':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of cowardice</p>
          </div>
        );

      case 'title-cover-7':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of individuality</p>
          </div>
        );

      case 'title-cover-8':
        return (
          <div className="menu text-center">
            <h2>me, myself, and I</h2>
            <br />
            <p>a game of sacrifice</p>
          </div>
        );

      case 'start':
        return <p>I awaken in a grassy field to the glare of sunlight and a throbbing headache. Rubbing my temples, I crawl to the nearby stream to splash my face. A blank-eyed <Choice of={CHOICES.gender} to="gender" /> stares back at me.</p>;

      case 'credits':
        return (
          <div className="credits text-center">
            <h4>Story & Design: Ivan Wang (one)</h4>
            <h4>Programming: Ivan Wang (two)</h4>
            <h4>Testing: Archit Amal Sahay</h4>
            <h4><Link to="menu">Back</Link></h4>
          </div>
        );

      case 'river1':
        return <p>Reflected in the rippling current is a familiar face. Lips stuck in a permanent grimace. Glassy eyes, somewhere far in the distance. But as usual, I am drawn to the <Link to="river2">red ink</Link> scrawled on my forehead.</p>;

      case 'river2':
        return <p>One. That was the number I was assigned. We were all, once. All <Link to="river3">nine of us</Link>...</p>;

      case 'river3':
        return <p>Yes, back then, we were a gang. <Link to="meeting1">Together, inseparable.</Link> Life was different then.</p>;

      case 'meeting1':
        return <p>I first met Two, napping in the library. There was something familiar about {this.genderObject()}, something that called to me, <Link to="meeting2">drawing my attention</Link>.</p>;

      case 'meeting2':
        return <p>I walked over, curious. Two, sensing my presence, <Link to="meeting3">opened {this.genderPossessive()} eyes</Link>.</p>;

      case 'meeting3-0':
        return (
          <div>
            <p>{this.genderSubject().capitalize()} sat up and gazed at me.</p>
            <p><Link to="meeting4">I waved at {this.genderObject()}.</Link></p>
          </div>
        );

      case 'meeting3-1':
        return <p>Sensing a presence, I sat up and gazed at {this.genderObject()}.</p>;

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
        return <p>"Two," {this.genderSubject()} replied.</p>;

      case 'meeting8-0':
        return <p>I told {this.genderObject()} my favorite <Choice of={CHOICES.faveCategory} to="fave1" /></p>;

      case 'meeting9-0':
        return <p>was <Choice of={CHOICES[this.state.faveCategory]} to="fave2" />,</p>;

      case 'meeting10-0':
        return <p>and it turned out {this.genderPossessive2()} was the same!</p>;

      case 'meeting10-1':
        return <p>{this.genderSubject().capitalize()} told me {this.genderObject()} favorite {this.state.faveCategory} was {this.state.faveItem}, and it turned out mine was the same!</p>;

      case 'meeting11':
        return <p>Our friendship clicked,</p>;

      case 'meeting12':
        return <p>and we set off with a spring in our steps.</p>;

      case 'intros-0':
        return <p>The next day, I met <Link to="intros-3">Four</Link> in the kitchen.</p>;

      case 'intros-1':
        return <p>The next day, I met <Link to="intros-8">Nine</Link> in the hallway.</p>;

      case 'intros-3':
        return <p>One and I shared laughs over drinks and snacks.</p>;

      case 'intros-3-2':
        return <p>I hung out with <Link to="intros-2">Three</Link>, <Link to="intros-5">Six</Link>, and <Link to="intros-6">Seven</Link> at the park.</p>;

      case 'intros-8':
        return <p>Two and I were headed to the same room.</p>;

      case 'intros-8-2':
        return <p><Link to="intros-4">Five</Link> convinced me to play in the sheep pen.</p>;

      case 'intros-park':
        return <p>We {this.getParkActivity()}, and chatted the whole evening.</p>;

      case 'intros-4':
        return <p>Nine and I cornered two sheep, while <Link to="intros-7">Eight</Link> watched.</p>;

      case 'intros-7':
        return <p>Five tripped spectacularly and Nine and I laughed as the sheep fled.</p>;

      case 'intros-done':
        return <p><Link to="friends">friends</Link>.</p>;

      case 'friends':
        return <p><Link to="death1">But it didn't last.</Link></p>;

      case 'death1':
        return <p>The third month, <Choice of={{Two: 1, Four: 3, Seven: 6}} to="death2" /> fell sick and passed away.</p>;

      case 'death2':
        return <p>Walking to my room, a pain blossomed in my chest, and the ground rushed at me.</p>;

      case 'death3':
        return <p>The fifth month, <Choice of={{Three: 2, Five: 4, Eight: 7}} to="death4" /> died in {this.genderPossessive()} sleep.</p>;

      case 'death4':
        return <p>I was seized and strapped to a bed. I never woke up.</p>;

      case 'death5':
        return <p>The next day, <Choice of={{Six: 5, Nine: 8}} to="death6" /> disappeared without a trace.</p>;

      case 'death6':
        return <p>I watched them grab {this.getSecondDead()} and followed them. The last thing I heard was {this.genderPossessive()} screams before all went dark.</p>;

      case 'death7':
        return <p>And then, <Link to="ribbit1">just yesterday</Link>, we were assembled into a room...</p>;

      case 'ribbit1':
        return <p>A ribbit jolts me out of the past. Shaking, I turn to see a frog leap into the river, only to be <Link to="ribbit2">seized</Link> by the claws of a large bird.</p>;

      case 'ribbit2':
        return <p>Life, extinguished just like that. Why am I the lone survivor? <Link to="why">Why do I live on</Link>, while the others are snatched away by the claws of death?</p>;

      case 'why':
        return (
          <div>
            <p>I tell myself again:</p>
            <Choice newLines={true} of={CHOICES.lifeReasons} to="life-reasons" />
          </div>
        );

      case 'lucky':
        return <p>After all, we had the same chance of survival, back in that <Link to="end1">grim room</Link>...</p>;

      case 'selfish':
        return <p>After all, wasn't one the greatest? The original? The others were copies. It was only inevitable, back in that <Link to="end1">grim room</Link>...</p>;

      case 'coward':
        return <p>Even though they chose their own fates... I should have said something, back in that <Link to="end1">grim room</Link>...</p>;

      case 'end1':
        return <p>I was led into a small room.</p>;

      case 'end2':
        return <p>A lady explained to me that their funding had run out,</p>;

      case 'end3':
        return <p>and that we could no longer continue the way we used to.</p>;

      case 'end4-0':
        return <p>Well, all but <Link to="end5">one of us</Link>...</p>;

      case 'end4-1':
        return <p>Well, all but one of us...</p>;

      case 'end5-0':
        return <p>We were given a choice. We could select <Link to="end6">one of us</Link> who would survive... and the rest would be "put to a nice, long sleep."</p>;

      case 'end5-1':
        return <p>We were given a choice. We could select one of us who would survive... and the rest would be "put to a nice, long sleep."</p>;

      case 'end6-0':
        return (
          <div>
            <p>There was a long silence. Then I spoke:</p>
            <Choice newLines={true} of={this.getFinalChoice()} to="decision" />
          </div>
        );

      case 'end6-1':
        return <p>There was a long silence.</p>;

      /* LUCK BRANCH */
      case 'lucky-choice':
        return <p>The lady nodded, and pulled out a bottle of pills. "Each of you will <Link to="lucky-pill">take one</Link>," she said. "You will be put to sleep-- and exactly one of you will wake."</p>;

      case 'lucky-pill':
        var responses = [
          <p>I swallowed the pill and darkness swallowed me. My last thought was if I would see tomorrow.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was wondering which one of us would live.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was who would survive to see tomorrow.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was how everything would be different tomorrow.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was fear for myself, and for my friends.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was if I would see tomorrow.</p>,
        ];
        return responses[Math.floor(Math.random() * responses.length)];

      /* SELFISH BRANCH */
      case 'selfish-choice-0':
        return <p>I am One, the original. I deserve to live.</p>;

      case 'selfish-choice-1':
        var responses = [
          <p>I could not believe my ears as One, my longtime friend, claimed a right to live over me. <Link to="selfish-refusal">No, I would not have it.</Link></p>,
          <p>What did One say? He deserved to live because of his label, while we would die? <Link to="selfish-refusal">No, I would not have it.</Link></p>,
          <p>How could One be so selfish? What did a single number or label matter? <Link to="selfish-refusal">No, I would not have it.</Link></p>,
          <p>As One proclaimed himself special, I shook my head in disbelief. <Link to="selfish-refusal">No, I would not have it.</Link></p>,
          <p>How could One's life be more valuable than any of ours? <Link to="selfish-refusal">No, I would not have it.</Link></p>,
        ];
        return responses[Math.floor(Math.random() * responses.length)];

      case 'selfish-refusal':
        return <p>I protested loudly, demanding a fairer decision.</p>;

      case 'selfish-all-refused':
        return <p>The lady silenced us, and pulled out a bottle of pills. "Since we cannot settle this in a civilized manner... each of you will <Link to="selfish-pill">take one</Link>," she demanded. "You will be put to sleep-- and exactly one of you will wake."</p>;

      case 'selfish-pill':
        var responses = [
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friend's betrayal.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friend's selfishness.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friend's bitterness.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friend's self-righteousness.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friend's betrayal.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friend's selfishness.</p>,
        ];
        return responses[Math.floor(Math.random() * responses.length)];

      /* COWARD BRANCH */
      case 'coward-choice-0':
        return <p>As I opened my mouth to speak, the others stepped forward and interrupted...</p>;

      case 'coward-choice-1':
        return <p>I stepped forward and <Link to="coward-volunteer">volunteered to die</Link>.</p>;

      case 'coward-all-volunteered':
        return <p>The lady silenced us, and pulled out a bottle of pills. "You are all very brave, but since we cannot settle this... each of you will <Link to="coward-pill">take one</Link>," she declared. "You will be put to sleep-- and exactly one of you will wake."</p>;

      case 'coward-pill':
        var responses = [
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friends' bravery.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friends' courage.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of my friends' support.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of our refusal to let each other die.</p>,
          <p>I swallowed the pill and darkness swallowed me. My last thought was of our bond.</p>,
        ];
        return responses[Math.floor(Math.random() * responses.length)];

      /* SURVIVED ENDING */
      case 'survived':
        return <p>I awaken in a grassy field to the glare of sunlight and a throbbing headache. Rubbing my temples, I crawl to the nearby <Link to="survived2">stream</Link> to splash my face. A blank-eyed {this.genderBoyGirl()} stares back at me.</p>

      case 'survived2':
        return <p>Reflected in the rippling current is a familiar face. Lips stuck in a permanent grimace. Glassy eyes, somewhere far in the distance. But as usual, I am drawn to the <Link to="survived3">red ink</Link> scrawled on my forehead.</p>;

      case 'survived3':
        return <p>One. That was the number I was <Link to="survived4">assigned</Link>.</p>;

      case 'survived4':
        return <p><Link to="survived5">What was it they told me?</Link></p>;

      case 'reveal1':
        return <p>You are {this.getAdjective()}, child.</p>;

      case 'reveal2':
        return <p>You are number one!</p>;

      case 'reveal3':
        return <p>But... well, actually, I'll let you in on a <Link to="reveal4">secret</Link>.</p>;

      case 'reveal4':
        return <p>The truth is, you were all mixed up as babies...</p>;

      case 'reveal5':
        return <p>In fact, there was no way to tell which of you was the original.</p>;

      case 'reveal6':
        return <p>So we ended up just labelling you randomly! How <Link to="reveal7">funny</Link> is that?</p>;

      case 'reveal7':
        return <p>Funny. Life is funny. I'm alive and here, yet at the same time, dead in eight different places.</p>;

      case 'reveal8':
        return <p>Yet... one of us was always guaranteed to survive, and so I would always have <Link to="reveal9">lived on</Link>.</p>;

      case 'reveal9':
        return (
          <div>
            <p>The sun shines, and life goes on. I glance one more time at the red ink on my forehead.</p>
            <Choice newLines={true} of={CHOICES.endingChoice} to="ending" />
          </div>
        );

      case 'cleanse':
        return <p>I am One. But I am Two, and Three, Four and Five, Six and Seven, Eight and Nine. Cleansing the digit and single identity, I move on and embrace a life with me, myself, and I.</p>;

      case 'keep':
        return <p>I am One, but no more. This is my identity, and I will keep it to remain true to myself. Though the others have gone, they will live on. I will live on, and embrace a life with me, myself, and I.</p>;

      case 'fin':
        return <p><Link to="fin">END</Link></p>;

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
        storyboxes.slice(1, 9).forEach((box) => box.setAsleep(true));
        storyboxes[0].setText(this.storyText(0, 'friends'));
        break;

      case 'death2':
        storyboxes[choice].die();
        var dead = this.state.dead;
        dead.push(choice);
        this.setState({dead: dead});
        storyboxes[choice].setText(this.storyText(choice, 'death2'));
        setTimeout(() => this.proceedStory(0, 'death3'), 2500);
        break;

      case 'death3':
      case 'death5':
      case 'death7':
        storyboxes[id].appendText(this.storyText(id, to));
        break;

      case 'death4':
        storyboxes[choice].die();
        var dead = this.state.dead;
        dead.push(choice);
        this.setState({dead: dead});
        storyboxes[choice].setText(this.storyText(choice, 'death4'));
        setTimeout(() => this.proceedStory(0, 'death5'), 2500);
        break;

      case 'death6':
        storyboxes[choice].die();
        var dead = this.state.dead;
        dead.push(choice);
        this.setState({dead: dead});
        storyboxes[choice].setText(this.storyText(choice, 'death6'));
        setTimeout(() => this.proceedStory(0, 'death7'), 2500);
        break;

      case 'life-reasons':
        this.setState({lifeReason: choice});
        storyboxes[0].setText(this.storyText(0, choice));
        break;

      case 'end1':
        this.stillAlive().forEach((box) => {
          storyboxes[box].setAsleep(false);
          setTimeout(() => storyboxes[box].setText(this.storyText(box, 'end2')), 500);
          setTimeout(() => storyboxes[box].appendText(this.storyText(box, 'end3')), 2500);
          if (box === 0) {
            setTimeout(() => storyboxes[box].appendText(this.storyText(box, 'end4-0')), 4500);
          } else {
            setTimeout(() => storyboxes[box].appendText(this.storyText(box, 'end4-1')), 4500);
          }
        });
        break;

      case 'end5':
        this.stillAlive().forEach((box) => {
          if (box === 0) {
            storyboxes[box].setText(this.storyText(box, 'end5-0'));
          } else {
            storyboxes[box].setText(this.storyText(box, 'end5-1'));
          }
        });
        break;

      case 'end6':
        this.stillAlive().forEach((box) => {
          if (box === 0) {
            storyboxes[box].setText(this.storyText(box, 'end6-0'));
          } else {
            storyboxes[box].setText(this.storyText(box, 'end6-1'));
          }
        });
        break;

      case 'decision':
        this.stillAlive().forEach((box) => {
          if (choice === 'selfish-choice') {
            if (box === 0) {
              storyboxes[0].setText(this.storyText(0, 'selfish-choice-0'));
            } else {
              storyboxes[box].setText(this.storyText(box, 'selfish-choice-1'));
            }
          } else if (choice === 'coward-choice') {
            if (box === 0) {
              storyboxes[0].setText(this.storyText(0, 'coward-choice-0'));
            } else {
              storyboxes[box].setText(this.storyText(box, 'coward-choice-1'));
            }
          } else {
            storyboxes[box].setText(this.storyText(box, choice));
          }
        });
        break;

      case 'lucky-pill':
      case 'selfish-pill':
      case 'coward-pill':
        storyboxes[id].setText(this.storyText(id, to));
        this.checkPills();
        break;

      case 'pills-taken':
        this.stillAlive().forEach((box) => {
          if (box === 0) {
            storyboxes[0].setText(this.storyText(0, 'survived'));
          } else {
            storyboxes[box].die();
          }
        })
        break;

      case 'selfish-refusal':
        storyboxes[id].appendText(this.storyText(id, 'selfish-refusal'));
        this.checkRefusals();
        break;

      case 'coward-volunteer':
        this.checkVolunteers();
        break;

      case 'survived5':
        setTimeout(() => storyboxes[0].setText(this.storyText(0, 'reveal1')), 500);
        setTimeout(() => storyboxes[0].appendText(this.storyText(0, 'reveal2')), 2500);
        setTimeout(() => storyboxes[0].appendText(this.storyText(0, 'reveal3')), 4500);
        break;

      case 'reveal4':
        setTimeout(() => storyboxes[0].setText(this.storyText(0, 'reveal4')), 500);
        setTimeout(() => storyboxes[0].appendText(this.storyText(0, 'reveal5')), 4000);
        setTimeout(() => storyboxes[0].appendText(this.storyText(0, 'reveal6')), 8000);
        break;

      case 'reveal7':
        setTimeout(() => storyboxes[0].setText(this.storyText(0, 'reveal7')), 500);
        setTimeout(() => storyboxes[0].appendText(this.storyText(0, 'reveal8')), 5000);
        break;

      case 'ending':
        storyboxes[0].setText(this.storyText(0, choice));
        setTimeout(() => storyboxes[0].appendText(this.storyText(0, 'fin')), 5000);
        break;

      case 'fin':
        this.resetState();
        storyboxes[0].setText(this.storyText(0, 'credits'));
        storyboxes.slice(1, 9).forEach((box) => box.reanimate());
        break;

      case 'TITLE_COVER':
        storyboxes.forEach((box, index) => {
          box.setActive(true);
          if (index !== 0) {
            box.setAsleep(true);
          }
          box.setText(this.storyText(index, 'title-cover-' + index));
        });
        storyboxes[5].die();
        break;

      case 'TESTING_ONLY':
        this.setState({
          gender: 'M',
          faveCategory: 'food',
          faveItem: 'burgers',
          dead: [2, 3, 9],
          lifeReason: 'coward',
        });
        storyboxes.forEach((box, index) => {
          box.clearText();
          box.setActive();
          if ([2, 3, 9].indexOf(index) !== -1) {
            box.die();
          }
        });
        setTimeout(() => this.proceedStory(0, 'end1'), 1000);
        break;

      default:
        storyboxes[id].setText(this.storyText(id, to));
        break;
    }
  },

  checkAllAlive: function() {
    if (this._numActive === 9) {
      setTimeout(() => this.proceedStory(0, 'intros-done'), 3000);
    }
  },

  checkPills: function() {
    if (++this._pills === 6) {
      setTimeout(() => this.proceedStory(0, 'pills-taken'), 1000);
    }
  },

  checkRefusals: function() {
    if (++this._refusals === 5) {
      this.stillAlive().forEach((box) => {
        setTimeout(() => this.proceedStory(box, 'selfish-all-refused'), 1000);
      });
    }
  },

  checkVolunteers: function() {
    if (++this._volunteers === 5) {
      this.stillAlive().forEach((box) => {
        setTimeout(() => this.proceedStory(box, 'coward-all-volunteered'), 1000);
      });
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

  genderBoyGirl: function() {
    return this.state.gender === 'M' ? 'boy' : 'girl';
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

  getSecondDead: function() {
    if (this.state.dead.length < 2) {
      return '';
    }
    switch (this.state.dead[1]) {
      case 2:
        return 'Three';
      case 4:
        return 'Five';
      case 7:
        return 'Eight';
    }
    return '';
  },

  getAdjective: function() {
    if (this.state.lifeReason === 'lucky') {
      return 'lucky';
    } else if (this.state.lifeReason === 'selfish') {
      return 'special';
    } else {
      return 'brave';
    }
  },

  stillAlive: function() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].filter((elem) =>
      this.state.dead.indexOf(elem) === -1
    );
  },

  getFinalChoice: function() {
    if (this.state.lifeReason === 'lucky') {
      return {
        'We will leave it to luck.': 'lucky-choice',
      };
    } else if (this.state.lifeReason === 'selfish') {
      return {
        'I am One. The original. I should be the one to live.': 'selfish-choice',
      };
    } else {
      return {
        'I will die, so another can live.': 'coward-choice',
      };
    }
  },

  resetState: function() {
    this._numActive = 1;
    this._pills = 0;
    this._refusals = 0;
    this._volunteers = 0;
    this.setState({dead: []});
  },
};

module.exports = StoryMixin;
