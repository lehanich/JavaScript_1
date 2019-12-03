        //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

        let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
        let PRICES = [100, 120, 1000, 15, 18]
        let IDS = [0, 1, 2, 3, 4]

        let products = [] //массив объектов
        
        

        let cart = {
            items: [],
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
                    let find = products.find (el => el.product_id === pID)
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
            }
        }

        function getData () {
            for (let i = 0; i < IDS.length; i++) {
                products.push (createNewProduct (i))
            }
        }

        function createNewProduct (index) {
            return {
                product_name: PRODUCTS_NAMES [index],
                price: PRICES [index],
                product_id: IDS [index]
            }
        }

        function addProduct (id) {
            let find = products.find (el => el.product_id === id)
            cart.items.push (Object.assign ({}, find, {quantity: 1}))
        }

        //// Actions ////
        getData ()

        cart.add(0)
        cart.add(2)
        cart.add(2)
        console.log(cart)
        console.log(cart.total())
        ////