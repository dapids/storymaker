import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const Skin = styled.div`
  padding-top: 8px;
`

const Content = ({ children }) => (
  <Skin>
    {children}
  </Skin>
)

Content.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Content
