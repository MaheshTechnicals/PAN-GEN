fetch('https://randomuser.me/api/')
  .then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data)

    let fname = data.results[0].name.first
    let lname = data.results[0].name.last
    let title = data.results[0].name.title


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
      console.log(panNum)

    }

    myPan()
  })