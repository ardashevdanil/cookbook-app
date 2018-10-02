import express from 'express';
import url from 'url';

import photos from '../public/photos';
import recipes from '../public/recipes';
import videos from '../public/videos';

const router = express.Router();

/* GET items. */
router.get('/', (req, res, next) => {
  const { query } = url.parse(req.url, true);

  // Delay for simulation network request
  setTimeout((() => {
    if (query.tag) {
      res.json(filterItemsByTag(query.tag));
    } else if (query.search) {
      res.json(filterItemsByName(recipes, query.search));
    } else {
      res.json(recipes);
    }
  }), 1000);
});

export default router;

// Filter functions
function filterItemsByName(items, name) {

  return items.filter( (item) => {
    if (
      item.name.toLowerCase().includes( name.toLowerCase() ) ||
      name === ''
    ) return true;
  });
}

function filterItemsByTag(tag) {
  switch (tag) {
    case 'photos':
      return photos;

    case 'recipes':
      return recipes;

    case 'videos':
      return videos;

    default:
      throw new Error();
  }
};
