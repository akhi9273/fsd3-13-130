import { readFile, writeFile, appendFile, unlink } from "fs/promises";


const writeData = async (fname, contents) => {
    await writeFile(fname, contents);
    console.log("File written");
};


const readData = async (fname) => {
    const data = await readFile(fname, "utf-8");
    console.log("File contents:");
    console.log(data);
};


const appendData = async (fname, contents) => {
    await appendFile(fname, contents);
    console.log("Data appended");
};


const deleteData = async (fname) => {
    await unlink(fname);
    console.log("File deleted");
};


const main = async () => {
    await writeData("happy.txt", "I am very happy");
    await readData("happy.txt");

    await appendData("happy.txt", "\nFSD is interesting");
    await readData("happy.txt");

    await deleteData("happy.txt");
};

main();