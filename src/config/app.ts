import * as env from 'env-var';

export default {
    siteName: env.get('REACT_APP_SITE_NAME').default('后台管理系统'),
    copyright: env.get('REACT_APP_COPYRIGHT').default('&copy; 2020 后台管理系统').asString(),
    layouts: [
        {
            name: 'primary',
            include: [/.*/],
            exclude: [/(\/(en|zh))*\/login/],
        },
    ],
    locale: {
        languages: [
            {
                key: 'en',
                title: 'English',
                icon: '/america.svg',
            },
            {
                key: 'zh',
                title: '中文',
                icon: '/china.svg',
            },
        ],
        defaultLanguage: env.get('REACT_APP_DEFAULT_LANGUAGE').default('zh'),
    }
};
