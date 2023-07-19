const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.post('/', (req, res) => {
    const jsonObj=req.body
    res.send(jsonObj);
  });
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
