export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export function receiveItems(category, json) {
  return {
    type: RECEIVE_ITEMS,
    category,
    items: json,
    receivedAt: Date.now(),
  }
}