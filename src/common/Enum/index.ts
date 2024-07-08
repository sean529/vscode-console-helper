// TODO: 应该可以获取配置信息，后期可以改为从配置信息中获取变量名
export const SETTINGS_LIST = [
  {
    name: 'Prefix Logo',
    default: '',
    description: '前缀标识'
  },
  {
    name: 'Color',
    default: '',
    description: '字体颜色'
  },
  {
    name: 'Color Bg',
    default: '',
    description: '背景颜色'
  },
  {
    name: 'Font Size',
    default: '',
    description: '字号大小'
  },
  {
    name: 'Show Semi',
    default: false,
    description: '末尾是否加分号'
  },
  {
    name: 'Show LineNumber',
    default: false,
    description: '是否显示行号'
  },
  {
    name: 'Select FileName',
    default: '不打印',
    description: '是否打印文件名'
  },
  {
    name: 'Number Argument',
    default: 'console.log 接收 2 个参数',
    description: 'console.log 接收的变量数量'
  },
  {
    name: 'Select Quotes',
    default: 'single',
    description: '请选择单引号或双引号'
  },
  {
    name: 'Random Color',
    default: false,
    description: '是否随机颜色'
  },
  {
    name: 'Default Type',
    default: 'log',
    description:
      'console的类型, log, warn, error, info, table, count, group, groupCollapsed'
  },
  {
    name: 'Wrap Select Variable',
    default: '#',
    description: '包装选择的变量，例如：JSON.stringify(#)'
  },
  {
    name: 'Delete Types',
    default: 'log, debug, info, warn, error, assert, dir, dirxml, trace, group, groupEnd, time, timeEnd, profile, profileEnd, count',
    description: '删除 console 的类型，多个类型用逗号隔开'
  },
  {
    name: 'Random Color In Terminal',
    default: false,
    description: '是否在终端中随机颜色，权重比 Random Color 高'
  },
]
// 变量占位符
export const PLACEHOLDER = '#'

// 用户选择 console.log 的参数个数
export const NUMBER_ARGUMENT = {
  oneArgument: 'console.log 接收 1 个参数',
  twoArgument: 'console.log 接收 2 个参数',
  threeArgument: 'console.log 接收 3 个参数'
}

// 样式 key
export const STYLES = {
  color: 'color',
  colorBg: 'background',
  fontSize: 'font-size'
}
