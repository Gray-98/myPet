import ace from 'ace-builds';

const langTools = ace.require('ace/ext/language_tools');

const spelKeywords = [
  { caption: 'true', value: 'true', meta: 'SpEL Keyword' },
  { caption: 'false', value: 'false', meta: 'SpEL Keyword' },
  { caption: 'null', value: 'null', meta: 'SpEL Keyword' },
  { caption: 'new', value: 'new ', meta: 'SpEL Keyword' },
  { caption: 'T', value: 'T()', meta: 'SpEL Type Reference' },
  { caption: 'instanceof', value: 'instanceof', meta: 'SpEL Keyword' },
  { caption: 'matches', value: 'matches ', meta: 'SpEL Keyword' },
  { caption: 'div', value: 'div', meta: 'SpEL Operator' },
  { caption: 'mod', value: 'mod', meta: 'SpEL Operator' },
  { caption: 'eq', value: 'eq', meta: 'SpEL Operator' },
  { caption: 'ne', value: 'ne', meta: 'SpEL Operator' },
  { caption: 'lt', value: 'lt', meta: 'SpEL Operator' },
  { caption: 'le', value: 'le', meta: 'SpEL Operator' },
  { caption: 'gt', value: 'gt', meta: 'SpEL Operator' },
  { caption: 'ge', value: 'ge', meta: 'SpEL Operator' },
  { caption: 'and', value: 'and', meta: 'SpEL Operator' },
  { caption: 'or', value: 'or', meta: 'SpEL Operator' },
  { caption: 'not', value: 'not', meta: 'SpEL Operator' },
  { caption: '?:', value: '?:', meta: 'SpEL Operator (Elvis)' },
  { caption: '?.', value: '?.', meta: 'SpEL Operator (Safe Nav)' },
  { caption: '?[', value: '?[ ]', meta: 'SpEL Collection Filter' },
  { caption: '![', value: '![ ]', meta: 'SpEL Collection Map' },
  { caption: '^[', value: '^[ ]', meta: 'SpEL First Match' },
  { caption: '$[', value: '$[ ]', meta: 'SpEL Last Match' },
  { caption: '=', value: '=', meta: 'SpEL Assignment' },
  { caption: '{}', value: '{ }', meta: 'SpEL Inline List' },
  { caption: '.', value: '.', meta: 'Property Access' },
  { caption: '()', value: '()', meta: 'Method Call' }
];

const spelBuiltInVariables = [
  { caption: '#this', value: '#this', meta: 'SpEL Built-in Variable' },
  { caption: '#root', value: '#root', meta: 'SpEL Built-in Variable' },
  { caption: '#variables', value: '#variables', meta: 'SpEL Built-in Variable' },
  { caption: '#context', value: '#context', meta: 'SpEL Built-in Variable' },
  { caption: '#env', value: '#env', meta: 'SpEL Built-in Variable' },
  { caption: '#systemProperties', value: '#systemProperties', meta: 'SpEL Built-in Variable' },
  { caption: '#systemEnvironment', value: '#systemEnvironment', meta: 'SpEL Built-in Variable' }
];

const spelFunctions = [
  { caption: '#now', value: '#now()', meta: 'SpEL Function' },
  { caption: '#today', value: '#today()', meta: 'SpEL Function' },
  { caption: '#uuid', value: '#uuid()', meta: 'SpEL Function' },
  { caption: '#format', value: '#format()', meta: 'SpEL Function' },
  { caption: '#jsonPath', value: '#jsonPath()', meta: 'SpEL Function' },
  { caption: '#xmlPath', value: '#xmlPath()', meta: 'SpEL Function' },
  { caption: '#String', value: '#String', meta: 'SpEL Function' },
  { caption: '#DateFormat', value: '#DateFormat', meta: 'SpEL Function' },
  { caption: '#UpperCase', value: '#UpperCase()', meta: 'SpEL Function' },
  { caption: '#LowerCase', value: '#LowerCase()', meta: 'SpEL Function' },
  { caption: '#Trim', value: '#Trim()', meta: 'SpEL Function' },
  { caption: '#Join', value: '#Join()', meta: 'SpEL Function' },
  { caption: '#Split', value: '#Split()', meta: 'SpEL Function' }
];

const spelUtilityClasses = [
  { caption: '#StringUtils', value: '#StringUtils', meta: 'SpEL Static Utility' },
  { caption: '#DateUtils', value: '#DateUtils', meta: 'SpEL Static Utility' },
  { caption: '#RegExUtils', value: '#RegExUtils', meta: 'SpEL Static Utility' },
  { caption: '#CollectionUtils', value: '#CollectionUtils', meta: 'SpEL Static Utility' },
  { caption: '#MathUtils', value: '#MathUtils', meta: 'SpEL Static Utility' },
  { caption: '#JsonUtils', value: '#JsonUtils', meta: 'SpEL Static Utility' },
  { caption: '#TextUtils', value: '#TextUtils', meta: 'SpEL Static Utility' },
  { caption: '#FileUtils', value: '#FileUtils', meta: 'SpEL Static Utility' }
];

const spelBeans = [
  { caption: '@userService', value: '@userService', meta: 'Spring Bean' },
  { caption: '@orderService', value: '@orderService', meta: 'Spring Bean' },
  { caption: '@configProperties', value: '@configProperties', meta: 'Spring Bean' },
  { caption: '@applicationContext', value: '@applicationContext', meta: 'Spring Bean' },
  { caption: '@environment', value: '@environment', meta: 'Spring Bean' },
  { caption: '@validator', value: '@validator', meta: 'Spring Bean' },
  { caption: '@messageSource', value: '@messageSource', meta: 'Spring Bean' },
  { caption: '@dataSource', value: '@dataSource', meta: 'Spring Bean' }
];

const allSpelCompletions = [
  ...spelKeywords,
  ...spelBuiltInVariables,
  ...spelFunctions,
  ...spelUtilityClasses,
  ...spelBeans
];

langTools.addCompleter({
  getCompletions: function(editor, session, pos, prefix, callback) {
    const completions = allSpelCompletions.map(item => ({
      caption: item.caption,
      value: item.value,
      meta: item.meta,
      score: 1000
    }));
    callback(null, completions);
  }
});

// spel_autocomplete_data.ts
// SpEL autocomplete definitions for ace-builds

export const spelKeywords = [
  { caption: 'true', value: 'true', meta: 'SpEL Keyword' },
  { caption: 'false', value: 'false', meta: 'SpEL Keyword' },
  { caption: 'null', value: 'null', meta: 'SpEL Keyword' },
  { caption: 'new', value: 'new', meta: 'SpEL Keyword' },
  { caption: 'instanceof', value: 'instanceof', meta: 'SpEL Keyword' },
  { caption: 'matches', value: 'matches', meta: 'SpEL Keyword' },
  { caption: 'between', value: 'between', meta: 'SpEL Keyword' },
  { caption: 'and', value: 'and', meta: 'SpEL Keyword' },
  { caption: 'or', value: 'or', meta: 'SpEL Keyword' },
  { caption: 'not', value: 'not', meta: 'SpEL Keyword' }
];

export const spelBuiltInVariables = [
  { caption: '#this', value: '#this', meta: 'SpEL Variable' },
  { caption: '#root', value: '#root', meta: 'SpEL Variable' },
  { caption: '#ctx', value: '#ctx', meta: 'SpEL Variable' },
  { caption: '#vars', value: '#vars', meta: 'SpEL Variable' },
  { caption: '#execution', value: '#execution', meta: 'SpEL Variable' },
  { caption: '#methodName', value: '#methodName', meta: 'SpEL Variable' },
  { caption: '#args', value: '#args', meta: 'SpEL Variable' }
];

export const spelFunctions = [
  { caption: '#now()', value: '#now()', meta: 'SpEL Function' },
  { caption: '#length()', value: '#length()', meta: 'SpEL Function' },
  { caption: '#toUpperCase()', value: '#toUpperCase()', meta: 'SpEL Function' },
  { caption: '#toLowerCase()', value: '#toLowerCase()', meta: 'SpEL Function' },
  { caption: '#format()', value: '#format()', meta: 'SpEL Function' }
];

export const spelUtilityClasses = [
  { caption: '#StringUtils', value: '#StringUtils', meta: 'Utility Class' },
  { caption: '#DateUtils', value: '#DateUtils', meta: 'Utility Class' },
  { caption: '#RegExUtils', value: '#RegExUtils', meta: 'Utility Class' },
  { caption: '#CollectionUtils', value: '#CollectionUtils', meta: 'Utility Class' }
];

export const stringUtilsMethods = [
  { caption: '#StringUtils.isEmpty', value: '#StringUtils.isEmpty()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.isNotEmpty', value: '#StringUtils.isNotEmpty()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.equals', value: '#StringUtils.equals()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.contains', value: '#StringUtils.contains()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.startsWith', value: '#StringUtils.startsWith()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.endsWith', value: '#StringUtils.endsWith()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.trim', value: '#StringUtils.trim()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.upperCase', value: '#StringUtils.upperCase()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.lowerCase', value: '#StringUtils.lowerCase()', meta: 'StringUtils Method' },
  { caption: '#StringUtils.substring', value: '#StringUtils.substring()', meta: 'StringUtils Method' }
];

export const regexUtilsMethods = [
  { caption: '#RegExUtils.matches', value: '#RegExUtils.matches()', meta: 'RegExUtils Method' },
  { caption: '#RegExUtils.replaceAll', value: '#RegExUtils.replaceAll()', meta: 'RegExUtils Method' },
  { caption: '#RegExUtils.replaceFirst', value: '#RegExUtils.replaceFirst()', meta: 'RegExUtils Method' },
  { caption: '#RegExUtils.split', value: '#RegExUtils.split()', meta: 'RegExUtils Method' },
  { caption: '#RegExUtils.group', value: '#RegExUtils.group()', meta: 'RegExUtils Method' }
];

export const dateUtilsMethods = [
  { caption: '#DateUtils.now', value: '#DateUtils.now()', meta: 'DateUtils Method' },
  { caption: '#DateUtils.format', value: '#DateUtils.format()', meta: 'DateUtils Method' },
  { caption: '#DateUtils.parse', value: '#DateUtils.parse()', meta: 'DateUtils Method' },
  { caption: '#DateUtils.addDays', value: '#DateUtils.addDays()', meta: 'DateUtils Method' },
  { caption: '#DateUtils.addHours', value: '#DateUtils.addHours()', meta: 'DateUtils Method' },
  { caption: '#DateUtils.subtractDays', value: '#DateUtils.subtractDays()', meta: 'DateUtils Method' },
  { caption: '#DateUtils.getYear', value: '#DateUtils.getYear()', meta: 'DateUtils Method' }
];

export const collectionUtilsMethods = [
  { caption: '#CollectionUtils.isEmpty', value: '#CollectionUtils.isEmpty()', meta: 'CollectionUtils Method' },
  { caption: '#CollectionUtils.isNotEmpty', value: '#CollectionUtils.isNotEmpty()', meta: 'CollectionUtils Method' },
  { caption: '#CollectionUtils.contains', value: '#CollectionUtils.contains()', meta: 'CollectionUtils Method' },
  { caption: '#CollectionUtils.size', value: '#CollectionUtils.size()', meta: 'CollectionUtils Method' },
  { caption: '#CollectionUtils.join', value: '#CollectionUtils.join()', meta: 'CollectionUtils Method' },
  { caption: '#CollectionUtils.distinct', value: '#CollectionUtils.distinct()', meta: 'CollectionUtils Method' }
];

export const spelBeans = [
  { caption: '@userService', value: '@userService', meta: 'Spring Bean' },
  { caption: '@orderService', value: '@orderService', meta: 'Spring Bean' },
  { caption: '@configProperties', value: '@configProperties', meta: 'Spring Bean' },
  { caption: '@applicationContext', value: '@applicationContext', meta: 'Spring Bean' },
  { caption: '@environment', value: '@environment', meta: 'Spring Bean' },
  { caption: '@validator', value: '@validator', meta: 'Spring Bean' },
  { caption: '@messageSource', value: '@messageSource', meta: 'Spring Bean' },
  { caption: '@dataSource', value: '@dataSource', meta: 'Spring Bean' }
];

export const allSpelCompletions = [
  ...spelKeywords,
  ...spelBuiltInVariables,
  ...spelFunctions,
  ...spelUtilityClasses,
  ...stringUtilsMethods,
  ...regexUtilsMethods,
  ...dateUtilsMethods,
  ...collectionUtilsMethods,
  ...spelBeans
];