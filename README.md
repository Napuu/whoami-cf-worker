# whoami-cf-worker

### Get current ip
```
curl --silent https://whoami-cf-worker.pages.dev/|jq .headers['"x-real-ip"']
```

### Cloudflare stuff
get zones: `curl -H "Authorization: Bearer $TOKEN" "https://api.cloudflare.com/client/v4/zones"`  
get records `curl -H "Authorization: Bearer $TOKEN" "https://api.cloudflare.com/client/v4/zones/$ZONE/dns_records"`  
update specific record `curl -X PUT -H "Authorization: Bearer $TOKEN" "https://api.cloudflare.com/client/v4/zones/$ZONE/dns_records/$RECORD" --json "{\"name\": \"$NAME\", \"type\": \"A\", \"content\": $IP, \"ttl\": 1, \"proxied\": true}"`


### Poor mans dynamic dns

Put this to crontab or something. Make sure `TOKEN`, `ZONE`, `RECORD`and `NAME` are set. Record with `$NAME` now points to ip of this client.
```
IP=$(curl --silent https://whoami-cf-worker.pages.dev/|jq .headers['"x-real-ip"']); curl -X PUT -H "Authorization: Bearer $TOKEN" "https://api.cloudflare.com/client/v4/zones/$ZONE/dns_records/$RECORD" --json "{\"name\": \"$NAME\", \"type\": \"A\", \"content\": $IP, \"ttl\": 1, \"proxied\": true}"
```
