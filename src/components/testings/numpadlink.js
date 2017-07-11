import React, {PropTypes} from 'react';

export default class Numpadlink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div><a href="/numberpad">Numpad link</a></div>);
  }
}

Numpadlink.propTypes = {
};
