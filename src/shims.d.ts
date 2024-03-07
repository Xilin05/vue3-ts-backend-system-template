declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  interface ImportMeta {
    env: Record<string, unknown>
  }
}

declare module 'nprogress'
declare module 'pinia-plugin-persistedstate'
declare module 'path-browserify'
