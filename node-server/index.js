const express = require('express');
const { exec } = require('child_process');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const { japanese_text } = req.body;

  exec(`ichiran-cli -f "${japanese_text}"`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    res.send(stdout);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
