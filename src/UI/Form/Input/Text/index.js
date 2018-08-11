import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import palette from 'constants/style/palette'

const Skin = styled.input`
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

const InputText = ({ name }) => (
  <Skin name={name} type="text" />
)

InputText.propTypes = {
  name: PropTypes.string.isRequired,
}

export default InputText
