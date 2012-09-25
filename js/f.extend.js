/**
 * Наследование.
 * @static
 */
f.extend = function(subClass, superClass) {
	var F = function() {};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
	subClass.prototype.superclass = superClass.prototype;
};