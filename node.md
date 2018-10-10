https://github.com/ethereum/go-ethereum/wiki/Running-in-Docker

1. install geth on docker
docker pull ethereum/client-go
2. check docker volume
docker volume ls
DRIVER              VOLUME NAME
local               1107605ae01eb64e54a709ef611e4cd193d4933b8c0265ada047b54e3d4e69e9
3. run geth
docker run -it -p 8545:8545 -p 30303:30303 -v 1107605ae01eb64e54a709ef611e4cd193d4933b8c0265ada047b54e3d4e69e9:/root/.ethereum ethereum/client-go --rpc --rpcaddr "0.0.0.0"  --rpccorsdomain "*" --testnet --shh
4. check geth container in docker
docker ps
CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                                                                   NAMES
386fba3d0935        ethereum/client-go   "geth --rpc --rpcadd…"   34 minutes ago      Up 34 minutes       0.0.0.0:8545->8545/tcp, 0.0.0.0:30303->30303/tcp, 8546/tcp, 30303/udp   cranky_villani
5. go to geth console
5.1 docker exec -it cranky_villani  geth attach ipc:/root/.ethereum/testnet/geth.ipc
or
5.2 docker exec -it 386fba3d0935  geth attach ipc:/root/.ethereum/testnet/geth.ipc
WARN [08-25|03:49:28.177] Sanitizing cache to Go's GC limits       provided=1024 updated=660
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.15-unstable-70398d30/linux-amd64/go1.10.3
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 shh:1.0 txpool:1.0 web3:1.0

>
6. create account
>personal.newAccount('password')
>eth.accounts

Test create account and get funded on testnet
1. list files
docker run -it --rm -v 1107605ae01eb64e54a709ef611e4cd193d4933b8c0265ada047b54e3d4e69e9:/vol busybox ls -l /vol/testnet/keystore
total 4
-rw-------    1 root     root           491 Aug 25 04:18 UTC--2018-08-25T04-18-15.222228100Z--eb4e3633868d5b652f502f12795f6954b2f37db3

2. copy files or directory
docker cp practical_brown:/root/.ethereum/testnet/keystore .

3. Then you can install metamask plugin for firefox or chrome and import the account into metamask tthrough JSON and password

4. get eth through faucet, deposit interface in metamask
5. check
> eth.getBalance(eth.accounts[0])
0
> eth.syncing
{
  currentBlock: 1632562,
  highestBlock: 3904859,
  knownStates: 2023180,
  pulledStates: 2017758,
  startingBlock: 470011
}
still sync, forgot to run geth in light mode
