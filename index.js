
function justInvoke(fn){
  return fn()
}

function setThisWithCall(age){
  this.name = "bob"

}

let bob = {name: "bob"}
setThisWithCall.call(bob)
