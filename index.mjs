import './src/config/env.mjs'
import express from 'express';
import helmet from 'helmet';
import './src/config/db.mjs';



const app = express();
app.use(express.json());
app.use(helmet());

app.listen(process.env.PORT, () => {
	console.log('Listeneing at port ', process.env.PORT);
});
