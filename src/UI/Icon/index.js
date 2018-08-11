import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import palette from 'constants/style/palette'

const Skin = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
`

const Icon = ({ children, color, size }) => (
  <Skin color={color} size={size}>
    {children}
  </Skin>
)

Icon.defaultProps = {
  color: palette.secondary,
  size: 16,
}

Icon.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

export default Icon
