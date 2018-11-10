import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Snap from 'snapsvg-cjs';

class FontAwesomeIconClass extends Component {
  render() {
    return (
      <FontAwesomeIcon {...this.props} />
    );
  }
}

const svgNS = 'http://www.w3.org/2000/svg';
const pathToSVG = (path) => {
  const p = document.createElementNS(svgNS, 'path');
  p.setAttribute('d', path);
  return p;
};

// Return true if path2 is contained (or intersect) path1
const pathContain = (path1, path2) => {
  const p2 = pathToSVG(path2);
  const length = p2.getTotalLength();
  for (let i = 0.5; i < 10; i += 1) {
    const p = p2.getPointAtLength(i/10 * length);
    if (Snap.path.isPointInside(path1, p.x, p.y)) {
      return true;
    }
  }
  return false;
};

const coordsToPoint = (coords) => {
  const parts = coords.split(/(?=[ -])/g);
  if (parts.length === 3) {
    return [parseFloat(parts[0] + parts[1]), parseFloat(parts[2])];
  } else if (parts.length === 2) {
    return parts.map(parseFloat);
  } else {
    throw 'Wrong number of parts', coords;
  }
};

const simplifyPosition = (position) => {
  // Keep the last M part
  const parts = position.split(/M/g);
  position = parts[parts.length - 1];
  if (/m/.test(position)) {
    // Now we have only one M, and then multiple m
    const mparts = position.split(/m/g);
    const point = coordsToPoint(mparts[0]);
    for (let i = 1; i < mparts.length; i += 1) {
      const p = coordsToPoint(mparts[i]);
      point[0] += p[0];
      point[1] += p[1];
    }
    position = point[0] + ' ' + point[1];
  }

  return 'M' + position;
};
const simplifyPath = (path) => {
  const [position, ...rest] = path.split(/(?=[a-ln-z])/i);
  return simplifyPosition(position) + rest.join('');
};

const splitPath = (d) => {
  d = d.replace(/v([-0-9.]+)/g, 'l0 $1');
  d = d.replace(/h([-0-9.]+)/g, 'l$1 0');

  const positionFromPath = (path) => {
    return path.split(/[a-ln-z]/i)[0];
  };

  const newParts = [];
  const parts = d.split(/(?=m)/ig);
  let currentPart;
  const currentParts = {
    negative: [],
  };
  let position = '';
  for (let part of parts) {
    const completePart = simplifyPath(position + part);

    if (!currentPart) {
      currentPart = part;
      currentParts.positive = currentPart;
    } else if (
      (pathContain(currentParts.positive, completePart) || pathContain(completePart, currentParts.positive)) &&
      (!currentParts.negative.find((p) => pathContain(p, completePart) || pathContain(completePart, p)))
    ) {
      currentParts.negative.push(completePart);
      currentPart += part;
    } else {
      newParts.push(currentPart);
      currentPart = completePart;
      currentParts.positive = currentPart;
      currentParts.negative = [];
    }

    position = simplifyPosition(position + positionFromPath(part));
  }
  newParts.push(currentPart);

  return newParts;
};

class FontAwesomeIconColored extends Component {
  constructor(props) {
    super(props);
    this.iconElement = React.createRef();
  }

  color(i) {
    if (this.props[`fill${i}`]) {
      return this.props[`fill${i}`];
    } else if (this.props.fill && this.props.fill.length > i) {
      return this.props.fill[i];
    } else {
      return 'currentColor';
    }
  }

  componentDidMount() {
    // If no key starts with fill, do nothing
    if (!Object.keys(this.props).find((key) => key.startsWith('fill'))) {
      return;
    }

    const node = ReactDOM.findDOMNode(this.iconElement.current);
    window.a = node.firstElementChild;
    const d = node.firstElementChild.getAttribute('d');
    const parts = splitPath(d);
    node.removeChild(node.firstElementChild);
    parts.forEach((part, i) => {
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', part);
      path.setAttribute('fill', this.color(i));
      node.appendChild(path);
    });
  }

  render() {
    return (
      <FontAwesomeIconClass ref={this.iconElement} {...this.props} />
    );
  }
}

export default FontAwesomeIconColored;
