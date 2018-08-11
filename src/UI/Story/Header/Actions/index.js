import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart as faHeartRegular,
  faTrashAlt as faTrash,
} from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import palette from 'constants/style/palette'
import {
  deleteStory as deleteStoryAction,
  markStoryAsFavourite as markStoryAsFavouriteAction,
} from 'model/actions/stories'
import Button from 'UI/Button'
import Icon from 'UI/Icon'

const Actions = ({ deleteStory, story, toggleFavouriteOnStory }) => {
  const faHeart = story.get('favourite')
    ? faHeartSolid
    : faHeartRegular

  return (
    <div>
      <Button onClick={toggleFavouriteOnStory}>
        <Icon color={story.get('favourite') ? palette.alert : undefined}>
          <FontAwesomeIcon icon={faHeart} />
        </Icon>
      </Button>
      <Button onClick={deleteStory}>
        <Icon>
          <FontAwesomeIcon icon={faTrash} />
        </Icon>
      </Button>
    </div>
  )
}

Actions.propTypes = {
  story: PropTypes.shape({}).isRequired,
  deleteStory: PropTypes.func.isRequired,
  toggleFavouriteOnStory: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, { story }) => ({
  deleteStory: () => dispatch(deleteStoryAction(story)),
  toggleFavouriteOnStory: () => dispatch(markStoryAsFavouriteAction({ story, favourite: !story.get('favourite') })),
})

export default connect(
  null,
  mapDispatchToProps,
)(Actions)
