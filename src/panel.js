import React from 'react';
import ReactDOM from 'react-dom';
import Panel from 'muicss/lib/react/panel'; // Mui panel, team KSM

class Example extends React.Component {
  render() {
    return (
      <Panel>
        {/* Content goes here */}
      </Panel>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('example'));
