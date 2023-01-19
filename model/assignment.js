let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
// le premier paramètre est la collection. On a vu avec un
// élève que ça mettait automatiquement en minuscules et que
// ça ajoutait un 's' à la fin s'il n'y en avait pas... !
module.exports = mongoose.model('assignments', AssignmentSchema);
