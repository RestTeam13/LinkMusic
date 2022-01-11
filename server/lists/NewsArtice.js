const {Text, Url, File, CalendarDay} = require('@keystonejs/fields')

module.exports = {
    fields: {
        title: {type: Text},
        link: {type: Url},
        date: {type: CalendarDay}
    }
}