import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBalanceScale,
  faCloudSun,
  faAtom,
  faBatteryHalf,
  faBicycle,
  faBellSlash,
  faBirthdayCake,
  faBookDead,
  faBroadcastTower,
  faCalendarAlt,
  faChargingStation,
  faCar,
  faCapsules,
  faCheckDouble,
  faCloudSunRain,
  faCloudRain,
  faCode,
  faEdit,
  faEject,
  faExchangeAlt,
  faEnvelopeOpenText,
  faFingerprint,
  faGraduationCap,
  faGlobe,
  faHome,
  faIdCard,
  faLaptop,
  faLaptopCode,
  faList,
  faMailBulk,
  faMicrophone,
  faMicrophoneAlt,
  faMoneyCheckAlt,
  faPlaneDeparture,
  faSeedling,
  faRecycle,
  faSyncAlt,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';

library.add(faBalanceScale);
library.add(faCloudSun);
library.add(faAtom);
library.add(faBatteryHalf);
library.add(faBicycle);
library.add(faBellSlash);
library.add(faBirthdayCake);
library.add(faBookDead);
library.add(faBroadcastTower);
library.add(faCalendarAlt);
library.add(faChargingStation);
library.add(faCar);
library.add(faCapsules);
library.add(faCheckDouble);
library.add(faCloudSunRain);
library.add(faCloudRain);
library.add(faCode);
library.add(faEdit);
library.add(faEject);
library.add(faExchangeAlt);
library.add(faEnvelopeOpenText);
library.add(faFingerprint);
library.add(faGraduationCap);
library.add(faGlobe);
library.add(faHome);
library.add(faIdCard);
library.add(faLaptop);
library.add(faLaptopCode);
library.add(faList);
library.add(faMailBulk);
library.add(faMicrophone);
library.add(faMicrophoneAlt);
library.add(faMoneyCheckAlt);
library.add(faPlaneDeparture);
library.add(faSeedling);
library.add(faRecycle);
library.add(faSyncAlt);
library.add(faPalette);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
