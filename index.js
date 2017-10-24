
function justInvoke(fn){
  return fn()
}

function setThisWithCall(age){
  return age
}

let bob = setThisWithCall.call(18)
