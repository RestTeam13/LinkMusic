const {Text, Url, File, CalendarDay} = require('@keystonejs/fields')
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const newsImagesAdapter = new LocalFileAdapter({
    src: './files/newsImgs',
    path: '/files/newsImgs'
})

module.exports = {
    fields: {
        title: {
            type: Text
        },
        link: {
            type: Url
        },
        date: {
            type: CalendarDay
        },
        img: {
            type: File,
            adapter: newsImagesAdapter,
            hooks: {
                beforeChange: async ({ existingItem }) => {
                    if (existingItem && existingItem.file) {
                        await newsImagesAdapter.delete(existingItem.file);
                    }
                },
            }
        }
    },
    hooks:{
        afterDelete: async ({ existingItem }) => {
            if (existingItem.file) {
                await newsImagesAdapter.delete(existingItem.file);
            }
        },
    }
}