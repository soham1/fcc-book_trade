'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var Book = require("../models/books.js");
var Offer = require("../models/offers.js");
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function(app, passport) {

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		else {
			res.redirect('/');
		}
	}

	var clickHandler = new ClickHandler();

	app.route('/')
		.get(function(req, res) {
			res.render('index', {
				user: req.user
			});
		});

	app.route('/logout')
		.get(function(req, res) {
			req.logout();
			res.redirect('/');
		});

	app.route('/dashboard')
		.get(isLoggedIn, function(req, res) {
			res.render('dashboard', {
				user: req.user
			});
		});

	app.route('/myBooks')
		.get(isLoggedIn, function(req, res) {
			Book.find({
				userId: req.user._id
			}, function(err, books) {
				if (err) {
					res.render('err');
				}
				else {
					res.render('myBooks', {
						user: req.user,
						books: books
					});
				}
			})
		});

	app.route('/addBook')
		.post(isLoggedIn, function(req, res) {
			console.log("Inside addBook route");
			console.log("Params", req.body);
			var book = new Book();
			book.userId = req.user._id;
			book.bookName = req.body.bookName;
			book.posterUrl = req.body.posterUrl;
			book.save(function(err) {
				if (err) {
					res.render('error');
				}
				else {
					res.redirect('/myBooks');
				}
			});
		});

	app.route('/allBooks')
		.get(isLoggedIn, function(req, res) {
			res.render('allBooks', {
				user: req.user
			});
		});

	app.route('/settings')
		.get(isLoggedIn, function(req, res) {
			res.render('settings', {
				user: req.user
			});
		});

	app.route('/api/:id')
		.get(isLoggedIn, function(req, res) {
			res.json(req.user.github);
		});

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/myBooks',
			failureRedirect: '/'
		}));

	app.route('/api/:id/clicks')
		.get(isLoggedIn, clickHandler.getClicks)
		.post(isLoggedIn, clickHandler.addClick)
		.delete(isLoggedIn, clickHandler.resetClicks);
};
