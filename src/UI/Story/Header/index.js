import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import styled from 'styled-components'
import formatDate from 'date-fns/format'
import palette from 'constants/style/palette'
import Caption from 'UI/Typography/Caption'
import Actions from './Actions'

const Skin = styled.div`
  align-items: center;
  border-bottom: 1px solid ${palette.divider};
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`

const Header = ({ story }) => (
  <Skin>
    <Caption>
      {formatDate(story.get('date'), 'dddd Do of MMMM, YYYY, HH:mm')}
    </Caption>
    <Actions story={story} />
  </Skin>
)

Header.propTypes = {
  story: ImmutablePropTypes.map.isRequired,
}

export default Header
