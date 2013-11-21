/**
 * Информация из хэша страницы. Полная строка хэша записывается
 * с ключом '_'.
 * @static
 * @param {String} [groupDelim="|"] Разделитель пар ключ-значение.
 * @param {String} [valueDelim="="] Разделитель ключа и значения.
 * @returns {Object} Хэш найденных пар ключ-значение. 
 */
f.util.parseLocationHash = function(groupDelim, valueDelim) {
	groupDelim = groupDelim || "|";
	valueDelim = valueDelim || "=";
	var string = location.hash.split("#")[1] || "";
	var info = {
		_: string
	};
	if(string.length) {
		var groups = string.split(groupDelim);
		for(var i=0, c=groups.length; i < c; i++) {
			var pair = groups[i].split(valueDelim);
			info[pair[0]] = pair[1] || "";
		}
	}
	return info;
};
