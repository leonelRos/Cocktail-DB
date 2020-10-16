const Auth0Strategy = require('passport-auth0');
const passport = require("passport")


const strategy = new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, extraParam, profile, done){
      return done(null, profile)
  });

passport.use(strategy);
passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})