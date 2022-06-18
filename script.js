const productsConteiner = document.querySelector('#products-conteiner')

const productsList = [
    {
        img: {
            src: 'products/camisa.jpg',
            alt: ''
        },

        price: '$127,99',

        description: 
        `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum, quam animi eaque debitis
        fuga minus odit placeat eveniet sunt saepe. Hic quidem cum iste facere reprehenderit, porro incidunt
        omnis.
        `
    },

    {
        img: {
            src: 'products/camisa.jpg',
            alt: ''
        },

        price: '$127,99',

        description:
        `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum, quam animi eaque debitis
        fuga minus odit placeat eveniet sunt saepe. Hic quidem cum iste facere reprehenderit, porro incidunt
        omnis.
        `
    }
]
/*
modelo:
    {
        img: {
            hrf: '',
            alt: ''
        }

        description: ''
    }
*/

function addProducts(product) {
    productsList.push(
        product
    )
}

function addTemplateProducts(numberOfProducts) {
    const product = {
        img: {
            src: 'products/camisa.jpg',
            alt: ''
        },
        
        price: '$127,99',

        description: 
        `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum, quam animi eaque debitis
        fuga minus odit placeat eveniet sunt saepe. Hic quidem cum iste facere reprehenderit, porro incidunt
        omnis.
        `
    }

    let count = 0
    while (numberOfProducts > count) {
        addProducts(product)
        count++
    }
}

function LoadProducts() {
    productsList.forEach(element => {
        productsConteiner.innerHTML += 
        `
        <div>
            <img src="${element.img.src}" alt="${element.img.alt}">
            <span class="price">${element.price}</span>
            <p>${element.description}</p>
        </div>
        `
    })
}

addTemplateProducts(5)
LoadProducts()