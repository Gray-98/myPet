<script>
  import { onMount } from 'svelte';
  import Prism from 'prismjs';
  import { defaultColors, themes, generateColorStyles } from './spelColors.js';
  import { registerSpelLanguage, validateSyntax } from './spelLanguage.js';
  
  // 导出属性，允许自定义颜色
  export let code = '';
  export let colors = defaultColors;
  export let theme = 'light'; // 可以选择预设主题
  
  // 用于存储高亮后的HTML
  let highlightedCode = '';
  // 用于存储语法错误信息
  let syntaxError = null;
  
  // 如果使用预设主题，则应用主题颜色
  $: if (theme && themes[theme]) {
    colors = themes[theme];
  }
  
  // 定义Spring Expression Language的语法规则
  onMount(() => {
    // 注册语法
    registerSpelLanguage(Prism);
    
    // 应用自定义颜色
    applyCustomColors();
    
    // 初始高亮
    updateHighlight();
  });
  
  // 应用自定义颜色
  function applyCustomColors() {
    // 创建或获取样式元素
    let styleEl = document.getElementById('prism-spel-custom-styles');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'prism-spel-custom-styles';
      document.head.appendChild(styleEl);
    }
    
    // 使用颜色生成器生成样式
    styleEl.textContent = generateColorStyles(colors);
  }
  
  // 更新高亮
  function updateHighlight() {
    try {
      // 尝试高亮代码
      highlightedCode = Prism.highlight(code, Prism.languages.spel, 'spel');
      syntaxError = null;
      
      // 使用导入的语法验证函数
      syntaxError = validateSyntax(code);
    } catch (e) {
      syntaxError = { message: e.message };
    }
  }
  
  // 当代码变化时更新高亮
  $: if (code !== undefined) {
    if (typeof Prism !== 'undefined' && Prism.languages.spel) {
      updateHighlight();
    }
  }
  
  // 当颜色变化时更新样式
  $: if (colors && typeof document !== 'undefined') {
    applyCustomColors();
  }
</script>

<div class="spel-editor-container">
  <div class="spel-editor-wrapper">
    <div class="editor-area">
      <input 
        type="text"
        bind:value={code} 
        spellcheck="false"
        class="code-input"
        placeholder="输入Spring Expression Language代码..."
      />
      <pre class="code-output"><code class="language-spel">{@html highlightedCode}</code></pre>
    </div>
  </div>
  
  {#if syntaxError}
    <div class="error-panel">
      <p class="error-message">语法错误: {syntaxError.message}</p>
    </div>
  {/if}
</div>

<style>
  .spel-editor-container {
    position: relative;
    width: 100%;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
  
  .editor-area {
    position: relative;
    width: 100%;
    min-height: 150px; /* 增加最小高度 */
    height: auto; /* 允许自动增长 */
  }
  
  .code-input, .code-output {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px; /* 保持单行高度 */
    margin: 0;
    padding: 0 1em; /* 移除上下内边距，只保留左右内边距 */
    border: none;
    font-family: inherit;
    font-size: 14px;
    line-height: 40px; /* 将行高设置为与高度相同 */
    white-space: nowrap;
    box-sizing: border-box;
  }
  
  .code-input {
    color: transparent;
    background: transparent;
    caret-color: black;
    z-index: 1;
    outline: none; /* 移除焦点时的轮廓 */
    vertical-align: middle; /* 垂直居中 */
  }
  
  .code-output {
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
    height: 40px;
    display: flex; /* 使用flex布局 */
    align-items: center; /* 垂直居中内容 */
  }
  
  /* 确保code元素内的文本也垂直居中 */
  .code-output code {
    display: block;
    line-height: 40px;
  }
  
  /* 确保编辑器容器能够适应内容高度 */
  .spel-editor-wrapper {
    position: relative;
    overflow: hidden; /* 防止内容溢出 */
  }
  
  .error-panel {
    margin-top: 10px;
    padding: 10px;
    background-color: #f8d7da;
    color: #721c24;
    border-radius: 4px;
  }
</style>