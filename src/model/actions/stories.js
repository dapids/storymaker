import uuid from 'uuid/v4'
import { pickRandom } from 'utils/lists'
import { getRandomFace, interpolateStory } from 'utils/stories'
import stories from 'stories.json'

export const STORY_ADDED = 'STORY_ADDED'
export const STORY_DELETED = 'STORY_DELETED'
export const STORY_MARKED_AS_FAVOURITE = 'STORY_MARKED_AS_FAVOURITE'

export const addStory = ({ gender, name }) => {
  const story = pickRandom(stories)

  return ({
    payload: {
      story: {
        ...story,
        date: new Date(),
        favourite: false,
        id: uuid(),
        picture: getRandomFace(gender),
        text: interpolateStory({ gender, name, text: story.text }),
      },
    },
    type: STORY_ADDED,
  })
}

export const deleteStory = story => ({
  payload: {
    id: story.get('id'),
  },
  type: STORY_DELETED,
})

export const markStoryAsFavourite = ({ favourite, story }) => ({
  payload: {
    favourite,
    id: story.get('id'),
  },
  type: STORY_MARKED_AS_FAVOURITE,
})

export default undefined
