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
                        <div class="Item">
                            <div class="pImage">
                                <img  src="https://placehold.it/300x200" alt="${item.product_name}">
                            </div>
                            <b>${item.product_name}</b>
                            <i>${item.price}</i>
                            <button class="btn-buy">Купить</button>
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
                                <i>${item.price}</i>
                                <i>${item.quantity}</i>
                            </div>
                            <button class="btn-del">Удалить</button>
                            <!--<div class="catalog-link">
                                <a href="catalog/product1.html">Бумага</a>
                            </div>-->
                        </div>
                    `
                })
                //document.querySelector(this.container).innerHTML = str
                document.querySelector(this.container_fly).innerHTML = str
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

            cart.add(0)
            cart.add(2)
            cart.add(2)
            console.log(cart)
            console.log(cart.total())

            cart.render()
        }
        ////