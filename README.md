# Ethereum
All about ethereum regarding DAPP development
https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum
Windows:
 https://github.com/ethereum/go-ethereum/wiki/Installation-instructions-for-Windows
 go get -u -v golang.org/x/net/context
 # if failed, do this first:
 $mkdir -p $GOPATH/src/golang.org/x/
 $cd $GOPATH/src/golang.org/x/ 
 $git clone https://github.com/golang/net.git net 
 $go install net
https://www.cnblogs.com/weifeng1463/p/7488862.html

 go install -v ./cmd/...
 
# Books
https://github.com/ethereumbook/ethereumbook

# Download
 https://geth.ethereum.org/downloads/
 need genisys file devnet.json and static-nodes.json
1.  geth --datadir node1 init devnet.json
2.  geth --datadir node1 --syncmode full --port 30303 --rpc --rpcaddr "0.0.0.0" --rpcport 8545 --rpcapi "personal,db,eth,net,web3,txpool,miner" --bootnodes "enode://05eb5de394d1f88139f93df265b27c3267552be63bc85e5b0bab2ccf298b917d3bfd1db72ace7bf31a1b1317620b14f5d994255a48a022309a913ce344e333a7@47.252.16.104:30301" --networkid 1515 --gasprice 1  --lightserv 30 --rpccorsdomain "*" console

# get release version
git clone https://github.com/ethereum/go-ethereum.git go-ethereum-1.8

git branch -a

git checkout remotes/origin/release/1.8
