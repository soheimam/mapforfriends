import styled from 'styled-components';


const Button = styled.button`
  background: ${props => props.login ? "white" : "#1C1C1C"};
  color: ${props => props.login ? "#1C1C1C" : "white"};
  font-size: 2.5em;
  @import url('https://fonts.googleapis.com/css?family=Raleway:300&display=swap');
  font-family: 'Raleway', sans-serif;
  margin: 1em;
  padding: 0.10em 1.25em;
  border-radius: 25px;
  
`;

module.exports = {
    Button
}
