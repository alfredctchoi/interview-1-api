const superagent = require('superagent');
const INSTAGRAM_API = 'https://api.instagram.com/v1';
const INSTAGRAM_KEY = '8306911.ac0a2a0.ea2409324af64f28a17536fd534ff5c7';

module.exports.getRecent = (req, res) => {
  superagent(`${INSTAGRAM_API}/users/${req.params.userId}/media/recent/?access_token=${INSTAGRAM_KEY}`)
    .query({ access_token: INSTAGRAM_KEY })
    .end((err, response) => {
      res.json(response.body);
    });
};