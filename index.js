var App = require('ghost-app'), GhostHelpers;

GhostHelpers = App.extend({

  install: function() {},

  uninstall: function() {},

  activate: function() {
    this.ghost.helpers.register('blog-header-bg', this.handleBlogHeaderBg);
    this.ghost.helpers.register('post-loop-bg', this.handlePostLoopBg);
  },

  deactivate: function() {},
  
  handleBlogHeaderBg: function(image, options) {
    $('.page-header').first().css('background-image', image);
    $('.page-header-inner').first().css('color', '#433a48');
    $('.page-header-inner').first().css('background-color', '#645f66');
    $('.page-header-inner').first().css('opacity', '0.5');
    $('.page-header-inner').first().css('margin-left', '8%');
    $('.page-header-inner').first().css('margin-right', '8%');
    $('.page-header-inner').first().children().css('opacity', '1.0');
  },
  
  handlePostLoopBg: function(image, index, options) {
    $('.post-loop').eq(index).css('background-image', image);
    $('.post-loop-inner').eq(index).css('color', '#433a48');
    $('.post-loop-inner').eq(index).css('background-color', '#645f66');
    $('.post-loop-inner').eq(index).css('opacity', '0.5');
    $('.post-loop-inner').eq(index).css('margin-left', '8%');
    $('.post-loop-inner').eq(index).css('margin-right', '8%');
    $('.post-loop-inner').eq(index).children().css('opacity', '1.0');
  }
});

module.exports = GhostHelpers;
