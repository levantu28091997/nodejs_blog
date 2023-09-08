const mongoose = require('mongoose');

function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = mongoose.connection;

        db.on('error', (error) => {
            console.error('Error connecting to MongoDB:', error);
        });

        db.once('open', () => {
            console.log('Connected to MongoDB!');
        });
    } catch (error) {
        console.log('Error!', error);
    }
}

module.exports = { connect };
