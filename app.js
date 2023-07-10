const express =  require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.get('/.well-know/pki-validation/0C583F7B328B7F4A39F7518BF379F4EB.txt', (req, res)=>{
    res.sendFile('/home/ubuntu/appOBT-backend/0C583F7B328B7F4A39F7518BF379F4EB.txt')
})

app.listen(port, ()=> console.log(`Listening on port: ${port}`))