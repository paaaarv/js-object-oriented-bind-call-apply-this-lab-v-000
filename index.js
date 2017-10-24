
function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn, thisValue, arg){
  fn.call(arg){
    return thisValue
  }
}
