const mongoose = require("mongoose");

const notesSchema = {
    _id: {type: String},
    title: String,
    // repolink: String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;