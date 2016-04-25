(function () {

    var $tip = $('<div class="m-tip"></div>');
    var $body = $('body');
    $.fn.extend({
        tip: function (msg) {
            if (this.length === 0) return;
            this.focus();
            var offset = this.offset();
            offset.top += this.outerHeight() + 7;
            offset.left += this.width() / 2;
            var $tmpTip = $tip.clone().html(msg).css(offset);
            $body.prepend($tmpTip);
            setTimeout(function () {
                $tmpTip.remove();
            }, 3000);
        }
    });

})();
