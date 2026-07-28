const { writeFile } = require("fs/promises");

const f1 = () => {
    console.log("F1");
};

const f2 = () => {
    console.log("F2");
};

const f3 = () => {
    console.log("F3");
};

const writeData = async () => {
    await writeFile("note.txt", "Hello World");
};

const main = () => {
    console.log("main");

    f1();

   
    setTimeout(f2, 1000);

   
    setImmediate(f3);

    
    process.nextTick(f1);

    writeData();

    console.log("end");

    new Promise((resolve, reject) => {
        console.log("I am promise1");
        resolve();
    });

    new Promise((resolve, reject) => {
        console.log("I am promise2");
        resolve();
    });
};

main();