import { genders } from 'constants/stories'

export const getRandomFace = (gender) => {
  const genderPrefix = gender === genders.MALE
    ? 'm'
    : 'f'

  const pictureNumber = Math.ceil(Math.random() * 13)

  // eslint-disable-next-line import/no-dynamic-require
  return require(`assets/faces/${genderPrefix}${pictureNumber}.jpg`)
}

const getAdjective = gender => (gender === genders.MALE
  ? 'his'
  : 'her'
)

const getPronoun = gender => (gender === genders.MALE
  ? 'him'
  : 'her'
)

const getSubject = gender => (gender === genders.MALE
  ? 'he'
  : 'she'
)

export const interpolateStory = ({ gender, name, text }) => {
  const adjective = getAdjective(gender)
  const pronoun = getPronoun(gender)
  const subject = getSubject(gender)

  return text
    .replace(/{name}/g, name)
    .replace(/{adjective}/g, adjective)
    .replace(/{pronoun}/g, pronoun)
    .replace(/{subject}/g, subject)
}

export default undefined
