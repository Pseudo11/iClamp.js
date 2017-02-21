
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
    var clampLine = options.clamp || 3;
    var clampLineHeight = $clamp.css('line-height').replace(/px/ig, '');
    var supportsNativeClamp = typeof($clamp.style.webkitLineClamp) != 'undefined';
    $clamp.css({
      'max-height': clampLine * clampLineHeight + 'px'
    })
    if(supportsNativeClamp) {
      $clamp.css({
        'display': '-webkit-box',
        'text-overflow': 'ellipsis',
        'overflow': 'hidden',
        '-webkit-line-clamp': clampLine.toString(),
        '-webkit-box-orient': 'vertical'
      });
      return;
    };
    $clamp.each(function(){
      var $this = $(this);
      var $content = $(this).find('span');
      var originText = $content.text().trim();
      var regularText = '';

      if($content.outerHeight() > $this.outerHeight()){
        getRegularText(originText, originText);
      }

      function getRegularText(_regularText, _truncationText){
        var _startPos = 0; //开始位置
        var _endPos = _regularText.length; //最后位置
        var _middlePos = Math.floor((_startPos + _endPos) / 2);
        _ellipseText = _regularText.slice(_startPos, _middlePos);
        _truncationText = _regularText.slice(_middlePos, _endPos);
        $content.text(regularText + _ellipseText + '...');

        if(_middlePos === 0){ //开始位置与中间位置重叠，即为临界值
          return;
        }else if($content.outerHeight() > $this.outerHeight()){
          getRegularText(_ellipseText,  _truncationText);
        }else{
          regularText = regularText + _ellipseText;
          getRegularText(_truncationText, _truncationText);
        }
      }
    });
  };
})(window.jQuery);

