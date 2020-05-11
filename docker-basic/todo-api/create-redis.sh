#!/usr/bin/env bash
set -eu

docker run -d -p 6379:6379 redis:5.0.9-alpine
