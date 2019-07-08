export default function throttle(fn, interval) {
  const self = fn // 保存需要被延迟执行的函数的引用
  let timer = null
  let firstTime = true // 是否第一次调用
  
  return function(...args) {
     const that = this
     if (firstTime) {
        self.apply(that, args)
        return (firstTime = false)
     }
     
     if (timer) {
        return false
     }
     
     timer = setTimeout(function() {
        clearTimeout(timer)
        timer = null
        self.apply(that, args)
     }, interval || 500)
  }
}
