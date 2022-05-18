const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

app.get('/', (req, res) => {
  res.send('Mi primera pagina con express!')
})
app.post('/register', (req, res) => {
  let name = req.body.name;
  let lastName = req.body.lastName;
  let cedula = req.body.cedula;
  let email = req.body.email;
  let direccion = req.body.direccion;
  let password = req.body.password;
  res.send(`Registro exitoso sus datos son: \n ${name}   ${lastName}   ${cedula}    ${email}   ${direccion}    ${password}`);
})
app.post('/login', (req, res) => {
  let cedula = req.body.cedula;
  let password = req.body.password;
  res.send(`Su documento: ${cedula} y contraseña: ${password} son correctos `);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})