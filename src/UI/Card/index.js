import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const Skin = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 16px;
  padding: 8px;
`

const Card = ({ children }) => (
  <Skin>
    {children}
  </Skin>
)

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
}

export default Card
