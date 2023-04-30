var thumbUp = document.getElementsByClassName("fa-solid fa-clipboard-check");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const task = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'task': task,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const task = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'task': task
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
