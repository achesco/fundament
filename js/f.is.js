/**
 * Операционка iOS.
 * @type Boolean
 */
f.is.iOS = (navigator.userAgent.match(/iP(ad|hone|od)/) != null);
$(function() {
	/**
	 * Браузер IE версии 8 или ниже.
	 * @type Boolean
	 */
	f.is.ieLte8 = $(document.body).hasClass("lte8");
});
