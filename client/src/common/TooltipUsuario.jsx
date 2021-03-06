import React from 'react';
import { Tooltip } from 'reactstrap';

export default class Tooltips extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
      return (
      <div>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipUsuario" toggle={this.toggle}>
          {this.props.value}
        </Tooltip>
      </div>
    );
  }
}
