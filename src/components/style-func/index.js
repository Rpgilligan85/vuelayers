import { pick } from '../../utils'
import Style from './style.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  options = pick(options, 'dataProjection')
  Object.assign(Style, options)

  Vue.component(Style.name, Style)
}

export default plugin

export {
  plugin as install,
  Style,
}
