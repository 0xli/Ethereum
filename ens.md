TESTED on rinkeby
> loadScript('ensutils-rinkeby.js')
 
> new Date(testRegistrar.expiryTimes(web3.sha3('allcomsh')).toNumber() * 1000)
<Date Thu, 01 Jan 1970 08:00:00 CST>

> testRegistrar.register(web3.sha3('allcomsh'), eth.accounts[0], {from: eth.accounts[0]})
"0x9b5326e395b879854d9387666367e4413d87fab845ca812b46f36dac0de5f4bf"

> ens.setResolver(namehash('allcomsh.test'), publicResolver.address, {from: eth.accounts[0]});
"0x38a0f104f16c8da8e64e2363f6f29385a91e5af99f411b38f62f4fe21f211a4d"

Once that transaction is mined (you can use etherscan to do so), tell the resolver to resolve that name to your account:

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
