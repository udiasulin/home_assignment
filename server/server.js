const express = require('express');
const imageRoutes = require('./routes/imagesRoute');
const app = express()
const port = 5000


app.use('', imageRoutes);

// error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error)
})

// error handling
app.use((req, res) => {
    error.status(err.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))