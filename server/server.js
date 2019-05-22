const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, dir: '.'})
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    //maping url
    server.get('/project/:id', (req, res) => {
      const actualPage = '/project'
      const queryParams = {id: req.params.id, title: req.params.id}
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/test/:id', (req, res) => {
      const actualPage = '/mytest'
      const queryParams = {title: req.params.id}
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error('Server Error', ex.stack)
    process.exit(1)
  })
