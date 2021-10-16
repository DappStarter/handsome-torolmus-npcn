require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remind mistake include kiwi brave typical'; 
let testAccounts = [
"0x2dbea2f6df74d98a24abcfe360f98e813644629e0cff33dadaaad64f979a30be",
"0xe0908fd5369e6aeb5c59709d86e0e03de0d429509968c84c6df08a42cf062113",
"0xf6a6356c7a4760fd408c7cb4514c49d621936f9622b15e0c357a1323ea1c3a38",
"0xed7030bfb8cf9dcddd684bd38f51601fc291365a84c626acb82cbf4f39c54736",
"0xf9b245642faf1f418d7794b15e80c675620f02b7cbb507c8bff0886bde1607f9",
"0xddaec0c481ed194a6952a0e82575776437b3e7e5d3c8888fe2d1bbcd1843685b",
"0x0956001fb752d297b245ac5a081d489d4abc7e6401b87ece857ecdbc64fabf9d",
"0xd3935b65b71e6f27f1c95e84f6b89ca9e017e697f1efd4447c2c19a21ab6a8ea",
"0x2278e959cbb3fc8ca8bf2259a68923807b7789068c8aed2c30524d214d0b0132",
"0x7dd1b939fb1bf1c67232e9ddfb501eeba22cb846bbd73ec719aebb4a3eda8f79"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

