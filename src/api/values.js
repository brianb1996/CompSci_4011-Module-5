export const valueOfProduct = (price, inStock) => price * inStock

export const valueOfStore = products => {
    // let value = 0

    // for (let x = 0; x < products.length; x++){
    //     const product = products[x]
    //     value += valueOfProduct(product.price, product.inStock)
    // }

    // return value

    return products.reduce((value, product) => {
        return value + valueOfProduct(product.price, product.inStock)
    }, 0)

}

export const currencyFormat = value => `$${value.toFixed(2)}`

