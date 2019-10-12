module.exports = function zeros(expression) {

	var multipliers = { '2': 0, '5': 0 };

	expression.split('*').forEach(fact => {

		var isDouble = fact.match(/!/g).length == 2 ? true : false;
		fact = fact.substring(0, fact.indexOf('!'))
		var factorialParity = fact % 2 == 0 ? true : false;

		Object.keys(multipliers).forEach(m => {
			if (isDouble && !factorialParity && m % 2 == 0) return;
			var limit = 1;
			do {
				limit *= m;
				var count = Math.floor(fact / limit);
				if (isDouble && m % 2 != 0) {
					if (factorialParity) count = Math.floor(count / 2);
					else count = Math.ceil(count / 2);
				}
				multipliers[m] += count;
			} while (limit <= fact)
		})
	})
	return Math.min(multipliers['2'], multipliers['5'])
}
