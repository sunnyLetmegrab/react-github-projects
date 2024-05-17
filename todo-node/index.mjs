import http from 'http'
import app from './src/app.mjs'
var server = http.createServer(app)

server.listen(9090, () => {
    console.log("server running on port 9090");
})