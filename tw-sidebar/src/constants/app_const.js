import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faComputer, faMobile, faBook, faGear, faPenRuler, faWandSparkles, faHeadset, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';



var navigations = [{ id: 1, name: "Feature", viewId: 'feature-section' }
    , { id: 2, name: "testimonial", viewId: 'testimonial-section' }
    , { id: 3, name: "Highlight", viewId: 'highlight-section' }
    , { id: 4, name: "Pricing", viewId: 'price-section' }
    , { id: 1, name: "FAQ", viewId: "faq-section" }]



var featureModel = {
    icon: "",
    title: "",
    subtitle: "",
    selected: false,
    image: ""
}
// Product

// Features
// Testimonials
// Highlights
// Pricing
// FAQs
// Company

// About us
// Careers
// Press
// Legal

// Terms
// Privacy
// Contact

const footerOptions = [
    {
        title: 'Product',
        features: [
            "Features",
            "Testimonials",
            "Highlights",
            "Pricing",

        ],
    },
    {
        title: 'Company',
        features: [
            "About us",
            "Careers",
            "Press",
        ],
    },
    {
        title: 'Legal',
        features: [
            "Terms",
            "Privacy",
            "Contact"
        ],
    }
]


const faqList = [
    {
        question: 'How do I contact customer support if I have a question or issue?',
        answer: 'You can reach our customer support team by emailing support@email.com or calling our toll-free number. We\'re here to assist you promptly.'
    },
    {
        question: 'Can I return the product if it doesn\'t meet my expectations?',
        answer: 'Absolutely! We offer a hassle-free return policy. If you\'re not completely satisfied, you can return the product within 12 days for a full refund or exchange.'
    },
    {
        question: 'What makes your product stand out from others in the market?',
        answer: 'Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.'
    },
    {
        question: 'Is there a warranty on the product, and what does it cover?',
        answer: 'Yes, our product comes with a 2 years warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.'
    },
]

const priceList = [
    {
        planName: 'free',
        price: "$0",
        buttonTxt: "sign up for free",
        features: [
            "10 users included",
            "2 GB of storage",
            "Help center access",
            "Email support",
        ],
    },
    {
        planName: 'Proffesional',
        price: "$15",
        buttonTxt: "start now",
        features: [
            "20 users included",
            "10 GB of storage",
            "Help center access",
            "Priority email support",
            "Dedicated team",
            "Best deals",
        ],
    },
    {
        planName: 'Enterprice',
        price: "$30",
        buttonTxt: "contact us",
        features: [
            "50 users included",
            "30 GB of storage",
            "Help center access",
            "Phone & email support",
        ],
    },
];


const testimonials = [
    {
        content: "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
        componayLogo: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
        personName: 'Remy Sharp',
        designation: 'Senior Engineer',
        img: 'https://mui.com/static/images/avatar/1.jpg'
    },
    {
        content: "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
        componayLogo: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
        personName: 'Travis Howard',
        designation: 'Lead Product Designer',
        img: 'https://mui.com/static/images/avatar/2.jpg'
    },
    {
        content: "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
        componayLogo: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
        personName: 'Cindy Baker',
        designation: 'CTO',
        img: 'https://mui.com/static/images/avatar/3.jpg'
    },
    {
        content: "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
        componayLogo: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
        personName: 'Julia Stewart',
        designation: 'Senior Engineer',
        img: 'https://mui.com/static/images/avatar/4.jpg'
    },
    {
        content: "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
        componayLogo: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
        personName: 'Julia Stewart',
        designation: 'Product Designer',
        img: 'https://mui.com/static/images/avatar/5.jpg'
    },
    {
        content: "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
        componayLogo: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
        personName: 'Daniel Wolf',
        designation: 'CDO',
        img: 'https://mui.com/static/images/avatar/6.jpg'
    },
]

const featureArray = [
    {
        icon: faBook,
        title: "Dashboard",
        subtitle: "This item could provide a snapshot of the most important metrics or data points related to the product.",
        selected: false,
        image: "https://mui.com/static/images/templates/templates-images/hero-light.png"
    },
    {
        icon: faMobile,
        title: "Mobile integration",
        subtitle: "This item could provide information about the mobile app version of the product.",
        selected: false,
        image: "https://mui.com/static/images/templates/templates-images/mobile-light.png"
    },
    {
        icon: faComputer,
        title: "Available on All platforms",
        subtitle: "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
        selected: false,
        image: "https://mui.com/static/images/templates/templates-images/devices-light.png"
    }

]

const highlightList = [
    {
        icon: faGear,
        title: "Adaptable performance",
        subtitle: "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks."
    },
    {
        icon: faPenRuler,
        title: "Built to last",
        subtitle: "Experience unmatched durability that goes above and beyond with lasting investment."
    },
    {
        icon: faThumbsUp,
        title: "Great user experience",
        subtitle: "Integrate our product into your routine with an intuitive and easy-to-use interface."
    },
    {
        icon: faWandSparkles,
        title: "Innovative functionality",
        subtitle: "Stay ahead with features that set new standards, addressing your evolving needs better than the rest."
    },
    {
        icon: faHeadset,
        title: "Adaptable performance",
        subtitle: "Count on our responsive customer support, offering assistance that goes beyond the purchase."
    },
    {
        icon: faMoneyBillTrendUp,
        title: "Precision in every detail",
        subtitle: "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience."
    },
]

export { featureArray, featureModel, testimonials, highlightList, priceList, faqList, footerOptions,navigations };

