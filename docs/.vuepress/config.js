module.exports = {
    /**
     * Head
     */
    head: [
        [
            "link",
            {
                rel: "icon",
                type: "image/svg+xml",
                href: "/assets/img/logo.svg",
            },
        ],
    ],

    /**
     * Title
     */
    title: "OctoFetch",

    /**
     * Description
     */
    description:
        "Javascript/Typescript library for fetching data from APIs with zero dependencies.",

    /**
     * Theme configuration
     */
    themeConfig: {
        logo: "/assets/img/logo.svg",

        /**
         * Navigation
         */
        nav: [
            { text: "Home", link: "/" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Guide", link: "/guide/getting-started" },
            { text: "Github", link: "https://github.com/maartenvn/OctoFetch" },
        ],

        /**
         * Sidebar
         */
        sidebar: {
            "/": [
                "",
                {
                    title: "Guide",
                    children: ["/guide/installation", "/guide/getting-started"],
                },

                {
                    title: "API Reference",
                    collapsable: false,
                    children: [
                        {
                            title: "OctoFetch",
                            link: "/guide/reference/octofetch",
                            collapsable: false,
                        },
                        {
                            title: "OctoError",
                            link: "/guide/reference/octofetch",
                            collapsable: false,
                        },
                    ],
                },

                {
                    title: "Framework Support",
                    children: ["/guide/frameworks/vue"],
                },
            ],
        },
    },
};
