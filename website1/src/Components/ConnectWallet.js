import React , { useState } from 'react';
const TronWeb = require('tronweb');

const [wallet, setWallet] = useState(null);

const connectWallet = async function () {
    setTimeout(async function () {
            const tronWeb = window.tronWeb;
            console.log("tronWeb : ", tronWeb);
            console.log("tronweb is successfully fetched from window");

            try {
                var currentaddress = await tronWeb.address.fromHex((await tronWeb.trx.getAccount()).address.toString());
                setWallet(currentaddress);

                var balance = await tronWeb.trx.getBalance(currentaddress);
                balance = balance / (10 ** 6);

      
            } catch {
                console.log("Tronweb not defined");
            }
    }, 1000);
}

export default connectWallet;