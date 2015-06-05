if(window.define && define.amd) {
	define(["jquery"], function(jQuery) {
		return (function _($) {

			_.init = function() {
				$('body').append(navigator.userAgent);
			};

			return _

		})(jQuery);
	});
}