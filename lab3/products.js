const products=[
    {id:1,name:'marker',qty:100,price:15},
    {id:2,name:'duster',qty:50,price:10},
]
let nextId=3;
export const getAllProducts=() =>{
    return products;

}
 export const addProducts=() => {
       item.id= nextId;
       nextId++;
       products.push(item);
       return item;
 };
export const  deleteProducts=(pip) =>{
    const item = products.findIndex((prd)=>prd.id===pid);
    if(item ==-1)
        return false;
    products.splice(item,1);
    console.log("products remaining:",products);
    return true;


};
//craete  as function a to update  products even pid call this function in to prg6.js  and verify its working by  echoapi
export  const UpdateProducts=(pid)=>{
    const item=products.findIndex((pid)=>prd.id===pid)
        if(item==-1){
            return false;

        }
        updateItem.id=pid;
        products(item)=updateItem;
        return updateItem;
        

    };
    export const getProductsByI=(pid) =>{
        const index = products.findIndex((prd)=>prd.id===pid);
        if(index==-1){
            return false;
        }
        return products[index];
    };

