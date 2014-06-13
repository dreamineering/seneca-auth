
var passport_bearer        = require('passport-http-bearer');
var BearerStrategy         = passport_bearer.Strategy;


module.exports = function (conf, passport, done) {
  var seneca = this

  passport.use(new BearerStrategy(
    function(token, done) {
      seneca.act({role: 'user', cmd: 'auth', token: token },
                function( err, out ){
                  done( !out.ok?out:null, out )
                })
    }
  ))

  done()
}
