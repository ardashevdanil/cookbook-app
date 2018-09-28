var express = require('express');
var url = require('url');
var router = express.Router();

const photos = require('../public/photos');
const recipes = require('../public/recipes');
const videos = require('../public/videos');

/* GET items. */
router.get('/', function(req, res, next) {
  let query = url.parse(req.url, true).query;

  setTimeout(( () => {
    if (query.tag) {
      res.json( filterItemsByTag(query.tag) );
    } else if (query.search) {
      res.json( filterItemsByName(recipes, query.search) );
    } else {
      res.json(recipes)
    }
  }).bind(this), 1000)
});

module.exports = router;

// Filter functions

function filterItems(items, tag, name) {
  const filtredItems = filterItemsByName(
    filterItemsByTag(items, tag),
    name
  );

  return filtredItems
}

function filterItemsByName(items, name) {

  return items.filter( (item) => {
    if (
      item.name.toLowerCase().includes( name.toLowerCase() ) ||
      name === ''
    ) return true;
  });
}

function filterItemsByTag(tag) {

  switch(tag) {
    case 'photos':
      return photos

    case 'recipes':
      return recipes

    case 'videos':
      return videos

    default:
      throw new Error
  }

}