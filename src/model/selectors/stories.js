import isAfter from 'date-fns/is_after'
import { createSelector } from 'reselect'

const sortByDescDate = (a, b) => (isAfter(a.get('date'), b.get('date'))
  ? -1
  : 1
)

const sortByFavourite = (a, b) => {
  if (a.get('favourite') === b.get('favourite')) {
    return 0
  }

  return a.get('favourite')
    ? -1
    : 1
}

export const storiesSelector = () => createSelector(
  state => state.get('stories'),
  stories => stories
    .toList()
    .sort(sortByDescDate)
    .sort(sortByFavourite),
)

export default undefined
