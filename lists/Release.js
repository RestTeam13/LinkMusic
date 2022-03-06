const {Text, Url} = require('@keystonejs/fields')

module.exports = {
    fields: {
        name: {type: Text},
        description: {type: Text, isMultiline: true},
        link: {type: Url, isRequired: true}
    }
}