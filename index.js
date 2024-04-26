import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import useragent from 'express-useragent';

import router from './routes/index';
import baseRoute from './base_routes/index.js';
import logger from './utils/logger.js';

// import typeDefs from './graph/schemas/greeting.schema.js';
import resolvers from './graph/resolvers/greetings.resolver.js';

import { readFile } from 'node:fs/promises';
// const typeDefs = await readFile('./graph/schemas/*.graphql', 'utf8');
const typeDefs = await readFile('./graph/schemas/greetings.graphql', 'utf8');

dotenv.config();
const graphPort = Number(process.env.PORT) || 9000;
const port = Number(process.env.RESTPORT) || 8000;

console.log({ graphPort, port })


const startApolloServer = async() => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, { listen: { port: graphPort } });
  logger.info(`Starting Apollo Server on port ${graphPort}!`);
}

const startApolloServer2 = async() => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start().catch((err) => {
      logger.error(`Error starting Apollo Server: ${err} !`);
  });
  logger.info(`Starting Apollo Server on port ${port}/graphql !`);
  return server
}

const startServer = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  
    app.use(cors());
    
    app.use(useragent.express());
    
    const apolloServer = await startApolloServer2()
    app.use('/graphql', apolloMiddleware(apolloServer));
    
    app.use(helmet());
    app.use('/api', router);
    app.use('/', baseRoute);

  
    app.use((req, res, _next) => {
      res.status(404).send({
        status: false,
        error: 'resource not found',
      });
    });
  
    // handle unexpected errors
    app.use((err, req, res, _next) => {
      res.status(err.status || 500).send({
        success: false,
        error: 'Internal server error.',
        data: err,
      });
    });
  
    app.listen(port, async () => {
      logger.info(`REST is listening on port ${port} !`);
    //   Settings.init();
    });
  }


// startApolloServer().catch((err) => {
//     logger.error(`Error starting Apollo Server: ${err} !`);
// });
await startServer().catch((err) => {
    logger.error(`Error starting Express Server: ${err} !`);
});