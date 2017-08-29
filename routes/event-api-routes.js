// var yelp = require("../models");

const yelp = require('yelp-fusion');

module.exports = function(app) {
// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = 'xfb5VIoEJJ8D3t8X8Pqbrw';
const clientSecret = 'RXSQ6kJQ7a0hNX01jOTArfmxlyL6DMFCX5RUnZsZi2DT2sXamNq0joF4vlva1w51';
const searchRequest = {
  //term:'bar',
  categories: 'nightlife',
  location: '28.545021 -81.372856',
  sort_by: 'review_count',
  limit: 9
};


yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
    yelpData = firstResult;
  });
}).catch(e => {
  console.log(e);
});
app.get('/api', function(req, res, next) {
  res.json({ yelpData: yelpData });
});
app.get('/', function(req, res, next) {
  res.sendFile('public/home.html', {root: __dirname })
});
app.get('/home', function (req, res) {
  // .. do database stuff
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);
    client.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
      yelpData = firstResult;
      res.send(yelpData.name);
    });
  // }).catch(e => {
  //   console.log(e);
  // });
});
})
};