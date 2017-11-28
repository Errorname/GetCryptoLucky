var SATOSHI_CONST = 100000000;
var coins = {
	'BTC': {
		name: 'Bitcoin',
		code: 'BTC',
		symbol: '฿',
		api: {
			url: 'https://blockchain.info/q/addressbalance/{address}',
			callback: function(data) {
				return data/SATOSHI_CONST;
			}
		}
	},
	'DOGE': {
		name: 'Dogecoin',
		code: 'DOGE',
		symbol: 'Ð',
		api: {
			url: 'https://dogechain.info/api/v1/address/balance/{address}',
			callback: function(data) {
				return parseFloat(data.balance);
			}
		}
	},
	'MONA': {
		name: 'MonaCoin',
		code: 'MONA',
		symbol: 'M',
		api: {
			url: 'https://mona.chainsight.info/api/addr/{address}?noTxList=1',
			callback: function(data){
				return parseFloat(data.balance);
			}
		}
	},
	'LTC': {
		name: 'Litecoin',
		code: 'LTC',
		symbol: 'Ł',
		api: {
			url: 'https://api.blockcypher.com/v1/ltc/main/addrs/{address}',
			callback: function(data) {
				return data.balance/SATOSHI_CONST;
			}
		}
	},
	'DASH': {
		name: 'Dash',
		code: 'DASH',
		symbol: 'D',
		api: {
			url: 'https://explorer.dash.org/chain/Dash/q/addressbalance/{address}',
			callback: function(data) {
				return parseFloat(data);
			}
		}
	},
	'NMC': {
		name: 'Namecoin',
		code: 'NMC',
		symbol: 'ℕ',
		api: {
			proxy: true,
			url: 'http://namecoin.webbtc.com/address/{address}.json',
			callback: function(data) {
				return data.balance/SATOSHI_CONST;
			}
		}
	},
	'PPC': {
		name: 'Peercoin',
		code: 'PPC',
		symbol: 'Ᵽ',
		api: {
			proxy: true,
			url: 'https://chainz.cryptoid.info/ppc/api.dws?a={address}&q=getbalance',
			callback: function(data) {
				return parseFloat(data);
			}
		}
	},
	'BLK': {
		name: 'BlackCoin',
		code: 'BLK',
		symbol: 'B',
		api: {
			proxy: true,
			url: 'https://chainz.cryptoid.info/blk/api.dws?a={address}&q=getbalance',
			callback: function(data) {
				return parseFloat(data);
			}
		}
	}
}
