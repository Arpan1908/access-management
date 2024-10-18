const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
    roleName: { type: String, required: true },
    permissions: [{ type: String }] // e.g., ['edit', 'view']
});
module.exports = mongoose.model('Role', roleSchema);
