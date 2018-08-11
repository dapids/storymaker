import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import palette from 'constants/style/palette'
import Card from 'UI/Card'
import Icon from 'UI/Icon'
import Title from 'UI/Typography/Title'

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`

const IconWrapper = styled.div`
  margin-bottom: 16px;
`

const NoStories = () => (
  <Card>
    <Content>
      <IconWrapper>
        <Icon color={palette.divider} size={64}>
          <FontAwesomeIcon icon={faBook} />
        </Icon>
      </IconWrapper>

      <Title>
        Whops... You have no stories.
      </Title>

      <Title>
        Why don&#39;t you make one?
      </Title>
    </Content>
  </Card>
)

export default NoStories
