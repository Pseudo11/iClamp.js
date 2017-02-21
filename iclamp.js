
;(function($){
  if($.fn.clamp) return;
  $.fn.clamp = function(options){
    if(this.length === 0){
      $.fn.clamp.debug('No element found for "' + this.selector + '".');
      return;
    }
    if(this.length > 1){
      return this.each(function(){
        $(this).clamp(options);
      })
    };

    var $clamp = this;

  };
})(window.jQuery);

