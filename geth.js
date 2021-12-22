//This file has commands to be used on the geth JavaScript console

//Full documentation on the Javascript/JSON RPC methods can be found here
//https://geth.ethereum.org/docs/rpc/server

//list functions in admin module:
admin;

//check existing accounts
eth.accounts

//Create new account. Will prompt for passphrase after running this
personal.newAccount();

//check sync status
eth.syncing;

//set coinbase address for mining
miner.setEtherbase(eth.accounts[0]);

//start mining with 1 thread
miner.start(1);

//get account balance using web3
web3.eth.getBalance(eth.accounts[0])

//get account balance using eth
eth.getBalance(eth.accounts[0])

//get account balance in ether using web 3
web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")