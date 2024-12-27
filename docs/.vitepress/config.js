import { defineConfig } from 'vitepress'
import {vitepressDemoPlugin} from "vitepress-demo-plugin";

export default defineConfig({
    title:'Easy-component',
    themeConfig: {
        logo: '/public/icon.png',
        siteTitle: 'Easy-component',
        nav: [
            {
                text: '指南',
                items:[
                    { text: '介绍', link: '/guide' },
                    { text: '快速上手', link: '/guide/quick-start' },
                    { text: '主题定制', link: '/guide/theme' },
                    { text: '常见问题', link: '/guide/faq' },
                    { text: '国际化', link: '/guide/i18n'},
                    { text: '更新日志', link: '/guide/changelog' },
                    {text: '参与贡献', link: '/guide/contribution'}
                ]
            },
            {
                text: '组件',
                items:[
                    { text: '基础组件', link: '/components/basic' },
                    { text: '导航组件', link: '/components/navigation'},
                    { text: '数据输入', link: '/components/data-entry'},
                    { text: '反馈组件', link: '/components/feedback'},
                    { text: '数据展示', link: '/components/data-display/basic'},
                ]
            },
        ],
        search: {
            provider: 'local'
        },
        socialLinks:[
            { icon: 'github', link: 'https://github.com/utianhuan666/easy-components' }
        ],
        sidebar:{
            '/guide/':[
                {
                    text: '指南',
                    items: [
                        { text: '介绍', link: '/guide' },
                        { text: '快速上手', link: '/guide/quick-start' },
                        { text: '主题定制', link: '/guide/theme' },
                        { text: '常见问题', link: '/guide/faq' },
                        { text: '国际化', link: '/guide/i18n'},
                        { text: '更新日志', link: '/guide/changelog' },
                    ]
                }
            ],
            '/components/data-display/':[
                {
                    text: '数据展示',
                    items:[
                        { text: 'EasyTable - 高级表格', link: '/components/data-display/basic' },
                        { text: 'EditableEasyTable - 可编辑表格', link: '/components/navigation'},
                        { text: 'DragSortTable - 拖动排序表格', link: '/components/data-entry'},
                        { text: 'EasyList - 高级列表', link: '/components/feedback'},
                        { text: 'EasyDescriptions - 定义列表', link: '/components/data-display/'},
                    ]
                }
           ]
        }

    },
    markdown:{
        config: (md) => {
            md.use(vitepressDemoPlugin)
        }
    }
})
