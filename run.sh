#!/usr/bin/env bash

cd apollo-bookstore-server

dpkg -s $1 yarn

if [ $? -eq 0 ]; then
  yarn install
  yarn dev &
else
    echo "Yarn  is NOT installed!"
fi

cd ../client
  npm install
  npm start 
