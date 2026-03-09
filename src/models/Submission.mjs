import mongoose from 'mongoose';


const submissionSchema = new mongoose.Schema({
	code: String,
	username: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	jobId: String,
	language: String,
	output: String,
	status: {
		type: String,
		enum: ['PENDING', 'RUNNING', 'COMPLETED', 'ERROR'],
		default: 'PENDING',
	},
});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;
