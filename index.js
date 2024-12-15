const express = require('express');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});
