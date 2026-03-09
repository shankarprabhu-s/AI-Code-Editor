// Import the mongoose module
import mongoose from 'mongoose';

console.log('process.env.MONGODB_URI', process.env.MONGODB_URI);

// Create Connection
mongoose
	.connect(process.env.MONGODB_URI, {
	})
	.then((result) => {
		console.log('connected to Mongodb');
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
