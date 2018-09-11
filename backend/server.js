import express from 'express';
import cors from 'cors';
import bodyParser from'body-parser';


const app = express();


app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req,res) => {
 res.status(200).json('pong!');
});

app.post('/register', (req, res, next)  => {
  if (req.body.email === 'test@test.com') {
    res.status(201).json({
      status: 'success',
      token: '1234567'
    });
  } else {
    res.status(400).json({
      status: 'error'
    });
  }
});


app.post('/login', (req, res, next) => {
  if (req.body.email === 'test@test.com') {
    res.status(200).json({
      status: 'success',
      token: '1234567'
    });
  } else {
    res.status(400).json({
      status: 'error'
    });
  }
});


app.get('/status', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }

//simulate token decoding

const header = req.headers.authorization.split(' ');
const token = header[1];

if (token === '1234567') {
  res.status(200).json({
    status: 'success',
  });
} else {
  res.status(401).json({
    status: 'error'
  });
}
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    error: err
  });
});



app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));
