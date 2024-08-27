import express from 'express'
import morgan from 'morgan';
import authRouthes from './routes/auth.routes.js'


const app = express();

app.use(morgan("dev"));
app.use(express.json());

app. use( '/api', authRouthes)


export default app;
