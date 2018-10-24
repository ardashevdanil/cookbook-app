export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const receiveItems = (payload, json) => ({
  type: RECEIVE_ITEMS,
  payload,
  items: json,
  receivedAt: Date.now(),
});
