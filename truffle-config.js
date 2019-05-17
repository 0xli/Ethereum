module.exports = {
  rpc:{
	host:'localhost',
	port:8545,
        network_id:'1515'
  },
  networks: {
    'allcom': {
      host: "localhost",
      port: 8501,
      network_id: "*" // Match any network id
    },
    'dev.fifs': {
      host: "localhost",
      port: 8501,
      network_id: "*" // Match any network id
    },
    'dev.auction': {
      host: "localhost",
      port: 8501,
      network_id: "*" // Match any network id
    }
  }
};
