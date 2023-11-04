import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';

import { Home } from './home';

const server = express()
const port = 3000

server.use('/', (req, res) => {
  res.send(renderToString(<Home />))
})

server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})