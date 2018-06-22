const express = require('express')
const app = express()
const Combinatorics = require("js-combinatorics");
const reducer = (accumulator, currentValue) => accumulator + currentValue;

app.get('/', function (req, res) {
	console.log(req.query);
	var max = 10;
	var cmb, total, items;
	var data = require('./subset.json');
	var parsed_data = [];
	var parsed_item = {};
	var entry = {};
	var results = [];
	data.forEach(function(i){
		parsed_item = {};
		parsed_item[i['ITEM']] = i['PRICE'];
		parsed_data.push(parsed_item);
	});

	cmb = Combinatorics.power(parsed_data);
	cmb.forEach(function(a){
		total = 0.0;
		items = [];
		a.forEach(function(b){
			total += Object.values(b).reduce(reducer);
			items.push(b);
	     	});
		if (total <= max && total != 0) {
			entry = {};
			entry['total'] = total.toFixed(2);
			entry['items'] = items;
			results.push(entry);
		}
	});

	var fs = require('fs');
	fs.writeFile("output.json", JSON.stringify(results), function(err) {
		if (err) {
			console.log(err);
		}
	});
	res.send(results);
})


app.listen(3001, () => console.log('Example app listening on port 3001'))
