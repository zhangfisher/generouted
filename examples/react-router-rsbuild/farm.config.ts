import { defineConfig } from '@farmfe/core'

export default defineConfig({
  // 编译相关配置
  compilation: {
    input: {
      // 可以配置相对或者绝对路径
      index: './index.html',
    },
    output: {
      path: './build',
      publicPath: '/',
    },
    // ...
    resolve: {
      alias: {
        '@': './src',
      },
    },
  },

  // Dev Server 相关配置
  server: {
    port: 9000,
    // ...
  },
  // 插件配置
  plugins: ['@farmfe/plugin-react'],
})
