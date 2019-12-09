const router = require('express').Router();
const authenticate = require('../middlewares/authenticate.js');
const {
  index,
  show
} = require('../controllers/postController.js');

router.get('/', authenticate, index);
router.get('/posts/:_id', authenticate, show);
 

module.exports = router;
