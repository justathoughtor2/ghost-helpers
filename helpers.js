var helpers = function() {
  hbs.registerHelper('blog-header-bg', function(image, options) {
    $('#blog-header').css('background-image', image);
  });
};

module.exports(helpers);
