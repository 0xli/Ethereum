https://medium.com/mercuryprotocol/how-to-create-your-own-private-ethereum-blockchain-dad6af82fc9f
https://hackernoon.com/heres-how-i-built-a-private-blockchain-network-and-you-can-too-62ca7db556c0

{
    "config": {  
        "chainId": 987, 
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
    "difficulty": "0x400",
    "gasLimit": "0x8000000",  
    "alloc": {}
}

#1 
geth — identity “yourIdentity” — init /path_to_folder/CustomGenesis.json — datadir /path_to_your_data_directory/YOUR_FOLDER
#2
geth --datadir /path_to_your_data_directory/ACPrivateChain --networkid YOUR_NETWORK_ID

geth attach .acpriviatechain/geth.ipc
> miner.setEtherbase(eth.accounts[0])
> web3.fromWei(eth.getBalance(eth.accounts[0]))
2915

#1 node
geth --datadir .acpriviatechain --networkid 9876 --nodiscover --rpcapi db,eth,net,web3,miner,shh --rpc --rpccorsdomain * --mine --shh
geth attach .acpriviatechain/geth.ipc
> admin.nodeInfo.enode
"enode://79576658aca4621e198d7ecaaef185fb6407135cde68f2cd036c6eb2703bd56c0ea4c39fa71746f6e8c86091b8d3d0f4ad133dbb28b714c2eca37fb144cc4bf5@[::]:30303?discport=0"
> 
#2 node
geth --datadir .peer2DataDir --networkid 9876 --port 30304 --shh
> admin.addPeer('enode://79576658aca4621e198d7ecaaef185fb6407135cde68f2cd036c6eb2703bd56c0ea4c39fa71746f6e8c86091b8d3d0f4ad133dbb28b714c2eca37fb144cc4bf5@192.168.0.173:30303?discport=0')
the “[::]” is replaced with “192.168.0.173” which is the IP:Port of the 1st peer.
> admin.peers
[{
    caps: ["eth/63"],
    id: "79576658aca4621e198d7ecaaef185fb6407135cde68f2cd036c6eb2703bd56c0ea4c39fa71746f6e8c86091b8d3d0f4ad133dbb28b714c2eca37fb144cc4bf5",
    name: "Geth/v1.8.14-unstable/linux-amd64/go1.9.4",
    network: {
      inbound: false,
      localAddress: "192.168.0.178:40464",
      remoteAddress: "192.168.0.173:30303",
      static: true,
      trusted: false
    },
    protocols: {
      eth: {
        difficulty: 105862111,
        head: "0x0fe6cd67ea993753c5b1bd1b7b2a87c061b39bcde9dd65d6df54d0213b8b2aa3",
        version: 63
      }
    }
}]

#1 node
[liwei@osdnode173 ~]$ ps -ef | grep geth
liwei    12324 23198  0 21:07 pts/5    00:00:08 geth --datadir .acpriviatechain --networkid 9876 --nodiscover --rpcapi db,eth,net,web3,miner,shh --rpc --rpccorsdomain * --mine --shh
liwei    12334  6322  0 21:07 pts/4    00:00:11 geth attach .acpriviatechain/geth.ipc
#2 node
[liwei@localhost ethereum]$ ps -ef | grep geth
liwei    22474 22411  0 15:15 pts/2    00:00:08 geth attach /data/ethereum/.ethereum/geth.ipc
liwei    22747 22746 36 15:35 pts/0    02:17:13 go-ethereum/build/bin/geth --rinkeby --syncmode fast --rpc --rpcapi db,eth,net,web3,personal --cache=1024 --rpcport 8545 --rpcaddr 0.0.0.0 --rpccorsdomain * --datadir /data/ethereum/.rinkeby --shh --mine
liwei    22786 19733  0 15:37 pts/1    00:00:06 geth attach .rinkeby/geth.ipc
liwei    25991 25583  1 21:11 pts/3    00:00:31 geth --datadir .peer2DataDir --networkid 9876 --port 30304 --shh

