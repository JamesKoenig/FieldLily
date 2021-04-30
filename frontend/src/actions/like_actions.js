import {
  checkHabitLike,
  checkResourceLike,
  postHabitLike,
  postResourceLike,
  deleteHabitLike,
  deleteResourceLike,
} from '../util/like_api_util';

export const RECEIVE_RESOURCE_LIKE_STATUSES =
  "RECEIVE_RESOURCE_LIKE_STATUS";
export const RECEIVE_HABIT_LIKE_STATUSES =
  "RECEIVE_HABIT_LIKE_STATUS";

export const receiveResourceLikeStatuses = likeStatus => ({
  type: RECEIVE_RESOURCE_LIKE_STATUSES,
  likeStatus,
})

export const receiveHabitLikeStatuses = likeStatus => ({
  type: RECEIVE_HABIT_LIKE_STATUSES,
  likeStatus,
})

export const fetchHabitLikeStatus = habitId => dispatch =>
  checkHabitLike(habitId)
    .then( ({ data: { habits }}) =>
        dispatch(receiveHabitLikeStatuses(habits))
      )

export const fetchResourceLikeStatus = resourceId => dispatch =>
  checkResourceLike(resourceId)
    .then( ({ data: { resources }}) =>
      dispatch(receiveResourceLikeStatuses(resources))
    )

export const likeHabit = habitId => dispatch =>
  postHabitLike(habitId)
    .then( ({ data: { habits } }) =>
      dispatch(receiveHabitLikeStatuses(habits))
    )

export const likeResource = resourceId => dispatch =>
  postResourceLike(resourceId)
    .then( ({ data: { resources } }) =>
      dispatch(receiveResourceLikeStatuses(resources))
    )

export const unLikeHabit = habitId => dispatch =>
  deleteHabitLike(habitId)
    .then( ({ data: { habits } }) =>
      dispatch(receiveHabitLikeStatuses(habits))
    )

export const unLikeResource = resourceId => dispatch =>
  deleteResourceLike(resourceId)
    .then( ({ data: { resources } }) =>
      dispatch(receiveResourceLikeStatuses(resources))
    )
