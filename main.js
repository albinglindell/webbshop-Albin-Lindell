fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{console.log(json)
                let buyItems = []
                let cart = document.querySelector(".cart")
                let checkoutDiv = document.querySelector(".checkout-div")
                let container = document.querySelector(".container")
                json.forEach(e => {
                    
                    let produkter = document.querySelector(".produkter")
                let span1 = document.querySelector("#quantity")

                let prodDiv = document.createElement("div")
                prodDiv.classList.add("produkten")
                
                let infocard = document.createElement("div")
                infocard.classList.add("info-card")
                
                let prodImg = document.createElement("img")                
                let prodP = document.createElement("p")
                let info = document.createElement("p")
                let prodPrice = document.createElement("h3")
                let buyBtn = document.createElement("button")

                info.innerText = e.description
                prodP.innerText = e.title
                prodImg.src=e.image;
                prodPrice.innerText=`${e.price}$`
                buyBtn.innerText="Buy now"
                
                infocard.appendChild(info)
                prodDiv.appendChild(prodImg)
                prodDiv.appendChild(prodP)
                produkter.appendChild(prodDiv)
                prodDiv.appendChild(prodPrice)
                prodDiv.appendChild(buyBtn)
               

                buyBtn.addEventListener("click", () =>{
                    buyItems.push(e)
                    span1.innerText++
                })

                
            });
            cart.addEventListener("click",() =>{
                container.style.display="none"
                const checkout = document.createElement("div")
                checkout.classList.add=("checkout")
                checkoutDiv.style.zIndex="10"
                checkoutDiv.appendChild(checkout)
            })
            })
