const express = require('express');
const zod = require('zod');

const app = express();

function validateInput(userName, password){
  const schema1 = zod.string().email();
  const schema2 = zod.string().min(6);

  const response1 = schema1.safeParse(userName);
  const response2 = schema2.safeParse(password);

  console.log(response1);
  console.log(response2);

  return (response1.success && response2.success)
}

app.get('/', (req, res) => {
  //var a = req.headers.user_id;
  //console.log(a);
  res.send("Hello");
})

app.post('/', (req, res) => {
  const username = req.headers.user;
  const password = req.headers.password;

  const response = validateInput(username, password);
  console.log(response);
  res.send("Post");
})

app.listen(3000, () => {
  console.log("running on 3000");
})