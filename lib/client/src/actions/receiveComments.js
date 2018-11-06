export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = (payload, json) => ({
  type: RECEIVE_COMMENTS,
  payload,
  comments: json,
  receivedAt: Date.now(),
});
