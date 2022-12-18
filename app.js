import express from 'express';

import translateRouter from './router/translateRouter.js';


const app = express();

app.use(express.json());

app.use('/api/translate', translateRouter);


app.listen(3000, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${3000}`);
}
);
