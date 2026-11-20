app.get('/', (req, res) => {
  res.send('enviando dados');
});
app.get('/outro', (req, res) => {
  res.json({status: "success"});
});
app.post('/', (req, res) => {
  res.send('criando dados');
});
app.put('/', (req, res) => {
  res.send('atualizando dados');
});
app.delete('/', (req, res) => {
  res.send('apagando dados');
});