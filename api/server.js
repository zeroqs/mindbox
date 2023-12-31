import jsonServer from 'json-server'

export const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id',
  }),
)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

// Export the Server API
