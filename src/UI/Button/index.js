import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border: 0;
  font-family: inherit;
  margin: 0;
  outline: none;
  padding: 4px;
  transition: opacity .2s linear;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`

export default Button
