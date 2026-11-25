import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { revealDirective } from './directives/reveal'

const app = createApp(App)

// 注册全局类 Apple 滚动入场动效指令
app.directive('reveal', revealDirective)

app.mount('#app')
