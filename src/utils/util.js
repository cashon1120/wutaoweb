import $ from 'jquery'
// 节流
export const throttle = (fn, delay) => {
  let pre = Date.now()
  return function () {
    if (Date.now() - pre >= delay) {
      fn.apply(this, arguments)
      pre = Date.now()
    }
  }
}

// 滚动动画
export const bodyScrollTo = (top, fn) => {
  $("html,body").animate({
    scrollTop: top
  }, 600, 'swing', fn);
}

// 判断当前浏览器

export const getOs = () => {
  if (navigator.userAgent.indexOf("MSIE") > 0) {
    return "MSIE";
  }
  if (navigator.userAgent.indexOf("Firefox") > 0) {
    return "Firefox";
  }
  if (navigator.userAgent.indexOf("Safari") > 0) {
    return "Safari";
  }
  if (navigator.userAgent.indexOf("Camino") > 0) {
    return "Camino";
  }
  if (navigator.userAgent.indexOf("Gecko/") > 0) {
    return "Gecko";
  }

}