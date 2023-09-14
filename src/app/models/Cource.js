const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Cource = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, required: true },
        slug: { type: String, slug: ['name'], unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Cource', Cource);
