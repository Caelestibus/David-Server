import http from 'http';

const server = http.createServer((request, response) => {
  console.log('headers', request.headers)
  console.log('method', request.method)
  console.log('url', request.url)
 const user = {
  name: 'Daniela',
  hobby: 'Dancing',
  location: 'Canada'
 }


  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(user));
});

server.listen(3000);