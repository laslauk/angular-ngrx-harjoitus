import express from 'express';
import cors from 'cors';
import bodyParser from'body-parser';


const app = express();


app.use(cors());
app.use(bodyParser.json());



app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));