fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{console.log(json)
                json.forEach(e => {
                let produkter = document.querySelector(".produkter")

                let prodDiv = document.createElement("div")
                prodDiv.classList.add("produkten")
                
                let infocard = document.createElement("div")
                infocard.classList.add("info-card")
                
                let prodImg = document.createElement("img")                
                let prodP = document.createElement("p")
                let info = document.createElement("p")
                let prodPrice = document.createElement("h3")

                info.innerText = e.description
                prodP.innerText = e.title
                prodImg.src=e.image;
                prodPrice.innerText=`${e.price}$`
                
                infocard.appendChild(info)
                prodDiv.appendChild(prodImg)
                prodDiv.appendChild(prodP)
                produkter.appendChild(prodDiv)
                prodDiv.appendChild(prodPrice)
                });
            
            })