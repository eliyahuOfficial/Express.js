const users = [
    {
        name: {
            first: "Admin",
            middle: "",
            last: "User",
        },
        phone: "0507123012",
        email: "adminu@gmail.com",
        password: "Abc!123Abc",
        address: {
            state: "IL",
            country: "Israel",
            city: "Tel aviv",
            street: "TEST",
            houseNumber: 5,
            zip: "8920435",
        },
        isBusiness: true,
        isAdmin: true,

    },
    {
        name: {
            first: "Business",
            middle: "",
            last: "User",
        },
        phone: "0507123034",
        email: "businessu@gmail.com",
        password: "Abc!123Abc",
        address: {
            state: "IL",
            country: "Israel",
            city: "Tel aviv",
            street: "TEST",
            houseNumber: 5,
            zip: "8920446",
        },
        isBusiness: true,
    },
    {
        name: {
            first: "Client",
            middle: "",
            last: "User",
        },
        phone: "0507123015",
        email: "clientu@gmail.com",
        password: "Abc!123Abc",
        address: {
            state: "IL",
            country: "Israel",
            city: "Tel aviv",
            street: "TEST",
            houseNumber: 5,
            zip: "8920476",
        },
        isBusiness: false,
    },
];
const cards = [
    {

        title: "TEST1",
        subtitle: "a test value for this card",
        description: "a test value for new card\na test value for new card\n",
        phone: "050-3211234",
        email: "test1@gmail.com",
        web: "https://www.bing.com",
        image: {
            url: "https://www.picshare.co.il/m_pictures/img174576.jpg",
            "alt": "image of something"
        },
        address: {
            state: "IL",
            country: "Israel",
            city: "Arad",
            street: "Shoham",
            houseNumber: 5,
            zip: "8920435"
        },



    },
    {

        title: "TEST2",
        subtitle: "a test value for this card",
        description: "a test value for new card\na test value for new card\n",
        phone: "050-3211235",
        email: "test2@gmail.com",
        web: "https://www.google.com/",
        image: {
            url: "https://www.picshare.co.il/m_pictures/img167491.jpg",
            "alt": "image of something"
        },
        address: {
            state: "IL",
            country: "Israel",
            city: "EILAT",
            street: "Shushan",
            houseNumber: 2,
            zip: "8912345"
        },



    },
    {

        title: "TEST3",
        subtitle: "a test value for this card",
        description: "a test value for new card\na test value for new card\n",
        phone: "050-3211236",
        email: "test3@gmail.com",
        web: "https://www.walla.co.il",
        image: {
            url: "https://www.photo-art.co.il/wp-content/uploads/2015/09/BY1A4457.jpg",
            "alt": "image of something"
        },
        address: {
            state: "IL",
            country: "Israel",
            city: "Holon",
            street: "Shalom",
            houseNumber: 6,
            zip: "8925432"
        },



    },
];
export { users, cards };