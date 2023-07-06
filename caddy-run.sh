#!/usr/bin/env bash

caddy run --config CaddyfileAdvertiser &
advertiserProcessId=$!

exec caddy run --config CaddyfilePublisher &
publisherProcessId=$!

exec caddy run --config CaddyfileDsp &
dspProcessId=$!

exec caddy run --config CaddyfileSsp &
sspProcessId=$!

trap "kill ${advertiserProcessId} ${publisherProcessId} ${dspProcessId} ${sspProcessId}" EXIT

while true
do
  sleep 1;
done
