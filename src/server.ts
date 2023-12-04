import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 4200;

const server = app.listen(port, () => {
    console.log(`Api on ${port}`);
});

process.on('SIGINT', () => {
    server.close();
    console.log('App finish')
});