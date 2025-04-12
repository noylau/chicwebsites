const fs = require('fs')
const products = require('./data/products.json')

products.forEach(product => {
  const html = fs.readFileSync('./product-template.html', 'utf-8')
    .replace(/{{title}}/g, product.title)
    .replace(/{{id}}/g, product.id)
  
  fs.writeFileSync(`public/product-${product.id}.html`, html)
})
