import React, {PropTypes} from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <footer>
          <small>
              made by <a href="https://twitter.com/kenT">Kent & team</a>, source code available on <a href="#">github</a>
          </small>
      </footer>
      </div>
    );
  }
}

Footer.propTypes = {
};
