const openDapp = JSON.toString({
	"url": "http://localhost:3000/", 
	"action": "open",
	"protocol": "tronlink",
	"version": "1.0"
});

const openWallet = JSON.toString({
	"action": "open",
	"protocol": "tronlink",
	"version": "1.0"
});

const connectToDapp = encodeURIComponent('tronlinkoutside://pull.activity?param=' + openDapp);
const connectToWallet = encodeURIComponent('tronlinkoutside://pull.activity?param=' + openWallet);