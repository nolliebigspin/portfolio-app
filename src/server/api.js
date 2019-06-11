/* eslint-disable no-console */

var express = require('express')
var router = express.Router()
var nedb = require('nedb-promises');

var ds = nedb.create({
  filename: './data/data.json',
  autoload: true
});

// Middleware: log "METHOD PATH : TIME" for each request
router.use(function timeLog(req, res, next) {
  console.log(`${req.method} ${req.path} : `, Date.now())
  next()
})

// GET : all posts, but sorted descending on their date
router.get('/sorted', function (req, res) {
  res.redirect('posts?sort=date+dsc');
});

// GET : all posts
router.get('/posts', (req, res) => {
  let doSort = req.query.sort === 'date dsc';

  ds.find()
    .then(posts => {
      console.log('> posts were fetched!');
      if (doSort) {
        // sort stuff
        console.log("  '- sorted!")
        res.send(posts.sort((post_a, post_b) => {
          return Date.parse(post_b.date) - Date.parse(post_a.date);
        }));
      } else {
        // without sort
        res.send(posts);
      }
    })
    .catch(error => {
      console.log('> error getting posts!');
      res.send({
        'error': true,
        'message': error
      })
    })
})

// GET one specific post
router.get('/posts/:post_id', (req, res) => {
  let post_id = req.params.post_id;

  ds.findOne({ _id: post_id })
    .then(post => {
      console.log(`> fetched post ${post_id}!`);
      res.send(post);
    })
    .catch(error => {
      console.log(`> cannot fetch post ${post_id}!`);
      res.send({
        'error': true,
        'message': error
      });
    });
})

// PUT change one specific post
router.put('/posts/:post_id', (req, res) => {
  let post_id = req.params.post_id;

  ds.update(
    {
      _id: post_id
    },
    {
      $set: {
        name: req.body.name,
        comments: req.body.comments
      }
    }
  )
    .then(value => {
      console.log(`> changed post ${post_id}!`);
      res.send({
        'success': true,
        'message': value
      })
    })
    .catch(error => {
      console.log(`> cannot change post ${post_id}!`);
      res.send({
        'error': true,
        'message': error
      })
    });
})

// DELETE one specific post
router.delete('/posts/:post_id', (req, res) => {
  let post_id = req.params.post_id;

  ds.remove({ _id: post_id })
    .then(value => {
      console.log(`> deleted post ${post_id}!`);
      res.send({
        'success': true,
        "message": value
      })
    })
    .catch(error => {
      console.log(`> error deleting post ${post_id}!`);
      res.send({
        'error': true,
        'message': error
      })
    })
})

// POST add one or more posts in an array
router.post('/posts', (req, res) => {
  let posts = req.body;
  let has_error = false;

  posts.forEach(post => {
    ds.insert(post)
      .catch(error => {
        has_error = true;
        res.send({
          'error': true,
          'message': error
        })
      })
  });

  if (!has_error) {
    console.log('> new posts were added!')
    res.send({
      'success': true
    })
  } else {
    console.log('> error saving posts!');
    res.send({
      'error': true
    })
  }
})

// Export the router module
module.exports = router
