const Auth0Strategy = require('passport-auth0');
const passport = require("passport")


const strategy = new Auth0Strategy({
    domain: 'dev-u06815mj.us.auth0.com',
    clientID: 'HJLslQo5toIoVTeQ62ilYj4TjeMkxvOq',
    clientSecret: 'CTzUVTNjExSMMwaO7dma2_5b3eqqDkWeFHP-KNSSm-MlnFUkSQMMXQfLZQMu67Wc',
    callbackURL: 'http://localhost:3000/callback'
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