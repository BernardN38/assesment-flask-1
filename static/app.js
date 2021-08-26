currencies = [
	'IDR',
	'BGN',
	'ILS',
	'GBP',
	'DKK',
	'CAD',
	'JPY',
	'HUF',
	'RON',
	'MYR',
	'SEK',
	'SGD',
	'HKD',
	'AUD',
	'CHF',
	'KRW',
	'CNY',
	'TRY',
	'HRK',
	'NZD',
	'THB',
	'EUR',
	'NOK',
	'RUB',
	'INR',
	'MXN',
	'CZK',
	'BRL',
	'PLN',
	'PHP',
	'ZAR',
	'USD',
	'EUR'
];

console.log('connected');
suggestions = {
	'#currency-1': new Set(),
	'#currency-2': new Set()
};

$('#currency-1').keyup(handleClick('#currency-1', 1));
$('#currency-2').keyup(handleClick('#currency-2', 2));

function handleClick(currency, num) {
	$(currency).keyup(function() {
		let searchWord = $(currency).val().toUpperCase();
		displaySuggestions(searchWord, num, currency);
		clearIfEmpty(currency);
	});
}

function displaySuggestions(searchWord, num, currency) {
	for (let word of currencies) {
		if (word.charAt(0) == searchWord.charAt(0)) {
			suggestions[currency].add(word);
		}
	}
	$(`#suggestions-${num}`).empty();
	for (let word of suggestions[currency]) {
		$(`#suggestions-${num}`).append(`<div class='button'>${word}</div>`);
	}
}

function clearIfEmpty(currency) {
	let searchWord = $(currency).val().toUpperCase();
	if (searchWord == '') {
		$(currency).empty();
		return (suggestedTwo = false);
	}
	suggestions[currency] = new Set();
}

$('#suggestion-cont-2').click(function(e) {
	$('#currency-2').val(e.target.innerText);
	$('#suggestions-2').empty();
});

$('#suggestion-cont').click(function(e) {
	$('#currency-1').val(e.target.innerText);
	$('#suggestions-1').empty();
});
