import React, { Component } from 'react';
import './App.css';
import randomColor from 'randomcolor';
import FontAwesomeIcon from '@ntag/react-fontawesome';
import { kebabCase } from 'lodash';

const icons = [
  'faBalanceScale',
  'faCloudSun',
  'faAtom',
  'faBatteryHalf',
  'faBicycle',
  'faBellSlash',
  'faBirthdayCake',
  'faBookDead',
  'faBroadcastTower',
  'faCalendarAlt',
  'faChargingStation',
  'faCar',
  'faCapsules',
  'faCheckDouble',
  'faCloudSunRain',
  'faCloudRain',
  'faCode',
  'faEdit',
  'faEject',
  'faExchangeAlt',
  'faEnvelopeOpenText',
  'faFingerprint',
  'faGraduationCap',
  'faGlobe',
  'faHome',
  'faIdCard',
  'faLaptop',
  'faLaptopCode',
  'faList',
  'faMailBulk',
  'faMicrophone',
  'faMicrophoneAlt',
  'faMoneyCheckAlt',
  'faPlaneDeparture',
  'faSeedling',
  'faRecycle',
];

const iconName = (icon) => {
  return kebabCase(icon).replace('fa-', '');
};

class App extends Component {
  state = {
    icons: [],
    key: 0,
  }

  palette() {
    const numberOfColors = 2 + Math.ceil(Math.random() * 10);
    const colors = randomColor({
      count: numberOfColors,
      hue: randomColor(),
   });
    return [...colors, ...colors, ...colors, ...colors, ...colors, ...colors];
  }

  // From https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
  changeIcons() {
    const numberOfIcons = 12;
    const shuffled = icons.sort(() => .5 - Math.random());
    this.setState({
      icons: shuffled.slice(0, numberOfIcons).map(iconName),
    });
  }

  changeColors() {
    this.setState({
      key: this.state.key + 1,
    });
  }

  componentDidMount() {
    this.changeIcons();
  }

  render() {
    return (
      <div className="App">
        <div className="Icons">
          {this.state.icons.slice(0, 6).map((icon, i) => (
            <div className="Icon" key={icon}>
              <FontAwesomeIcon
                icon={icon}
                fill={this.palette()}
              />
            </div>
          ))}
        </div>
        <div className="Title">
          Font Awesome, <span className="gradient">Colored</span>
        </div>
        <div className="Icons">
          {this.state.icons.slice(6, 12).map((icon, i) => (
            <div className="Icon" key={icon}>
              <FontAwesomeIcon
                icon={icon}
                fill={this.palette()}
              />
            </div>
          ))}
        </div>
        <div className="Buttons">
          <div
            className="Button"
            style={{ background: '#FF4136' }}
            onClick={() => this.changeColors()}
          >
            <FontAwesomeIcon
              icon="sync-alt"
              fill0="#01FF70"
              fill1="#FFDC00"
            />
            <span>Change colors</span>
          </div>
          <div
            className="Button"
            style={{ background: '#0074D9' }}
            onClick={() => this.changeIcons()}
          >
            <FontAwesomeIcon
              icon="palette"
              fill0="#001f3f"
            />
            <span>Change icons</span>
          </div>
        </div>
        <div className="Legend">
          <div>
            Color <b>individual pieces</b> of <a href="https://fontawesome.com/" title="Font Awesome website" target="_blank">Font Awesome</a> icons using React.
          </div>
          <a href="https://github.com/NTag/react-fontawesome" title="View Github project">
            View on Github
          </a>
        </div>
      </div>
    );
  }
}

export default App;
