import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import useragent from 'express-useragent';

import router from './routes/index.js';
import logger from './utils/logger.js';

import typeDefs from './graph/schemas/greeting.schema.js';
// import resolvers from './graph/resolvers/greetings.resolver';

// const typeDefs = `#graphql
// schema {
//     query: Query
// }

// type Query {
//         greeting: String
//     }
// `;

const resolvers = {
    Query: {
        greeting: () => 'Yo World!',
    },
};

dotenv.config();
const graphPort = Number(process.env.PORT) || 9000;
const port = Number(process.env.RESTPORT) || 9000;


const startApolloServer = async() => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, { listen: { port: graphPort } });
    logger.info(`Starting Apollo Server on port ${port} !`);
}

const startServer = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  
    app.use(cors());
    app.use(helmet());
  
    app.use(useragent.express());
  
  
    app.use('/api', router);
  
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


startApolloServer().catch((err) => {
    logger.eroor(`Error starting Apollo Server: ${err} !`);
});
startServer().catch((err) => {
    logger.eroor(`Error starting Express Server: ${err} !`);
});

