import styled from 'styled-components'
import palette from 'constants/style/palette'

const Select = styled.select`
  background-color: ${palette.white};
  border: 1px solid ${palette.divider};
  border-radius: 4px;
  color: ${palette.text};
  display: inline-block;
  font-family: Lato, sans-serif;
  font-size: 16px;
  height: 40px;
  padding: 8px;
  width: 100%;

  &:focus {
    box-shadow: ${palette.divider};
    outline: 0px;
  }
`

export default Select
