#ENS on private chain
https://docs.ens.domains/deploying-ens-on-a-private-chain

Develop and run on geth console is different:
1. For development
https://medium.com/the-ethereum-name-service/adding-ens-into-your-dapp-72eb6deac26b
Using network 'development'.

Running migration: 2_deploy_contracts.js
  Replacing ConvertLib...
  ... 0x7fb3ebb3c4971f445edf05a9c101643b8ba972b9551d954fb663fdafbaa3d6ff
  ConvertLib: 0xe9ef845ea68883d1db74a0eff148fe858c4a9870
  Linking ConvertLib to MetaCoin
  Replacing MetaCoin...
  ... 0xd4f90d3821062ad6ad5c3a793790c1efc7b91597842294ae33b833e6d4d25524
  MetaCoin: 0x522ea0c21d39e96285fcd9ede7b7aa8c17f4f26b
  Deploying ENSRegistry...
  ... 0x857960ddf74e8a29dbd9448c8928f2c246bd58da9f31f318178318047fbc1870
  ENSRegistry: 0xcfd1b552c18f84eabf691626496f5c4a57b1daf7
  Deploying PublicResolver...
  ... 0x923fb52953ac587752f8b3c008a75399d5717169b3d839936cd0e9fd4b122434
  PublicResolver: 0xb8e7336117be16da470546c132bfc51e9ee73a77
  Deploying ReverseRegistrar...
  ... 0x7f525269eb4e9f956028ea2d350dd5ddb458a780ebfe3ef8611db0e71e01f681
  ReverseRegistrar: 0x927591c853018bf74e2fa1a0c8bdd77deaae7130
setSubnodeOwner:0xcfd1b552c18f84eabf691626496f5c4a57b1daf7 allcom.test
  ... 0xd1129c1ce25baa2db0ca46df6e849edddca3435b11ff720a8345fe78f33b2e97
setSubnodeOwner:0xcfd1b552c18f84eabf691626496f5c4a57b1daf7 0xee95143def53f4b012f25d6f1609f969edbacb89
  ... 0x7e8585d166cee7fd6e1e83825747864e70c082434da5a538680cdb26f9340930
setSubnodeOwner:0x927591c853018bf74e2fa1a0c8bdd77deaae7130 0xee95143def53f4b012f25d6f1609f969edbacb89
  ... 0xa0ada1ae11330d848f467d950663885ab69cee5a2c55eec409595f3f912a5ad8
Saving successful migration to network...
  ... 0x95d2d20da5272f8d80030b854efe495447503641b2c58b167f5de6364c55263d
Saving artifacts...


2. Run on console of geth 

TESTED on rinkeby
> loadScript('ensutils-rinkeby.js')
 
> new Date(testRegistrar.expiryTimes(web3.sha3('allcomsh')).toNumber() * 1000)
<Date Thu, 01 Jan 1970 08:00:00 CST>

> testRegistrar.register(web3.sha3('allcomsh'), eth.accounts[0], {from: eth.accounts[0]})
"0x9b5326e395b879854d9387666367e4413d87fab845ca812b46f36dac0de5f4bf"

> ens.setResolver(namehash('allcomsh.test'), publicResolver.address, {from: eth.accounts[0]});
"0x38a0f104f16c8da8e64e2363f6f29385a91e5af99f411b38f62f4fe21f211a4d"

Once that transaction is mined (you can use etherscan to do so), tell the resolver to resolve that name to your account:
web3.eth.getTransactionReceipt('0x38a0f104f16c8da8e64e2363f6f29385a91e5af99f411b38f62f4fe21f211a4d')
It will return null for pending transactions and an object if the transaction is successful.
https://stackoverflow.com/questions/49886370/web3j-how-to-get-transaction-status

> publicResolver.setAddr(namehash('allcomsh.test'), eth.accounts[0], {from: eth.accounts[0]});
"0xba965a939b8d8a823dc546e9ddd7fedc210e20a078be2b4f15e2ae5e8b440b3b"

> getAddr('allcomsh.test')
"0xd1bf9ed8acde21ae748bd473962aceaffecc0d89"
Even though not get allcomsh.test on rinkeby.etherscan.io, getAddr return the right value on another node

SUBDOMAIN
> ens.setSubnodeOwner(namehash('allcomsh.test'), web3.sha3('foo'), eth.accounts[0], {from: eth.accounts[0]});
"0xedab360dfb3e8ce27269704009b2ef4775a4e672af93daf582d32f72c8d3a74b"

> ens.setResolver(namehash('foo.allcomsh.test'), publicResolver.address, {from: eth.accounts[0]});
"0xda997b104768bd41434b5ec4a148df36458d645d4fa4b95e1930024f6e973d70"

> publicResolver.setAddr(namehash('foo.allcomsh.test'), eth.accounts[1], {from: eth.accounts[0]});
"0xc3349dca1abe982052353553d04fc9167abcdce64a620339ee00896861d91f52"

> getAddr('foo.allcomsh.test')
"0xa654a516c909eef549c651b9f720bf48b8d99a32"

https://docs.ens.domains/en/latest/quickstart.html
