const getAllUsers = (req, res) => {
  res.send('enviando dados');
}

const createUser = (req, res) => {
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
    createUser,
    updateUser,
    deleteUser
}