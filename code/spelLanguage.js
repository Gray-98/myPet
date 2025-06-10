// Spring Expression Language 语法定义
export const spelLanguageDefinition = {
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
    greedy: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'keyword': /\b(?:and|or|not|div|mod|eq|ne|lt|le|gt|ge|true|false|null|instanceof|matches|between|is)\b/i,
  'function': /\b[a-z_]\w*(?=\s*\()/i,
  'property': {
    pattern: /\b[a-z_]\w*(?:\.[a-z_]\w*)*\b/i,
    lookbehind: true
  },
  'variable': {
    pattern: /#\{[^}]+\}|\$\{[^}]+\}/,
    greedy: true
  },
  'operator': /[+\-*/%^]=?|!=|==?|<>|<<?=?|>>?>?=?|&&|\|\||:|\?|\.|[+\-~]/,
  'punctuation': /[(){}\[\],;]/
};

// 注册语法到Prism
export function registerSpelLanguage(Prism) {
  if (!Prism.languages.spel) {
    Prism.languages.spel = spelLanguageDefinition;
  }
  return Prism.languages.spel;
}

// 简单的语法验证函数
export function validateSyntax(code) {
  // 检查括号是否匹配
  const brackets = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  let syntaxError = null;
  
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    
    if (Object.keys(brackets).includes(char)) {
      stack.push({ char, index: i });
    } else if (Object.values(brackets).includes(char)) {
      const expected = brackets[stack.pop()?.char];
      if (char !== expected) {
        return { message: `不匹配的括号: 期望 ${expected}，但得到 ${char}`, index: i };
      }
    }
  }
  
  if (stack.length > 0) {
    const last = stack.pop();
    return { message: `未闭合的括号: ${last.char}`, index: last.index };
  }
  
  return null;
}