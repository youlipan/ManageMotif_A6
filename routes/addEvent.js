var data = require('../data.json');

exports.addEvent = function(req, res) {
        var newEvent = {"name": req.query.name,
		"comment": req.query.comment,
		"timeFrom": req.query.timeFrom,
		"timeTo": req.query.timeTo,
		"place": req.query.place,
		"importance": req.query.importance};
        data.events.push(newEvent);
	console.log(data);
}

