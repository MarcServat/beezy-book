#!/usr/bin/env bash

cd apollo-bookstore-server
npm i
yarn dev &

cd ../client
npm i
npm start
