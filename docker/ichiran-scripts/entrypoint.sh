#!/bin/bash

echo "Checking postgres server status..."
while : ; do
    pg_isready -h pg > /dev/null && break;
    sleep 1;
done

echo "Postgres is ready, starting main container init."
init-all;

echo "Starting Node.js server..."
node /app/index.js & # Start the Node.js server in the background

echo "All set, awaiting commands."
sleep infinity;
