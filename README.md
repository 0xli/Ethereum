# Ethereum
## All about ethereum regarding DAPP development
Building Full Stack dApps with React, Ethers.js, Solidity, and Hardhat, Alchemy, MetaMask, and TailwindCSS, Openzeppelin
-  https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13
-  https://steadylearner.medium.com/how-to-make-a-fullstack-dapp-with-react-hardhat-and-ethers-js-with-examples-a961979273d9
Fullstack NFT Minting Dapp Using Next.js, Hardhat, Ethers.js, Alchemy, MetaMask, and TailwindCSS
-  https://javascript.plainenglish.io/fullstack-nft-minting-dapp-using-next-js-hardhat-ethers-js-alchemy-metamask-and-tailwindcss-145e0ef41d26
### Solidity
-  https://openzeppelin.com/contracts/
-  
## Ethereum node
- https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum

#Centos
https://golang.org/dl/
modify ~/.bash_profile add go/bin to PATH

#Windows:
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
https://gethstore.blob.core.windows.net/builds/geth-alltools-linux-amd64-1.8.27-4bcc0a37.tar.gz

Other versions:

https://geth.ethereum.org/downloads/
 
need genisys file devnet.json and static-nodes.json
1.  geth --datadir node1 init devnet.json
2.  geth --datadir node1 --syncmode full --port 30303 --rpc --rpcaddr "0.0.0.0" --rpcport 8545 --rpcapi "personal,db,eth,net,web3,txpool,miner" --bootnodes "enode://11e1d914c7d4b09f5cbf6ff238ee9fede90fc8cb60484856848421971203b58484023b44771161dc229447b398fbaf4b122611d282bda54555c3089cb3c294b6@118.190.79.30:30307" --networkid 1515 --gasprice 1  --lightserv 30 --rpccorsdomain "*" console

geth在KVM的centos虚拟机中运行时导致宿主机和虚拟机的CPU占用高

# kill geth gracefully 
 kill -INT {PID}
 ```
 caught interrupt, exiting
INFO [01-06|22:11:27.682] Got interrupt, shutting down... 
INFO [01-06|22:11:27.683] HTTP endpoint closed                     url=http://0.0.0.0:8545
INFO [01-06|22:11:27.683] IPC endpoint closed                      url=/data/ethereum/geth-alltools-linux-amd64-1.8.27-4bcc0a37/imchain/node1/geth.ipc
INFO [01-06|22:11:27.684] Writing cached state to disk             block=1547610 hash=d10168…474d94 root=63ed89…8dbd05
INFO [01-06|22:11:27.684] Persisted trie from memory database      nodes=0 size=0.00B time=39.452µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [01-06|22:11:27.684] Writing cached state to disk             block=1547609 hash=70faf2…8a2089 root=f83dc7…1ff182
INFO [01-06|22:11:27.684] Persisted trie from memory database      nodes=0 size=0.00B time=7.401µs  gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [01-06|22:11:27.684] Writing cached state to disk             block=1547483 hash=c6faed…d74519 root=eae600…9fae57
INFO [01-06|22:11:27.684] Persisted trie from memory database      nodes=0 size=0.00B time=7.89µs   gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [01-06|22:11:27.684] Blockchain manager stopped 
INFO [01-06|22:11:27.684] Stopping Ethereum protocol 
INFO [01-06|22:11:27.685] Ethereum protocol stopped 
INFO [01-06|22:11:27.685] message loop                             peer=fe67350008532507 err=EOF
INFO [01-06|22:11:27.685] Transaction pool stopped 
INFO [01-06|22:11:27.685] Database closed                          database=/data/ethereum/geth-alltools-linux-amd64-1.8.27-4bcc0a37/imchain/node1/geth/chaindata
INFO [01-06|22:11:27.685] whisper stopped 
 ```
 ```
 INFO [01-07|11:11:27.711] message loop                             peer=058e620b40ff688c err=EOF
INFO [01-07|11:17:15.122] Got interrupt, shutting down... 
INFO [01-07|11:17:15.122] HTTP endpoint closed                     url=http://127.0.0.1:8545
INFO [01-07|11:17:15.127] IPC endpoint closed                      url=/mnt/nfs/blockchain/geth-alltools-linux-amd64-1.8.27-4bcc0a37/imchain/node1/geth.ipc
INFO [01-07|11:17:15.127] Writing cached state to disk             block=1547610 hash=d10168…474d94 root=63ed89…8dbd05
INFO [01-07|11:17:15.168] Persisted trie from memory database      nodes=4925 size=701.47kB time=40.780941ms gcnodes=24851 gcsize=6.99mB gctime=95.482005ms livenodes=2375 livesize=736.04kB
INFO [01-07|11:17:15.168] Writing cached state to disk             block=1547609 hash=70faf2…8a2089 root=f83dc7…1ff182
INFO [01-07|11:17:15.168] Persisted trie from memory database      nodes=27   size=8.10kB   time=356.433µs   gcnodes=0     gcsize=0.00B  gctime=0s          livenodes=2348 livesize=727.94kB
INFO [01-07|11:17:15.168] Writing cached state to disk             block=1547483 hash=c6faed…d74519 root=eae600…9fae57
INFO [01-07|11:17:15.173] Persisted trie from memory database      nodes=440  size=92.24kB  time=4.476001ms  gcnodes=0     gcsize=0.00B  gctime=0s          livenodes=1908 livesize=635.70kB
INFO [01-07|11:17:15.178] Blockchain manager stopped 
INFO [01-07|11:17:15.178] Stopping Ethereum protocol 
INFO [01-07|11:17:15.179] message loop                             peer=419142e2b27b29bb err=EOF
INFO [01-07|11:17:15.179] Ethereum protocol stopped 
INFO [01-07|11:17:15.181] Transaction pool stopped 
INFO [01-07|11:17:15.596] Database closed                          database=/mnt/nfs/blockchain/geth-alltools-linux-amd64-1.8.27-4bcc0a37/imchain/node1/geth/chaindata
INFO [01-07|11:17:15.596] whisper stopped 
INFO [01-07|11:17:15.597] message loop                             peer=854f8a6e3e552cd6 err=EOF
INFO [01-07|11:17:15.597] message loop                             peer=3d973ac3cde5ad5d err=EOF
 ```
# get release version
git clone https://github.com/ethereum/go-ethereum.git go-ethereum-1.8

git branch -a

git checkout remotes/origin/release/1.8
