/**
 * Server-side rendering configuration for Angular application.
 * This file sets up an Express server to handle server-side rendering
 * and static file serving for the Angular application.
 */
import {APP_BASE_HREF} from '@angular/common';
import express, {NextFunction, Request, Response} from 'express';
import {fileURLToPath} from 'node:url';
import {dirname, join, resolve} from 'node:path';
import bootstrap from './src/main.server';

/**
 * Creates and configures an Express application for serving the Angular app.
 *
 * @returns {express.Express} Configured Express application
 */
export function createExpressApp(): express.Express {
  const expressApp = express();

  // Determine file paths for server-side rendering
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtmlPath = join(serverDistFolder, 'index.server.html');

  // Configure Express view engine
  expressApp.set('view engine', 'html');
  expressApp.set('views', browserDistFolder);

  // Serve static files with caching
  expressApp.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y' // Cache static assets for 1 year
  }));

  // Handle all other routes with Angular's universal rendering
  expressApp.get('*', (req: Request, res: Response, next: NextFunction) => {
    const { baseUrl } = req;

    // Bootstrap the Angular application
    bootstrap()
      .then(() => {
        // Render the application using the server-side template
        res.render(indexHtmlPath, {
          req,
          providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }]
        });
      })
      .catch((error: Error) => {
        console.error('Server-side rendering failed:', error);
        next(error);
      });
  });

  return expressApp;
}

/**
 * Starts the Express server on the specified port.
 * Uses environment variable SSR_PORT if available, otherwise defaults to 4000.
 */
function startServer(): void {
  const port = process.env['SSR_PORT'] || 4000;
  const expressApp = createExpressApp();

  expressApp.listen(port, () => {
    console.log(`Server-side rendering server listening on http://localhost:${port}`);
  });
}

// Initialize the server when this file is executed
startServer();
