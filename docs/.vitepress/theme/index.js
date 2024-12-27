import Theme from 'vitepress/theme'
import './custom.css'
import Naive from 'naive-ui'

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(Naive); // 注册组件库
    },
}
