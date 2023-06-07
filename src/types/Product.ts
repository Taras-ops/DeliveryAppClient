interface Product {
    name: string,
    imageName: string,
    _id: string,
    price: number,
    quantity: number,
    shop: {
        _id: string
    }
}

export default Product