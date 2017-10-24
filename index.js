
function justInvoke(fn){
  return fn()
}

function setThisWithCall(age){}

let bob = setThisWithCall.call(18)