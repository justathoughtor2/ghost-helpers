module.exports = function() {
  hbs.registerHelper('blog-header-bg', function(image, options) {
    $('#blog-header').css('background-image', image);
    $('#blog-header').css('color', '#7f7e7e');
  });
  
  hbs.registerHelper('post-loop-bg', function(image, index, options) {
    $('.post-loop').eq(index).css('background-image', image);
    $('.post-loop').eq(index).css('color', '#7f7e7e');
  });
};
