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
> admin.nodeInfo.enode
"enode://79576658aca4621e198d7ecaaef185fb6407135cde68f2cd036c6eb2703bd56c0ea4c39fa71746f6e8c86091b8d3d0f4ad133dbb28b714c2eca37fb144cc4bf5@[::]:30303?discport=0"
> 
#2 node
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

