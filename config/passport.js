/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {

    /*
    local: {
        strategy: require('passport-local').Strategy
    },
    */

    'wechat-enterprise': {
        protocol: 'wechat-enterprise',
        strategy: require('passport-wechat-enterprise').Strategy,
        options: {
            corpId: 'wxab37d42f0324866f',
            corpSecret: 'rbzinXxmIZI1pmIOMmwEuHHQvBue7Q8BzVlxORVGvIw',
            state: 'state',
            scope: "snsapi_base",

            // extra callback functions defined in service/wechat.js
            getAccessToken: function(cb) {
                wechat-enterprise.getAccessToken(cb)
            },

            saveAccessToken: function(accessToken, cb) {
                wechat-enterprise.saveAccessToken(accessToken, cb);
            }
        }
    }

};