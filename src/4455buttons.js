import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';  //buttons for items - link fr Mui -- team KSM

class Example extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Button>button</Button>
          <Button color="primary">Food Item</Button>
          <Button color="primary">Food Item</Button>
          <Button color="primary">Food Item</Button>
        </div>
        <div>
          <Button disabled={true}>button</Button>
          <Button color="accent" disabled={true}>Drinks</Button>
          <Button color="accent" disabled={true}>Drinks</Button>
          <Button color="accent" disabled={true}>Drinks</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('example'));
