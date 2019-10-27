// --防抖函数
export function debounce(fn, delay) {
  let timer = null;
  return function(...val) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(this, val)
    }, delay)
  }
}