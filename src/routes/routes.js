const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
})
router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
})
router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
})
router.get("/account", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/account.html'));
})

router.get("/search", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/search.html'));
})
router.get("/detail", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/detail.html'));
})
router.get("/shopping-cart", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/shopping-cart.html'));
})
router.get("/payment-process", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/payment-process.html'));
})
router.get("/transaction", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/transaction.html'));
})

module.exports = router;
