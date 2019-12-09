const fetch = require("axios");

module.exports = {
  index: function(req, res) {
    fetch('http://127.0.0.1:5000/api/v1/posts', {
      method: 'GET',
      headers: {
        'Accept':'application/json'
      }
    })
      .then(response => {
        res.render('pages/index', {
          user: req.headers.authorization,
          posts: response.data.data
        })
      })
  },
  show: function(req, res) {
    fetch(`http://127.0.0.1:5000/api/v1/posts/${req.params._id}`, {
      method: 'GET',
      headers: {
        'Accept':'application/json'
      }
    })
      .then(response => {
        res.render('pages/index', {
          user: req.headers.authorization,
          posts: [response.data.data]
        })
      }) 
  }
}
