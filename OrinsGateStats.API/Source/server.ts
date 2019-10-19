﻿import http from 'http';
import express from 'express';
import 'reflect-metadata';
import controllerContainer from './Infrastructure/DependancyInversion/Container'
import { createConnection } from 'typeorm';
import { ApplyMiddleware, applyRoutes } from './Utilities';
import Middleware from './Middleware';
import ErrorHandlers  from './Middleware/ErrorHandlers';
import ApplyControllers from './Layers/1.Controllers';


const router = express();
controllerContainer.container.register('IRouter', {
    useValue: router
});

ApplyMiddleware(Middleware, router);
ApplyControllers(controllerContainer.container, router);
const { PORT = 5000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}...`)
);


// createConnection().then(async (connection) => {
//     process.on('uncaughtException', e => {
//         console.log(e);
//         process.exit(1);
//     });

//     process.on('unhandledRejection', e => {
//         console.log(e);
//         process.exit(1);
//     });

//     const router = express();
//     applyMiddleware(middleware, router);
//     applyRoutes(routes, router);
//     applyMiddleware(errorHandlers, router);

//     const { PORT = 5000 } = process.env;
//     const server = http.createServer(router);

//     server.listen(PORT, () =>
//         console.log(`Server is running on http://localhost:${PORT}...`)
//     );
// }).catch((error) => console.log(error));
