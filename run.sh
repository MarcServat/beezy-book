#!/usr/bin/env bash

cd apollo-bookstore-server
npm i
{
    yarn dev &
} || {
    exit 0
}

cd ../client
npm i
{
    npm start
} || {
    exit 1
}
