import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({}));

app.get('/ali', async (req, res) => {
    console.log('got a req!!!');
    res.status(200).json({ Abbas: 12 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
