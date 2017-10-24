
function justInvoke(fn){
  return fn()
}

function setThisWithCall(age){
  this.name = "bob"
}

let bob = setThisWithCall.call(18)
