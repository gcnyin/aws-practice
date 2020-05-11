#!/usr/bin/env bash
set -eu

docker run -d -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=password -e POSTGRES_DB=todo postgres:10.11-alpine
