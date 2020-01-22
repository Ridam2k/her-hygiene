const express = require('express');
const app = express();
const port = 3000;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);
app.get('*', (req, res) => {
  res.sendFile(`insert-file-name-to-serve`, { root: www });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
