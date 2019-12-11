        //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

        let PRODUCTS_NAMES = ['Бумага', 'Скрепки', 'Краски', 'Ручка', 'Ластик']
        let PRICES = [100, 30, 550, 55, 44]
        let IDS = [0, 1, 2, 3, 4]

        let products = []
        
        let catalog = {
            items: [],
            container: '.products',
            construct () {
                this._init () //_ - это обозначение инкапсулированного метода
            },
            _init () {
                this._handleData ()
                this.render ()
            },
            _handleData () {
                for (let i = 0; i < IDS.length; i++) {
                    this.items.push (this._createNewProduct (i))
                }
            },
            _createNewProduct (index) {
                return {
                    product_name: PRODUCTS_NAMES [index],
                    price: PRICES [index],
                    product_id: IDS [index]
                }
            },
            render () {
                let str = ''
                this.items.forEach (item => {
                    str += `
                        <div class="product-item">
                            <div class="pImage">
                                <img  src="https://placehold.it/200x200" alt="${item.product_name}">
                            </div>
                            <h5>${item.product_name}</h5>
                            <span class="price">${item.price}</span>
                            <div class="button-block"><button class="btn-buy" data-product="${item.product_id}">Купить</button></div>
                            <!--<div class="catalog-link">
                                <a href="catalog/product1.html">Бумага</a>
                            </div>-->
                        </div>
                    `
                })
                console.log(this.container)
                console.log(document)
                //document.querySelector(this.container).innerHTML = str
                document.querySelector(this.container).innerHTML = str
            }
        }
        

        let cart = {
            items: [],
            container_fly: ".cart-block",
            add(pID) {
                //Если товар есть в корзине, увеличиваем quantity
                let addedToCart = false
                this.items.forEach((el,product_id)=>{          
                    if(el.product_id === pID && !addedToCart){
                        el.quantity++
                        addedToCart = true
                    }
                })
                //Если товара нет - добавляем объект
                if(this.items.length == 0 || !addedToCart){
                    let find = catalog.items.find (el => el.product_id === pID)
                    this.items.push (Object.assign ({}, find, {quantity: 1}))
                }
            },
            total(){ 
                //return this.items.length
                let length = 0
                this.items.forEach((el,product_id)=>{  
                    length += el.quantity        
                })
                return length
            },
            totalPrice(){ 
                let totalPrice = 0
                this.items.forEach((el,product_id)=>{  
                    totalPrice += el.quantity * el.price       
                })
                return totalPrice
            },
            render(){
                let str = ''
                this.items.forEach (item => {
                    str += `
                        <div class="cart-item">
                            <div class="cart-image">
                                <img  src="https://placehold.it/50x50" alt="${item.product_name}">
                            </div>
                            <div class="cart-info">
                                <b>${item.product_name}</b>
                                <i>${item.price}</i> x 
                                <i>${item.quantity}</i>шт
                            </div>
                            <button class="btn-del" data-product="${item.product_id}">Удалить</button>
                            <!--<div class="catalog-link">
                                <a href="catalog/product1.html">Бумага</a>
                            </div>-->
                        </div>
                    `
                })
                str += `
                    <div class="total-price-fly">
                        <span>Итоговая сумма</span>
                        <span class="price">${this.totalPrice()}</span>
                    </div>
                `
                //document.querySelector(this.container).innerHTML = str
                document.querySelector(this.container_fly).innerHTML = str
                document.querySelector(".cart-form .total-price").innerHTML = this.totalPrice()
            }
        }

        // function getData () {
        //     for (let i = 0; i < IDS.length; i++) {
        //         products.push (createNewProduct (i))
        //     }
        // }

        // function createNewProduct (index) {
        //     return {
        //         product_name: PRODUCTS_NAMES [index],
        //         price: PRICES [index],
        //         product_id: IDS [index]
        //     }
        // }

        //// Actions ////
        //getData ()


        window.onload = function() {
            catalog.construct()

            this.document.getElementById("catalog").addEventListener("click", CalatogClick)
            //this.document.getElementById("cart-form").addEventListener("mouseenter", showFlyCart) 
            //this.document.getElementById("cart-form").addEventListener("mouseover", hideFlyCart)   
            this.document.getElementById("cart-form").addEventListener("click", showFlyCartClick) 

            //cart.render()
        }
        ////
        function CalatogClick(event){
            if(event.target.tagName === "BUTTON"){
                cart.add(Number(event.target.dataset.product))
                console.log(cart)
                console.log(cart.total())
                cart.render()
                
            }
        }
        function showFlyCart(event){
            console.dir(event.target);
            if(event.target.tagName === "FORM" && event.target.className === "cart-form"){
                document.querySelector(cart.container_fly).classList.add("show")
            }
        }
        function hideFlyCart(event){
            if(event.target.tagName === "FORM" && event.target.className === "cart-form"){
                document.querySelector(cart.container_fly).classList.remove("show")
            }
        }
        function showFlyCartClick(event){
            if(event.target.tagName === "INPUT" && event.target.className === "cart-button"){
                let classArray = [...document.querySelector(cart.container_fly).classList]
                //console.dir(document.querySelector(cart.container_fly).classList);
                classArray.indexOf("show") >=0 ?
                  document.querySelector(cart.container_fly).classList.remove("show") :
                    document.querySelector(cart.container_fly).classList.add("show")
            }
        }