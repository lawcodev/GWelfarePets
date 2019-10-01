/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Popovers extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          {this.props.text}
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>{this.props.title}</PopoverHeader>
          <PopoverBody>{this.props.description}</PopoverBody>
        </Popover>
      </div>
    );
  }
}