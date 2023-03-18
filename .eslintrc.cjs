module.exports = {
  // 环境
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  // 插件从右到左覆盖处理
  extends: ["eslint:recommended", "prettier"],
  // 解析器配置
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      tsx: true,
      jsx: true
    }
  },
  // 全局自定义宏
  globals: {
    $ref: "readonly"
  },
  // 插件
  plugins: ["@typescript-eslint/eslint-plugin", "eslint-plugin-prettier"],
  rules: {
    "no-unused-vars": 1,
    "no-console": 1,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "vue/multi-word-component-names": 0,
    "vue/attribute-hyphenation": 0,
    "vue/v-on-event-hyphenation": 0,
    "import/extensions": 0,
    "import/no-absolute-path": 0
  }
}
