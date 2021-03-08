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
                href: "/img/logo.svg",
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
        logo: "/img/logo.svg",

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
                {
                    text: "Guide",
                    children: [
                        {
                            text: "Installation",
                            link: "/guide/installation",
                        },

                        {
                            text: "Getting Started",
                            link: "/guide/getting-started",
                        },
                    ],
                },

                {
                    text: "API Reference",
                    collapsable: false,
                    children: [
                        {
                            text: "API Reference: OctoFetch",
                            link: "/guide/reference/octofetch",
                        },
                        {
                            text: "API Reference: OctoError",
                            link: "/guide/reference/octoerror",
                        },
                    ],
                },

                {
                    text: "Framework Support",
                    children: [
                        {
                            text: "Vue",
                            link: "/guide/frameworks/vue",
                        },
                    ],
                },

                {
                    text: "About",
                    collapsable: false,
                    children: [
                        {
                            text: "About OctoFetch",
                            link: "/about/index",
                        },
                    ],
                },
            ],
        },
    },
};
