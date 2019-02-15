import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

const port = process.env.PORT || 3000;

// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// user morgan
app.use(morgan('short'));

// catch bad url
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Check the url',
  });
});

// app listen on port 3000
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

// export app so test can use it
export default app;
