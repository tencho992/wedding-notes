var bride = document.querySelectorAll(".bride");
var groom = document.querySelectorAll(".groom");

console.log(bride)
console.log(groom)


Array.from(bride).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log(this)
    const name = this.parentNode.childNodes[1].innerText
    const msg = this.parentNode.childNodes[3].innerText
    fetch('messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
      })
    })
    .then(response => {
      if (response.ok){
        console.log('hey its working')
        response.json()
      }
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  })
})
  

Array.from(groom).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log(this)
    const name = this.parentNode.childNodes[1].innerText
    const msg = this.parentNode.childNodes[3].innerText
    fetch('/messages/panos', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
      })
    })
    .then(response => {
      if (response.ok){
        console.log('hey its working')
        response.json()
      }
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  })
})