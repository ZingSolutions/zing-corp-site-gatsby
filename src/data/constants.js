const constants = {
    services: [
        {
            image: { image: '/images/integration.png', alt: 'Integration' },
            card: {
                title: 'Twilio Integration',
                description: 'Discrete projects to integrate customer solutions with one \n\
            or more Twilio services. Projects are delivered by our \n\
            tactical team with a focus on getting connected as quickly \n\
            as possible. Short term assignments often prove to be the \n\
            ideal way to evaluate Zing and Twilio\'s broader offerings.'
            }
        },
        {
            image: { image: '/images/solutions.png', alt: 'Solutions' },
            card: {
                title: 'Enterprise Solutions',
                description: 'Bespoke and transformative solutions for customers looking to disrupt and dominate their sector. These solutions typically run for a minimum of 2 to 3 months and are delivered by a dedicated team on a per sprint basis, as described in our RapidValue™ methodology.'
            }
        },
        {
            image: { image: '/images/services.png', alt: 'Services' },
            card: {
                title: 'Managed Services',
                description: 'An ongoing relationship once our enterprise solutions are fully embedded within a customer. Development, maintenance and, where appropriate, support are delivered against agreed SLAs without losing our focus on Value. New initiatives are still delivered within our RapidValue™ methodology.'
            }
        },
    ],
    functions: {
        capitalizeTxt: (txt) => txt.charAt(0).toUpperCase() + txt.slice(1),
    }

}

export default constants;