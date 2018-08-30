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
1.1 Initial 
[liwei@osdnode173 ethereum]$ geth --identity 'allcomsh' init CustomGenesis.json  --datadir .acpriviatechain
INFO [08-30|19:40:52.127] Maximum peer count                       ETH=25 LES=0 total=25
INFO [08-30|19:40:52.129] Allocated cache and file handles         database=/data/ethereum/.acpriviatechain/geth/chaindata cache=16 handles=16
INFO [08-30|19:40:52.939] Writing custom genesis block 
INFO [08-30|19:40:52.944] Persisted trie from memory database      nodes=0 size=0.00B time=27.307µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [08-30|19:40:52.944] Successfully wrote genesis state         database=chaindata                                      hash=d1a12d…4c8725
INFO [08-30|19:40:52.944] Allocated cache and file handles         database=/data/ethereum/.acpriviatechain/geth/lightchaindata cache=16 handles=16
INFO [08-30|19:40:53.039] Writing custom genesis block 
INFO [08-30|19:40:53.039] Persisted trie from memory database      nodes=0 size=0.00B time=6.146µs  gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [08-30|19:40:53.039] Successfully wrote genesis state         database=lightchaindata                                      hash=d1a12d…4c8725
[liwei@osdnode173 ethereum]$ ls .acpriviatechain/
geth  keystore

1.2. Run
geth --datadir .acpriviatechain --networkid 9876 --nodiscover --rpcapi db,eth,net,web3,miner,shh --rpc --rpccorsdomain * --mine --shh

geth attach .acpriviatechain/geth.ipc
> admin.nodeInfo.enode
"enode://79576658aca4621e198d7ecaaef185fb6407135cde68f2cd036c6eb2703bd56c0ea4c39fa71746f6e8c86091b8d3d0f4ad133dbb28b714c2eca37fb144cc4bf5@[::]:30303?discport=0"
> 

#2 node
2.1 Initial 

[liwei@localhost ethereum]$ geth --datadir .peer2DataDir init CustomGenesis.json 
INFO [08-30|20:47:45.369] Maximum peer count                       ETH=25 LES=0 total=25
INFO [08-30|20:47:45.385] Allocated cache and file handles         database=/data/ethereum/.peer2DataDir/geth/chaindata cache=16 handles=16
INFO [08-30|20:47:45.501] Writing custom genesis block 
INFO [08-30|20:47:45.501] Persisted trie from memory database      nodes=0 size=0.00B time=30.765µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [08-30|20:47:45.502] Successfully wrote genesis state         database=chaindata                                   hash=d1a12d…4c8725
INFO [08-30|20:47:45.502] Allocated cache and file handles         database=/data/ethereum/.peer2DataDir/geth/lightchaindata cache=16 handles=16
INFO [08-30|20:47:45.619] Writing custom genesis block 
INFO [08-30|20:47:45.619] Persisted trie from memory database      nodes=0 size=0.00B time=5.86µs   gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [08-30|20:47:45.619] Successfully wrote genesis state         database=lightchaindata                                   hash=d1a12d…4c8725

2.2 Run

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

