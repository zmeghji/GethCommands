# Start Geth Server
geth

#Initialize private chain
geth init .\genesis.json --datadir mychaindata

#start geth without discovery
geth --datadir .\mychaindata\ --nodiscover

#Start Geth Client (Windows)
geth attach ipc://./pipe/geth.ipc

