const {Text, Password, Checkbox, Url, Relationship, File} = require('@keystonejs/fields')
const {LocalFileAdapter} = require('@keystonejs/file-adapters');

const userAvatarAdapter = new LocalFileAdapter({
    src: process.env.NODE_ENV === 'production' ? './dist/client/build/files/avatars' : './client/build/files/avatars',
    path: '/files/avatars'
})

module.exports = {
    fields: {
        name: {
            type: Text,
            defaultValue: 'Новый артист'
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
        phone: {
            type: Text,
            isRequired: true
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
            type: Checkbox,
            defaultValue: false
        },
        avatar: {
            type: File,
            adapter: userAvatarAdapter,
            hooks: {
                beforeChange: async ({existingItem}) => {
                    if (existingItem && existingItem.file) {
                        await userAvatarAdapter.delete(existingItem.file);
                    }
                },
            }
        },
        isPartner: {
            type: Checkbox,
            defaultValue: false
        },
        // isEmailVerified: {
        //     type: Checkbox,
        //     defaultValue: false
        // },
        isAdmin: {
            type: Checkbox,
            defaultValue: false
        },
    },
    hooks: {
        afterDelete: async ({existingItem}) => {
            if (existingItem.file) {
                await userAvatarAdapter.delete(existingItem.file);
            }
        },
    }
}