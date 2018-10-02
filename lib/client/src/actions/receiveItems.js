export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const receiveItems = (category, json) => ({
  type: RECEIVE_ITEMS,
  category,
  items: json,
  receivedAt: Date.now(),
});
