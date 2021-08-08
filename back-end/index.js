import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/spesaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`This app is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`);
});