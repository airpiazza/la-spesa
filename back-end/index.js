import express from 'express';

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`This app is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`);
});