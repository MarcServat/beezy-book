#!/usr/bin/env bash

cd apollo-bookstore-server
yarn install
yarn dev &

cd ../client
npm i
npm start
