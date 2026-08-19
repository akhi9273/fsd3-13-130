import readline from 'readline/promises';
import { writeFile, readFile } from 'fs/promises';
import { stdin, stdout } from 'process';

const FILE = "products.json";

// Save cart into JSON file
const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
};

// Get cart from JSON file
const getCart = async () => {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
};

// Add item to cart
const addToCart = async (item) => {
    const products = await getCart();
    products.push(item);
    await saveCart(products);
};

// Show cart
const showCart = async () => {
    const products = await getCart();

    if (products.length === 0) {
        console.log("Cart is empty!");
    } else {
        console.table(products);
    }
};

// Delete item from cart
const deleteFromCart = async (id) => {
    let products = await getCart();

    products = products.filter(item => item.id !== id);

    await saveCart(products);

    console.log("Item removed successfully!");
};

// Update quantity
const updateCart = async (id, qty) => {
    const products = await getCart();

    const product = products.find(item => item.id === id);

    if (product) {
        product.qty = qty;
        await saveCart(products);
        console.log("Quantity updated successfully!");
    } else {
        console.log("Item not found!");
    }
};

// Main function
const main = async () => {

    const cin = readline.createInterface({
        input: stdin,
        output: stdout
    });

    let choice;

    do {

        console.log("\n===== SHOPPING CART =====");
        console.log("1------- Add to cart");
        console.log("2------- Show cart");
        console.log("3------- Remove item");
        console.log("4------- Update Quantity");
        console.log("5------- Checkout");

        choice = await cin.question("Enter your choice: ");

        switch (Number(choice)) {

            // Add to cart
            case 1: {

                let data = await cin.question(
                    "Enter id,name,price,qty: "
                );

                let [id, name, price, qty] = data.split(",");

                let item = {
                    id: id,
                    name: name,
                    price: Number(price),
                    qty: Number(qty)
                };

                await addToCart(item);

                console.log("Item added successfully!");

                console.table([item]);

                break;
            }

            // Show cart
            case 2:

                await showCart();

                break;

            // Remove item
            case 3: {

                let id = await cin.question(
                    "Enter product id to remove: "
                );

                await deleteFromCart(id);

                break;
            }

            // Update quantity
            case 4: {

                let id = await cin.question(
                    "Enter product id: "
                );

                let qty = await cin.question(
                    "Enter new quantity: "
                );

                await updateCart(id, Number(qty));

                break;
            }

            // Checkout
            case 5:

                console.log("See you later....");

                break;

            default:

                console.log("Invalid choice! Try again.");
        }

    } while (Number(choice) !== 5);

    cin.close();
};

main();