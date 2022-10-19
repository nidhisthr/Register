const http = require('http');
const fs = require('fs');
const readline = require('minimist');

const args = require('minimist')(process.argv.slice(2));
let port = args.port;

let homeConstent = "";
let projectConstent = "";
let registrationContent = "";
let styleConstent = "";
let scriptConstent = "";

fs.readFile('home.html', (err, home) => {
  if (err) {
    throw err
  }
  homeConstent = home;
});
fs.readFile('project.html', (err, project) => {
  if (err) {
    throw err
  }
  projectConstent = project;
});
fs.readFile('registration.html', (err, registration) => {
  if (err) {
    throw err
  }
  registrationContent = registration;
});
fs.readFile('script.js', (err, script) => {
  if (err) {
    throw err
  }
  scriptConstent = script;
})
fs.readFile('style.css', (err, style) => {
  if (err) {
    throw err
  }
  styleConstent = style;
});
// fs.readFile('home.html', (err, home) => {
//   if (err) {
//     throw err
//   }
// });
const Server = http.createServer((req, res) => {
  let url = req.url;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  switch (url) {
    case '/project':
      res.write(projectConstent)
      res.end()
      break
    case '/registration':
      res.write(registrationContent)
      res.end()
      break
    case '/style.css':
      res.writeHead(200,{ 'Content-Text': 'text/css' })
      res.write(styleConstent)
      res.end()
      break
    case '/script.js':
      res.writeHead(200, { 'Content-Text': 'text/javascript' })
      res.write(scriptConstent)
      res.end()
      break
    default:
      res.write(homeConstent)
      res.end()
      break
  }
});
Server.listen(port, "127.0.0.1", () => {
  console.log(`listening at port ${port}`);
});