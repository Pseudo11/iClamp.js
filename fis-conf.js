/**
 * 模块化开发
 */
// Commonjs规范
fis.hook('commonjs', {
  extList: ['.js', '.jsx', '.es', '.ts', '.tsx'],
  paths: {
    iclamp: './modules',
  }
})

// 以下两行配置顺序禁止更换
fis.unhook('components')
fis.hook('node_modules', {
  shimBuffer: false,
  shimProcess: false
})

fis.match('/{node_modules,modules}/**.js', {
  isMod: true,
  useSameNameRequire: true
})