        //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

        let PRODUCTS_NAMES = ['Бумага', 'Скрепки', 'Краски', 'Ручка', 'Ластик']
        let PRICES = [100, 30, 550, 55, 44]
        let IDS = [0, 1, 2, 3, 4]

        let products = []
        
        let catalog = {
            items: [],
            container: '.products',
            containerItem: '#dialog',
            cart: null,
            construct (cart) {
                this._init () //_ - это обозначение инкапсулированного метода
                this.cart = cart
            },
            _init () {
                this._handleData ()
                this.render ()
                this._handleEvents()
            },
            _handleEvents(){
                document.querySelector(this.container).addEventListener("click", (event) => {
                    if(event.target.name === "btn-buy"){
                        this.cart.add(Number(event.target.dataset.product))
                        console.log(this.cart)
                        console.log(this.cart.total())
                        this.cart.render()
                    }else if(event.target.classList.contains("product_item_link")){
                        this.renderItem(event.target.dataset.item)
                    }
                    //document.querySelector(cart.container_fly).classList.contains("product_item_link")
                })
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
                            <a class="product_item_link" href="#"  ><h5 class="product_item_link" data-item="${item.product_id}">${item.product_name}</h5></a>
                            <span class="price">${item.price}</span>
                            <div class="button-block"><button class="btn-buy" name="btn-buy" data-product="${item.product_id}">Купить</button></div>
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
            },
            renderItem(productId){
                let str = ""
                str = `
                    <div class="product clearfix">
                        <div class="product-img">
                            <div class="img"><img src="https://placehold.it/370x370" alt="img"/></div>
                            <div class="product-slider clearfix">
                                <a href="#"><img src="https://placehold.it/70x70" alt="img"/></a>
                                <a href="#"><img src="https://placehold.it/70x70" alt="img"/></a>
                                <a href="#"><img src="https://placehold.it/70x70" alt="img"/></a>
                            </div>
                        </div>
                        <div class="product-description">
                            <h1>${this.items[productId].product_name}</h1>
                            <div class="marketing">Hot deal</div>
                            <form class="order">
                                <p class="price"><span class="currency">Р</span>${this.items[productId].price}<span class="unit"></span></p>
                                <input name="buyFromItem" data-item="${productId}" type="submit" class="buy" value="Купить" />
                            </form>
                            <div class="description"><p>The majesty of Mountains - Ugmonk style.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p> </div>
                
                        </div>
                        <div><button name="closeItem">Закрыть</button></div>
                    </div>
                `
                document.querySelector(this.containerItem).innerHTML = str
                document.querySelector(this.containerItem).classList.add("show")
                document.querySelector(this.containerItem).addEventListener("click", (event) => {
                    if(event.target.name === "closeItem"){
                        document.querySelector(this.containerItem).classList.remove("show")
                    }else if(event.target.name === "buyFromItem"){
                        this.cart.add(Number(event.target.dataset.item))
                        //console.log(this.cart)
                        //console.log(this.cart.total())
                        this.cart.render()
                    }
                })
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
                                <span class="cart-info-name">${item.product_name}</span>
                                <i>${item.price}</i> x 
                                <i>${item.quantity}</i>шт
                            </div>
                            <input type="button" class="btn-del" name="btn-del" data-product="${item.product_id}" value="Удалить">
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
                
            },
            deleteProduct(id){
                let index=0
                let deleteEl = false
                while(index < this.items.length && !deleteEl){
                    if(this.items[index].product_id == id ){
                        this.items.splice(index, 1);
                        deleteEl = true
                    }
                    index++
                }
                this.render()
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
            catalog.construct(cart)

            //this.document.getElementById("catalog").addEventListener("click", CalatogClick) 
            this.document.getElementById("cart-form").addEventListener("click", showFlyCartClick) 
            document.querySelector(".cart-block").addEventListener("click", deleteFromCart)
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
                //let classArray = [...document.querySelector(cart.container_fly).classList]
                //console.dir(document.querySelector(cart.container_fly).classList);
                //classArray.indexOf("show") >=0 ?
                document.querySelector(cart.container_fly).classList.contains("show")?
                  document.querySelector(cart.container_fly).classList.remove("show") :
                    document.querySelector(cart.container_fly).classList.add("show")

                //classArray = [...document.querySelector(".cart-form .total-price").classList]
                //classArray.indexOf("hide") >=0 ?
                document.querySelector(".cart-form .total-price").classList.contains("hide")?
                  document.querySelector(".cart-form .total-price").classList.remove("hide") :
                    document.querySelector(".cart-form .total-price").classList.add("hide")
            }
        }
        function deleteFromCart(event){
            if(event.target.tagName === "INPUT" && event.target.className === "btn-del"){
                console.log(event.target.dataset.product)
                cart.deleteProduct(event.target.dataset.product)
            }
        }