import express from 'express';
import http from 'http';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { environment } from './Environment/environment';
import { BuildQueryContainer } from './Infrastructure/DependancyInversion/Builder';
import DIContainer from './Infrastructure/DependancyInversion/Container';
import ApplyControllers from './Layers/1.Controllers/Index';
import Middleware from './Middleware/Index';
import { ApplyMiddleware, applyRoutes } from './Utilities';

const connection = createConnection({
    type: 'postgres',
    url: environment.url,
    entities: [
        'dist/Layers/5.Entities/**/*.js',
    ],
    migrations: [
        'dist/Infrastructure/Migrations/**/*.js',
    ],
    migrationsRun: true,
    synchronize: false,
// tslint:disable-next-line: no-shadowed-variable
}).then(async (connection) => {
    process.on('uncaughtException', (e) => {
        // tslint:disable-next-line: no-console
        console.log(e);
        process.exit(1);
    });

    process.on('unhandledRejection', (e) => {
        // tslint:disable-next-line: no-console
        console.log(e);
        process.exit(1);
    });

    const router = express();
    DIContainer.container.register('IRouter', {
        useValue: router,
    });

    ApplyMiddleware(Middleware, router);
    ApplyControllers(DIContainer.container, router);
    const { PORT = 5000 } = process.env;
    const server = http.createServer(router);

    server.listen(PORT, () =>
        // tslint:disable-next-line: no-console
        console.log(`Server is running on http://localhost:${PORT}...`),
    );
// tslint:disable-next-line: no-console
}).catch((error) => console.log(error));
