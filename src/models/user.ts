const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String,  required: true,  unique: true},
    password: {type: String, required: true},
    picture: {type: String, default: 'defaultProfilePicture'},
    theme: {type: Number, default: 0}
});

const userModel = mongoose.model('user', userSchema);

export default userModel;