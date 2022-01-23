fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{console.log(json)
                let buyItems = []
                let totalPrice = []
                let cart = document.querySelector(".cart")
                let checkoutDiv = document.querySelector(".checkout-div")
                let container = document.querySelector(".container")
                let checkout = document.querySelector(".checkout")
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
                    totalPrice.push(e.price)
                    span1.innerText++
                })

                
            });

            let cartActive = false
            cart.addEventListener("click",() =>{
                container.style.display="none"
                checkoutDiv.style.zIndex="10"
                if(!cartActive){
                    cartActive=true
                buyItems.forEach(e => {
                    const checkoutimg = document.createElement("img")
                    const checkoutHeading = document.createElement("h2")
                    const checkoutInfo = document.createElement("p")
                    const checkoutPrice = document.createElement("h3")

                    const checkoutListDiv = document.createElement("div")
                    const checkoutListContainer = document.createElement("div")
                    checkoutListDiv.classList.add("checkout-list-div")
                    checkoutListContainer.classList.add("checkout-list-container")

                    checkoutimg.src= e.image
                    checkoutHeading.innerText= e.title
                    checkoutInfo.innerText=e.description
                    checkoutPrice.innerText=`${e.price}$`



                    checkoutListContainer.appendChild(checkoutimg)

                    checkoutListDiv.appendChild(checkoutHeading)
                    checkoutListDiv.appendChild(checkoutInfo)
                    checkoutListDiv.appendChild(checkoutPrice)
                    checkoutListContainer.appendChild(checkoutListDiv)
                    checkout.appendChild(checkoutListContainer)
                })
                
                function addArrayNums(arr) {
                    let total = 0;
                    for (let i in arr) {
                      total += arr[i];
                    }
                  return total;
                }

               

                const buyBtn = document.createElement("button")
                const discount = document.createElement("input")
                const discountBtn = document.createElement("button")
                const endprice = document.createElement("h2")


                endprice.style.color="white"
                discount.type="text"
                discountBtn.innerText="Add discound"
                buyBtn.innerText="Checkout"
                buyBtn.classList.add("buy-button")
                endprice.innerText=`${addArrayNums(totalPrice).toFixed(2)}$`
                

                checkout.appendChild(endprice)
                checkout.appendChild(discount)
                checkout.appendChild(discountBtn)
                checkout.appendChild(buyBtn)
            }
            })
            })
