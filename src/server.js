const express = require("express");
const cors = require("cors")
const fs = require('fs');
const app = express();
const port = 3000

const routes = require("./routes/routes");
app.use(routes)
app.use(express.static("./src/public"));

app.use(express.urlencoded({ extended: true }))
app.use(express.json({type:"*/*" }))
app.use(cors());

let products = JSON.parse(fs.readFileSync("src/product-list.json", "utf8"));
let shoppingCart = {}

app.use("/", routes)
app.use("/login", routes)
app.use("/register", routes)
app.use("/account", routes)

app.use("/search", routes)
app.use("/detail-:productId", routes)
app.use("/shopping-cart", routes)
app.use("/payment-process", routes)
app.use("/transaction", routes)

app.get('/products', (req, res) => {
    res.send(JSON.stringify(products));
})

app.get('/product/:productId', (req, res) => {
    const productId = req.params.productId || ""
    for (const id in products) {
        if (id === productId) {
            res.send(JSON.stringify(products[id]));
            break;
        }
    }
})

app.post('/addToShoppingCart', (req, res) => {
    const productId = req.body.productId || "";
    let isEqual = false;
    for (const id in products) {
        if (id === productId) {
            if (shoppingCart.length > 0) {
                for (const product of shoppingCart) {
                    if (product === productId) {
                        isEqual = true;
                        break;
                    }
                }
            }
            if (!isEqual) {
                shoppingCart[id] = products[id];
            }
            break;
        }
    }
    res.end();
})

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
})