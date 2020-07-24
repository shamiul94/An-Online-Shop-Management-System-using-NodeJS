exports.get404 = (req, res, next) => {
  res.status(404).render('404', { path: req.originalUrl, pageTitle: 'Page Not Found' });
};
