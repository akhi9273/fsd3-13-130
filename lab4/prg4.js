import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse Products</a>
    `);
});

app.get("/api/products", (req, res) => {
    const modifiedProducts = products.map(
        ({ reviews, description, ...rest }) => rest
    );

    res.status(200).json({
        count: modifiedProducts.length,
        data: modifiedProducts
    });
});

// Query string / request query must be before req parameters
// Example: /api/products/query?search=smart&limit=2&maxPrice=1000

app.get("/api/products/query", (req, res) => {
    const { search, limit, maxPrice } = req.query;

    console.log("search:", search);
    console.log("limit:", limit);
    console.log("maxPrice:", maxPrice);

    let sortedProducts = [...products];

    // Filter by maximum price
    if (maxPrice) {
        sortedProducts = sortedProducts.filter(
            (item) => item.price <= Number(maxPrice)
        );
    }

    // Search by product name
    if (search) {
        sortedProducts = sortedProducts.filter(
            (item) =>
                item.name.toLowerCase().startsWith(search.toLowerCase())
        );
    }

    // Limit number of products
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        res.status(200).json({
            data: [],
            msg: "No products matched your search criteria"
        });
    } else {
        res.status(200).json({
            count: sortedProducts.length,
            data: sortedProducts
        });
    }
});

// Dynamic URL
app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;

    const p = products.find((item) => item.id === Number(id));

    if (p) {
        res.status(200).json({
            status: true,
            data: p
        });
    } else {
        res.status(404).json({
            status: false,
            msg: `Product not found with id: ${id}`
        });
    }
});

// 404 Route
app.use((req, res) => {
    res.status(404).send("Route not found");
});

app.listen(3333, () => {
    console.log("prg4 is running on port 3333...");
});