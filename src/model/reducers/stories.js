import { fromJS, Map } from 'immutable'
import { STORY_ADDED, STORY_DELETED, STORY_MARKED_AS_FAVOURITE } from 'model/actions/stories'

export const stories = (state = Map(), { payload, type }) => {
  switch (type) {
    case STORY_ADDED: {
      const { story } = payload

      return state.set(story.id, fromJS(story))
    }

    case STORY_DELETED: {
      const { id } = payload

      return state
        .delete(id)
    }

    case STORY_MARKED_AS_FAVOURITE: {
      const { favourite, id } = payload

      return state
        .setIn([id, 'favourite'], favourite)
    }

    default:
      return state
  }
}

export default undefined
