import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const InputText = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    max-width: 300px;
    border-bottom: 6px solid #f4dc59;
`;

const inputStyle = {
  'border-top': 'none',
  'border-left': 'none',
  'border-right': 'none',
  'border-bottom': '6px solid #f4dc59'
}

module.exports = {
    Title,
    inputStyle,
    InputText
}