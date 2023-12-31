const  express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
    res.json({message: 'Hi from server'});
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});