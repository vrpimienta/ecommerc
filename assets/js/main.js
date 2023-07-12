async function getProducts(){
    try {
        const data  = await fetch("https://ecommercebackend.fundamentos-29.repl.co/");
 

                const res = await data.json() 
                
                window.localStorage.setItem("products", JSON.stringify(res))

                   return res;

    } catch (error) {
        console.log(error);
    }

}

function printProducts(db) {
    console.log(db.products);

    const productsHTML = document.querySelector(".products");
    
     let html = ''

    for (const product of db.products) {
        html += `
        <div class="product">
            <div class="product__img">
                <img src="${product.image}"  alt="imagen"  />
            </div> 

            <div class="product__info">
                <h3>${product.name} <span><b>Stock</b>: ${product.quantify} </span></h3>
                <h4> 
                    $${product.price}
                    <i class='bx bx-plus' id='${product.id}' ></i>
                </h4>
            </div>
        </div>
            `;
        
    }
    console.log(html);

    productsHTML.innerHTML = html;
    
}

async function main() {
    const db = {
        products:JSON.parse(window.localStorage.getItem("products")) ||
        (await getProducts()),
        cart: {}

    };

     printProducts(db);
}

main();