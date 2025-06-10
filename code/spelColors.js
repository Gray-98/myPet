// Spring Expression Language 默认颜色配置
export const defaultColors = {
  keyword: '#07a',     // 关键字颜色
  string: '#690',      // 字符串颜色
  function: '#DD4A68', // 函数颜色
  operator: '#9a6e3a', // 操作符颜色
  variable: '#e90',    // 变量颜色
  property: '#905',    // 属性颜色
  punctuation: '#999', // 标点符号颜色
  comment: '#708090',  // 注释颜色
  background: '#f5f2f0' // 背景颜色
};

// 预设主题
export const themes = {
  light: { ...defaultColors },
  dark: {
    keyword: '#88c0d0',
    string: '#a3be8c',
    function: '#81a1c1',
    operator: '#d8dee9',
    variable: '#b48ead',
    property: '#8fbcbb',
    punctuation: '#eceff4',
    comment: '#4c566a',
    background: '#2e3440'
  },
  // 可以添加更多预设主题
};

// 生成颜色样式
export function generateColorStyles(colors) {
  return `
    // .spel-editor-wrapper { background-color: ${colors.background}; padding: 1em; border-radius: 0.3em; }
    .token.comment { color: ${colors.comment}; }
    .token.string { color: ${colors.string}; }
    .token.keyword { color: ${colors.keyword}; }
    .token.function { color: ${colors.function}; }
    .token.operator { color: ${colors.operator}; }
    .token.variable { color: ${colors.variable}; }
    .token.property { color: ${colors.property}; }
    .token.punctuation { color: ${colors.punctuation}; }
    .syntax-error { border-bottom: 2px wavy red; position: relative; }
    .error-message { 
      position: absolute;
      background: #f8d7da;
      color: #721c24;
      padding: 5px;
      border-radius: 3px;
      font-size: 14px;
      z-index: 10;
      bottom: 100%;
      left: 0;
      white-space: nowrap;
      display: none;
    }
    .syntax-error:hover .error-message { display: block; }
  `;
}