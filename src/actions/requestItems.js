export const REQUEST_ITEMS = 'REQUEST_ITEMS';

export function requestItems(category) {
  return {
    type: REQUEST_ITEMS,
    category
  }
}