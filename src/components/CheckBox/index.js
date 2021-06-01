import React from 'react';
import Checkbox from './Checkbox';
import styled from 'styled-components';

const Display = styled.div`
   font-family: sans-serif;
   display: flex;
   flex-direction: row;
   @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Display1 = styled.div`
   display: flex;
   flex-direction: column;
`;
const Display2 = styled.div`
   display: flex;
   flex-direction: column;
`;
const Label = styled.label`
  padding: 11px 115px 15px 0px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  color: #666;
  @media (max-width: 767px) {
    padding: 11px 15px 15px 0px;
  }
`;
const Span = styled.span`
  margin-left: 8px;
  color: #666;
`;
class Checkbox1 extends React.Component {
  state = { checked: false }

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    return (
      <Display>
        <Display2>
        <Label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <Span>Vercel</Span>
        </Label>
        <Label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <Span>Next.js</Span>
        </Label>        
        <Label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <Span>Edge Network</Span>
        </Label>        
        <Label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <Span>Git Solutions</Span>
        </Label>
        </Display2>
        <Display1>
        <Label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <Span>Vercel</Span>
        </Label>
        <Label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <Span>Next.js</Span>
        </Label>        
        <Label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <Span>Edge Network</Span>
        </Label>        
        <Label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <Span>Git Solutions</Span>
        </Label>
        </Display1>
      </Display>
    )
  }
}

export default Checkbox1;
