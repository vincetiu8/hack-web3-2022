import TronWeb from 'tronweb';

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
const eventServer = new HttpProvider("https://api.shasta.trongrid.io");
const privateKey = process.env.PRIVATE_KEY_SHASTA;
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

const publicKey = 'TVfbUyZBhM5aE7jgveA9yFwnQbVEbnfD4c'
const contractAddress = 'TWg3145ZKk5vFxSzYzS6YokaQ9ZtnSj9HE'

import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../contracts/build/contracts/SponsorshipToken.json', 'utf8'));
let contract = tronWeb.contract(data.abi, contractAddress);
let result;

// Mint new NFT
console.log("Minting a new NFT")
result = await contract.mint(publicKey,
    [
        "Bruno & Ceelo",
        "https://stockcrowd.s3.amazonaws.com/test/resources/sc/2022/041210/Grass_owls_-_bruno__ceelo_Landing_Page_2000px.JPG",
        "Grass Owls",
        "These two grass owl brothers do everything together. Eating, flying, training. However, each owl has their own distinct personality to tell them apart. Bruno’s loud and boisterous energy contrasts his brother, Ceelo’s mellow and cool demeanor. Both owls have been featured in Raptors in Flight where they both fly out from the old PEF car together.",
        "Mindanao, Philippines",
        "Philippine Eagle Foundation",
        "2023-01-01",
        "2023-01-31"
    ], 3500).send({
    feeLimit: 500_000_000,
    callValue: 0
});
console.log(result);

// result = await contract.mint(publicKey,
//     [
//         "Chinook",
//         "https://stockcrowd.s3.amazonaws.com/test/resources/sc/2021/090111/IMG_6305_2000px.JPG",
//         "White-bellied Sea Eagle",
//         "Chinook is a 10-year-old male captive-bred White-Bellied Sea Eagle. He started falconry training in 2017. Since he had no prior experience being handled by keepers, Chinook was naughty and uncoordinated. He also used to be very aggressive towards people. Now, Chinook has become quite an affectionate eagle, enjoying head scratches and neck rubs. He is doing well during his free-flight trainings with his keeper, and was even featured in the flight demonstration, 'Raptors In Flight'.",
//         "Mindanao, Philippines",
//         "Philippine Eagle Foundation",
//         "2023-01-01",
//         "2023-01-31"
//     ], 4000).send({
//     feeLimit: 500_000_000,
//     callValue: 0
// });
// console.log(result);

result = await contract.mint(publicKey,
    [
        "Felix",
        "https://stockcrowd.s3.amazonaws.com/test/resources/sc/2021/090111/IMG_6305_2000px.JPG",
        "Long-tailed Macaque",
        "Felix, son to monkey Frida, is afraid of everything. He does not like to take risks until he knows it is absolutely safe. He’s also always the last of the juveniles to approach to receive treats.",
        "Mindanao, Philippines",
        "Philippine Eagle Foundation",
        "2023-01-01",
        "2023-01-31"
    ], 4500).send({
    feeLimit: 500_000_000,
    callValue: 0
});
console.log(result);

result = await contract.mint(publicKey,
    [
        "Yi Ren",
        "https://www.pandasinternational.org/wp-content/uploads/2022/03/%E4%B9%94%E4%BC%8A2021%E5%B9%B42%E4%BB%94-Qiao-Yis2021-2nd-cub-250x250.jpg",
        "Giant Panda",
        "Yi Ren is the daughter of Qiao Yi, born on July 19, 2021 at Wolong Shenshuping Base. She also has a twin brother that is looking to be adopted!",
        "Chengdu, China",
        "Pandas International",
        "2023-01-01",
        "2023-01-31"
    ], 10000).send({
    feeLimit: 500_000_000,
    callValue: 0
});
console.log(result);

result = await contract.mint(publicKey,
    [
        "Etola",
        "https://images.squarespace-cdn.com/content/v1/5605cf02e4b062e5cb8f14df/1560998616811-4O0DL6XVNBETSN29WBP3/Etola.JPG?format=750w",
        "Lion",
        "Etola was collared in December 2018 with Ditonga, his coalition mate at the airstrip near Mapula Lodge. Etola has a darker mane, so he gets the lion’s share of mating opportunities when they encounter receptive females. Their territory extends between Kadizora Camp-Mapula Lodge and Duba Exploration Camp.",
        "Seronga, Botswana",
        "CLAWS Conservancy",
        "2023-01-01",
        "2023-01-31"
    ], 10000).send({
    feeLimit: 500_000_000,
    callValue: 0
});
console.log(result);

result = await contract.mint(publicKey,
    [
        "Shedipatira",
        "https://images.squarespace-cdn.com/content/v1/5605cf02e4b062e5cb8f14df/1608245632603-XXGCYVWRP0FR3E9P7DD8/49C6325E-DCD4-4484-8DB9-26A99A409995.jpg?format=750w",
        "Lion",
        "Shedipatira was collared in October 2020 and is the newest study lion in our program. She was found mating near Hippo Pools, close to Kadizora Lodge. We are monitoring her closely to determine whether she has cubs.",
        "Seronga, Botswana",
        "CLAWS Conservancy",
        "2023-01-01",
        "2023-01-31"
    ], 10000).send({
    feeLimit: 500_000_000,
    callValue: 0
});
console.log(result);

result = await contract.mint(publicKey,
    [
        "Mae Kham Pheng",
        "https://www.elephantconservationcenter.com/wp-content/uploads/2019/02/mae-kham-pheng.jpg",
        "Elephant",
        "Mae Kham Pheng came from the Thongmixay province. She worked in the logging industry before being taken to work in a tourist camp in Van Vieng, where she stayed for 10 years with her soul mate Mae Thong Bay. Both belonged to the same owner. After their work in Van Vieng, Mae Kham Pheng and Mae Thong Bay were moved to another tourist camp in Luang Prabang for a few months. Since she was not a good fit for working at the tourist camp, due to being blind in one eye, and Mae Thong Bay was getting old, her owner decided to sell both of them. However, he didn’t want them to work anymore, therefore, he contacted the ECC staff. Mae Kham Pheng arrived at the ECC with Mae Thong bay, where today the two are inseparable. She is part of the ECC breeding program.",
        "Thongmixay, Laos",
        "Elephant Conservation Center",
        "2023-01-01",
        "2023-01-31"
    ], 20000).send({
    feeLimit: 500_000_000,
    callValue: 0
});
console.log(result);

result = await contract.mint(publicKey,
    [
        "Cinta",
        "https://internationaltigerproject.org/static/media/uploads/tigers/.thumbnails/cinta01.jpg/cinta01-727x727.jpg",
        "Tiger",
        "Cinta, meaning 'love' in Indonesia, lives in the hilly southern tip of the Bukit Tigapuluh National Park (BTPNP) and into the lowland area of the ex-logging concession called Hatma Hutani. This concession is towards the east of BTPNP, near the Orangutan Sanctuary supported by The Orangutan Project.",
        "Jambi, Indonesia",
        "International Tiger Project",
        "2023-01-01",
        "2023-01-31"
    ], 20000).send({
    feeLimit: 500_000_000,
    callValue: 0
});
console.log(result);

// Get number of NFTs
console.log("Getting number of NFTs")
result = await contract.getNumberOfTokens().call();
console.log(result);

// Get NFTs of an address
console.log("Getting NFTs of an address")
result = await contract.getTokensByOwner(publicKey).call();
console.log(result);

// Get metadata of NFT
console.log("Getting URI of NFT")
result = await contract.tokenMetadata(0).call();
console.log(result);

// Get price of NFT
console.log("Getting price of NFT")
result = await contract.price(0).call();
console.log(result);

// Purchase an available NFT
console.log("Purchasing an available NFT")
result = await contract.purchase("Zeus", 0).send({
    feeLimit: 500_000_000,
    callValue: result,
    shouldPollResponse: true
})
console.log(result)
