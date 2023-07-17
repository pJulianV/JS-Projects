let limit = 10
let offset = 10
let productos = ''

let watcher = new IntersectionObserver((entries, watcher) => {
    entries.forEach(entrie => {
        if (entrie.isIntersecting){
            limit =+ 10
            getProducts()  
        }  
    })
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
})

const URL = "https://api.escuelajs.co/api/v1/products"

const getProducts = async () => {
    const res = await fetch(URL + `?limit=${limit}&offset=${offset}`)
    const data = await res.json()

    data.forEach(producto => {
        productos += `
            <div class="producto">
                <img class="product-image" src=${producto.images[0]} />
            </div>
        `

    });

    document.getElementById('container').innerHTML = productos

    const productsOnScreen =  document.querySelectorAll('#container .producto')
    let lastProduct = productsOnScreen[productsOnScreen.length - 1]
    watcher.observe(lastProduct)
}
getProducts()