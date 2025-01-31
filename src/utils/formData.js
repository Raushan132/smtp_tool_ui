const customFormData =[
    {
        name: 'SMTP Server',
        type: 'text',
        value:'',
        data_bind:'smptServer',
        id: 1,
    },
    {
        name: 'Port',
        type: 'number',
        value:'',
        data_bind:'port',
        id: 2
    },
    {
        name: 'Username',
        type: 'text',
        value:'',
        data_bind:'username',
        id: 3,
    },
    {
        name: 'Password',
        type: 'password',
        value:'',
        data_bind:'password',
        id: 4
    },
    {
        name: 'From email address',
        type: 'email',
        value:'',
        data_bind:'fromEmailAddress',
        id: 5
    },
    {
        name: 'To email address',
        type: 'email',
        value:'',
        data_bind:'toEmailAddress',
        id: 6
    },
]

export default customFormData