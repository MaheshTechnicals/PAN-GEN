let logo = document.getElementById("profile")
let fullName = document.getElementById("left")
let full = document.getElementById("get")



// Fetch Data.

fetch('https://randomuser.me/api/')
  .then((res) => {
    return res.json()
  }).then((data) => {


    let fname = data.results[0].name.first
    let lname = data.results[0].name.last
    let title = data.results[0].name.title
    let proLogo = data.results[0].picture.large


    // PAN GEN

    let myPan = () => {
      let a = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      let b = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      let c = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      let d = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      let e = lname[0]
      let f = Math.floor(Math.random() * (9999 - 1000) + 1000)
      let g = lname.slice(-1).toUpperCase()
      let panNum = a + b + c + d + e + f + g



      // DOM 


      let img = document.createElement("img")
      img.src = proLogo
      img.className = "logo"
      logo.append(img)

      let display = document.createElement("p")
      display.innerText = title + " " + fname + " " + lname
      fullName.append(display)

      let Pan = document.createElement("p")
      Pan.innerText = `PAN: ${panNum} `
      display.appendChild(Pan)

    }
    
    
    // Button Added.
    
    let btn = document.createElement("button")
    btn.innerText="Generate New"
    btn.className="btn"
   full.appendChild(btn)
   
   btn.addEventListener("click", ()=>{
     location.reload()
   })
    
    
    
    myPan()
  })
