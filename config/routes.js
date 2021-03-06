/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {
	/***************************************************************************
	 *                                                                          *
	 * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
	 * etc. depending on your default view engine) your home page.              *
	 *                                                                          *
	 * (Alternatively, remove this and add an `index.html` file in your         *
	 * `assets` directory)                                                      *
	 *                                                                          *
	 ***************************************************************************/

	"/index.html": {
		view: "homepage"
	},

	"get /": "HomeController.index",
	"get /debug": "HomeController.debug",
	"get /api/location/ip": "GeoIPController.getIp",
	"get /api/location/address": "GeoIPController.getAddress",
	"get /api/user/acl": "AuthController.testAcl",
	'get /api/qrcode/:id': 'QrcodeController.createQrcode',

	// 3rd passport
	// "get /auth/:provider": "AuthController.provider",
	// "get /auth/:provider/callback": "AuthController.callback",

	// SSO
	'get /sso/login': 'SSOController.ssoRedirect',
	'post /sso/saml2/:id/acs': 'SSOController.ssoCallback', // POST/GET
	'get /sso/logout': 'SSOController.LogoutRedirect',
	'get /sso/saml2/sp/metadata': 'SSOController.generateSPMetadata',
	// 'get /logout/callback': 'SSOController.LogoutCallback', // 跳过该环节也可实现退出

	// Oauth2 Server
	'get /openapi/oauth2/authorize': 'OauthController.authorize',
	'post /openapi/oauth2/token': 'OauthController.createToken',
	'/openapi/*': 'OauthController.task',


	// Proxy HTTP
	'/proxy/test': 'ProxyController.test',
	'*': 'ProxyController.proxy',


	/***************************************************************************
	 *                                                                          *
	 * Custom routes here...                                                    *
	 *                                                                          *
	 * If a request to a URL doesn't match any of the custom routes above, it   *
	 * is matched against Sails route blueprints. See `config/blueprints.js`    *
	 * for configuration options and examples.                                  *
	 *                                                                          *
	 ***************************************************************************/
};
