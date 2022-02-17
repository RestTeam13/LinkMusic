const {Text, Password, Checkbox} = require('@keystonejs/fields')

module.exports = {
    fields: {
        name: {type: Text},
        email: {type: Text, isRequired: true, isUnique: true},
        password: {type: Password, isRequired: true},
        isAdmin: {type: Checkbox},
    }
}