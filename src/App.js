import React from 'react'
import { PropTypes } from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect, Provider } from 'react-redux'
import styled from 'styled-components'
import palette from 'constants/style/palette'
import { storiesSelector } from 'model/selectors/stories'
import NoStories from 'UI/EmptyState/Stories'
import StoryConfigurator from 'UI/StoryConfigurator'
import Story from 'UI/Story'

const Skin = styled.div`
  background: ${palette.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const List = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
`

const App = ({ store, stories }) => (
  <Provider store={store}>
    <Skin>
      <StoryConfigurator />

      { stories.size ? (
        <List>
          { stories.map(story => (
            <Story
              key={story.get('id')}
              story={story}
            />
          )) }
        </List>
      ) : (
        <NoStories />
      )}
    </Skin>
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  stories: ImmutablePropTypes.list.isRequired,
}

const selectStories = storiesSelector()

const mapStateToProps = state => ({
  stories: selectStories(state),
})

export default connect(mapStateToProps)(App)
