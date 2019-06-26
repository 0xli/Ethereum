https://github.com/ethereum/wiki/wiki/Whisper

https://ethereum.stackexchange.com/questions/24338/looking-for-a-working-whisper-example
https://ethereum.stackexchange.com/questions/51604/whisper-protocol-how-to-decode-the-received-message-on-the-receiver-node/51605#51605

1. create new keypair 
var kId=web3.shh.newKeyPair();
2. create message filter with callback to received message
web3.shh.newMessageFilter({privateKeyID:kId},function(err,res){console.log('notified:'+web3.toUtf8(res.payload))});
* res.payload stores the sender's sent message. We need to convert type of res.payload: from ascii into Utf8.
3. get public key for sender use to send message to
var kIdPub = web3.shh.getPublicKey(kId)
4. send message
web3.shh.post({pubKey:kIdPub,ttl:7,topic:'0x07678231',powTarget:2.01,powTime:2,payload:web3.fromAscii("Hello there!There")})

#mailserver
https://github.com/orbitdb/orbit-db
https://medium.com/originprotocol/introducing-origin-messaging-decentralized-secure-and-auditable-13c16fe0f13e
https://discuss.status.im/t/rethinking-mail-servers/390
