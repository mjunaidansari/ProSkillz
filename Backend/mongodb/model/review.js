const mongoose = require('mongoose')

const schema = mongoose.Schema({

	reviewer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	service: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Service',
		required: true
	},
	rating: {
		type: Number,
		required: true,
		min: 1,
		max: 5
	},
	comment: {
		type: String,
	},
	timestamp: {
		type: Date,
		default: Date.now
	},
	images:[ 
		{
			data: Buffer,
			contentType: String
		}
	]

})

module.exports = mongoose.model('Review', schema)