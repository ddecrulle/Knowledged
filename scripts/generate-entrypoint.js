/* eslint-disable */
import { promises as fs } from 'fs';

fs.readFile('.env', 'utf8')
  .then((contents) => {
    const content = contents
      .split('\n')
      .filter((line) => !line.startsWith('#'))
      .map((line) => line.split('='))
      .filter((data) => data.length === 2)
      .map(
        ([key]) =>
          `echo "window._env_['${key.replace(
            'REACT_APP_',
            ''
          )}'] = '\$${key.replace(
            'REACT_APP_',
            ''
          )}';" >> /usr/share/nginx/html/env-config.js`
      );

    const fullFile = ['#!/bin/sh', ...content, 'exec "$@"'].join('\n');
    return fs.writeFile('entrypoint.sh', fullFile, 'utf8');
  })
  .catch((error) => console.error('Error:', error));
