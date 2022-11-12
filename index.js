let inps = document.querySelectorAll("input")
let span = document.querySelector('span')
let lbl = document.querySelector(".lbl")
let btn = document.querySelector("button")


inps.forEach(inp => {
    inp.onfocus = () => {
        inp.style.border = "2px solid blue" 
        // lbl.innerHTML = ""
        // span.innerHTML = "" 
    }
    inp.onblur = () => {
        if(inp.value.length > "") {
            inp.style.border = "3px solid green"
            // lbl.forEach( lbl =>{
            
            //  }) 
              lbl.innerHTML = ""
            span.innerHTML = ""
        } else {
            inp.style.border = "3px solid red" 
          //  lbl.forEach( lbl =>{
           
          //  }) 
            lbl.innerHTML = "Please fill this field first!"
           span.innerHTML = "!"
        }
    }
})
btn.onclick = () => {
  btn.style.backgroundColor = "red" 
}




let form = document.forms.inform

form.onsubmit = (event) => {
  event.preventDefault()
 
  let user = {}

  let fm = new FormData(form)
  fm.forEach((value, key) => {
    user[key] = value
  })
  console.log(user);
}
  // let count = 0
  // user.(item => {
  //  if (item.length == ""){
  //    count++
  //  }
  // })

  // console.log(count);

