class intlClass {
  constructor() {
    this.currentLocale = null
    this.locales = {
      zh: null,
      en: null
    }
  }
  init(options) {
    this.currentLocale = options.currentLocale
    this.locales = {
      ...options.locales
    }
  }
  get(params){
    const param = params.split('.')
    const data = this.locales[this.currentLocale]
    if(!data || !data[param[0]]) return 
    let result = data[param[0]]
    param.forEach((item, index) => {
      if(index > 0){
        result = result[item] ? result[item] : null
      }
    })
    return result
  }
}
const intl = new intlClass()
export default intl