import React, { Fragment } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import styled from 'styled-components'
import palette from 'constants/style/palette'
import Card from 'UI/Card'
import Header from './Header'
import Content from './Content'

const Picture = styled.img`
  border: 1px solid ${palette.text};
  border-radius: 4px
  float: left;
  height: 100px;
  margin: 4px 8px 0 0;
  width: 100px;
`

const Text = styled.div`
  line-height: 140%;
`

const Story = ({ story }) => (
  <Card>
    <Header story={story} />

    <Content>
      <Fragment>
        <Picture alt="" src={story.get('picture')} />

        <Text>
          {story.get('text')}
        </Text>
      </Fragment>
    </Content>
  </Card>
)

Story.propTypes = {
  story: ImmutablePropTypes.map.isRequired,
}

export default Story
