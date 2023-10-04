const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-updater');

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

// Add plugin
mongoose.plugin(slug);
Cource.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Cource', Cource);
