const {Url} = require('@keystonejs/fields')

module.exports = {
    fields: {
        link: {type: Url, isRequired: true}
    }
}