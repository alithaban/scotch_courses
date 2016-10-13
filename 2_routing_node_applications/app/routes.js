/**
 * Created by root on 6/10/16.
 */

var express = require('express'),
    router = express.Router(),
    siteController = require('./controllers/site.controller')
    dashboardController = require('./controllers/dashboard.controller');

// Expprts the router
module.exports = router;

// Apply the routes to the router
// Site routes ==============================================
router.get('/', siteController.showHome);
router.get('/about', siteController.showAbout);
router.get('/contact', siteController.showContactForm);
router.post('/contact', siteController.processContactForm);
router.get('/:username/:post_slug', siteController.showProfile);

// Dashboard routes ==============================================
//router.get('/dasboard', dashboardController.showDasboard);

// Catch all
router.use(siteController.show404);
