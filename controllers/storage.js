const { matchedData } = require('express-validator');
const fs = require('fs')
const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH  = `${__dirname}/../storage`;
const handleHttpError = require('../utils/handleError')


//Obtener lista de base de datos

const getItems =  async (req,res) =>{
     
   try {

      const data = await storageModel.find()
     res.send(data)
      
   } catch (error) {

      handleHttpError(res, "ERROR_GET_ITEMS")
      
   }


}

 
 


//Obtener un detalle

const getItem = async (req,res) =>{

   try {

      const {id} = matchedData(req)

      const data = await storageModel.findById(id)
     res.send(data)
      
   } catch (error) {

      handleHttpError(res, "ERROR_GET_ITEM")
      
   }

}
 

//Insertar un registro

const createItem = async (req,res) =>{


   try {

   const {body, file} = req;   
   const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`


   }
  const data =  await storageModel.create(fileData)
   res.send({data})


      
   } catch (error) {

      handleHttpError(res, "ERROR_CREATE_ITEM")
      
   }

}


//Actualizar un registro

const updateItem = async (req,res) =>{

}


//Eliminar un registro

const deleteItem = async (req,res) =>{

   try {

      const {id} = matchedData(req)

      const data = await storageModel.findById(id)
      await storageModel.deleteOne({_id:id})
      const {filename} = data;
      const filePath = `${MEDIA_PATH}/${filename}`
      fs.unlinkSync(filePath)

      const response = {
         filePath,
         delteted:1
      }

     res.send({response})
      
   } catch (error) {

      handleHttpError(res, "ERROR_DELETE_ITEM")
      
   }

}









module.exports = {getItems, getItem, createItem, updateItem, deleteItem}