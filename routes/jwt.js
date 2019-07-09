const expressJwt = require('express-jwt');
const config = require('../config/config.json');
var UserHandler = require('../lib/userHandler');


module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJwt({
    secret,
    // credentialsRequired: false,
    isRevoked
  })
  .unless({
    path: [
      // public routes that don't require authentication
      '/user/authenticate',
      '/user/register',
      '/user/createGuest',
      '/user/sendOtp',
      '/user/verifyOtp',
      '/api/pl/clearUserQuestions'
    ]
  })
  ;
}

async function isRevoked(req, payload, done) {
  // const user = await UserHandler.getById(payload.sub,callback);
  // console.log(",,,,,,,,,,,,,isRevoke",payload);
  UserHandler.getById(payload.sub.user_id, function(err, result) {
      if (err) {
        console.log("isRevoked",err);
        done(err);
      }
      if (!result) {
        done(null, true);
      }

        done();

      });

  };
