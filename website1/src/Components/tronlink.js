function getTronweb() {
    var obj = setInterval(async () => {
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
            clearInterval(obj);
            return window.tronWeb;
        }
    }, 10);

    return null;
}

// connect tronlink to server
const tronWeb = getTronweb();
export default tronWeb;

