const axios = require('axios');

module.exports = function(req, res, next) {
  let token = req.cookies.token ? req.cookies.token : null;
  if (!token) return res.redirect('/login');

  axios('http://127.0.0.1:5000/api/v1/auth/whoAmI', {
    method: 'GET',
    headers: {
      'Authorization': req.cookies.token,
      'Accept':'application/json'
    }
  })
    .then(response => {
      let body = response.data;
      req.headers.authorization = body.data;
      next() 
    })
    .catch(err => {
      res.redirect('/login')
    })
}
