import {readFile,writeFile}from "fs/promises";

export const addProduct=async(req, res)=>{
    const {body}=req;

    const nonParsefile = await readFile("Product.json");
    const File =JSON.parse(nonParsefile);
    File.push(body);
    const saveFile = await writeFile("Product.json",JSON.stringify(File));
    return res.json("user added")
};
export const getAll =async(req, res)=>{
    const Product=await readFile("Product.json");
    const finUs=JSON.parse(Product);
    return res.status(200).json(finUs);
};
export const editProduct =async(req, res)=>{
    const {params,body}=req;
    const {id}=params;

    const nonParsefile=await readFile("Product.json");
    const File= JSON.parse(nonParsefile);

    const i=File.findIndex((i /*e*/)=>{
        return i.id==id;
});

    File[i]=body;

    await writeFile("Product.json",JSON.stringify(File));

    return res.status(200).json("user ediotor");
};
export const deletProduct =async(req, res)=>{
    const {params}=req;
    const {id}=params;

    const nonParsefile=await readFile("Product.json");
    const File= JSON.parse(nonParsefile);

    const i=File.findIndex((i /*e*/)=>{
        return i.id==id;
});

    File.splice(i,1);

    await writeFile("Product.json",JSON.stringify(File));

    return res.status(200).json("remove");
};