const constants = {
    services: [
        {
            image: { image: '/images/integration.png', alt: 'Integration' },
            card: {
                title: 'Twilio Integration',
                description: 'Discrete projects to integrate customer solutions with one or more Twilio services. Projects are delivered by our tactical team with a focus on getting connected as quickly as possible. Short term assignments often prove to be the ideal way to evaluate Zing and Twilio\'s broader offerings.'
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
    serviceOffers: [
        {
            title: {
                line1: 'Discovery',
                line2: '& Insight',
            },
            description: 'A collaborative process to quickly identify how we can unlock your value, and where your pain lies.',
            link: '#/',
        },
        {
            title: {
                line1: 'Agile',
                line2: 'Development',
            },
            description: 'An Agile approach means we can maintain momentum. Development is completed on a “per sprint” basis to ensure that we are continually delivering customer ....',
            link: '#/',
        },
        {
            title: {
                line1: 'Effective',
                line2: 'Reporting',
            },
            description: 'Data isn’t Information! Regular and powerful reporting keeps all stakeholders updated at every stage of the project.',
            link: '#/',
        },
    ],
    caseStudies: [
        {
            images: {
                image: '/images/study-img-01.jpg',
                logo: '/images/brand-logo1.png',
            },
            studyInfo: {
                title: 'Condimentum nibh turpis, eget posuere ipsum pellentes que.',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
        {
            images: {
                image: '/images/study-img-02.jpg',
                logo: '/images/brand-logo2.png',
            },
            studyInfo: {
                title: 'Nam condimentum nibh turpis, eget posuere ipsum pellentes que eget.',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
        {
            images: {
                image: '/images/study-img-03.jpg',
                logo: '/images/brand-logo3.png',
            },
            studyInfo: {
                title: 'Nibh turpis, eget posuere ipsum pellentesque eget.',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
        {
            images: {
                image: '/images/study-img-04.jpg',
                logo: '/images/brand-logo4.png',
            },
            studyInfo: {
                title: 'Pellentes que eget. Nam condimentum nibh turpis, eget posuere',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
        {
            images: {
                image: '/images/study-img-05.jpg',
                logo: '/images/brand-logo5.png',
            },
            studyInfo: {
                title: 'Dimentum nibh turpis, eget posuere ipsum pellentes que eget.',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
        {
            images: {
                image: '/images/study-img-06.jpg',
                logo: '/images/brand-logo6.png',
            },
            studyInfo: {
                title: 'Nam condimentum nibh turpis, eget posuere ipsum pellentes que eget.',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
        {
            images: {
                image: '/images/study-img-07.jpg',
                logo: '/images/brand-logo7.png',
            },
            studyInfo: {
                title: 'Nibh turpis, eget posuere ipsum pellentesque eget.',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
        {
            images: {
                image: '/images/study-img-08.jpg',
                logo: '/images/brand-logo8.png',
            },
            studyInfo: {
                title: 'Nibh turpis, eget posuere ipsum pellentesque eget.',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
        {
            images: {
                image: '/images/study-img-09.jpg',
                logo: '/images/brand-logo9.png',
            },
            studyInfo: {
                title: 'Nibh turpis, eget posuere ipsum pellentesque eget.',
                description: 'Morbi porttitor dignissim elit at fermentum. Fusce iaculis eget quam id pharetra.',
            }
        },
    ],
    functions: {
        capitalizeTxt: (txt) => txt.charAt(0).toUpperCase() + txt.slice(1),
    }

}

export default constants;