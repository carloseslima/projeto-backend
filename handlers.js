import { readData,  writeData } from "./handleData.js";

const getAllUsers = (req, res) => {
  res.send('enviando dados');
}

const getOneUser = (req, res) => {
  res.json({status: "success"});
}

const createUser = (req, res) => {
  const data = req.body
  readData()
  writeData(data)
  res.send('criando dados');
}

const updateUser = (req, res) => {
  res.send('atualizando dados');
}

const deleteUser = (req, res) => {
  res.send('apagando dados');
}

export {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}