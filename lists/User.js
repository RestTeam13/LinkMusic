const {Text, Password, Checkbox, Url, Relationship, File} = require('@keystonejs/fields')
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const userAvatarAdapter = new LocalFileAdapter({
    src: './files/avatars',
    path: '/files/avatars' //Todo Заменить на нормальный адрес
})

module.exports = {
    fields: {
        name: {
            type: Text
        },
        description: {
            type: Text,
            isMultiline: true
        },
        email: {
            type: Text,
            isRequired: true,
            isUnique: true
        },
        password: {
            type: Password,
            isRequired: true
        },
        emailAddress: {
            type: Text
        },
        siteAddress: {
            type: Url
        },
        socialLinks: {
            type: Relationship,
            ref: 'SocialLink',
            many: true
        },
        releases: {
            type: Relationship,
            ref: 'Release',
            many: true
        },
        canBookPerformance: {
            type: Checkbox
        },
        avatar: {
            type: File,
            adapter: userAvatarAdapter,
            hooks: {
                beforeChange: async ({ existingItem }) => {
                    if (existingItem && existingItem.file) {
                        await userAvatarAdapter.delete(existingItem.file);
                    }
                },
            }
        },
        isPartner: {
            type: Checkbox
        },
        isAdmin: {
            type: Checkbox
        },
    },
    hooks:{
        afterDelete: async ({ existingItem }) => {
            if (existingItem.file) {
                await userAvatarAdapter.delete(existingItem.file);
            }
        },
    }
}