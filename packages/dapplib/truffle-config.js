require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth saddle hospital include industry furnace gesture'; 
let testAccounts = [
"0x367c8192cd7b335877f6cfbbeb3a1e3eda047429c8856ebee66254f37bb95fd3",
"0x489ed8f264cbe927500f3c4f289e4fab2b93d58d0be4b9af96ce57f3075464b3",
"0x51e35bc54a74e250d160bac6f9f0146c8318a6f6d5b6a4559e934243a3c75b8a",
"0xab3dcf809acd6d5eed739f123588f58d155e10ae613f22fac85d8d8512d1eba8",
"0x2892d9786e1fb08c04c1373ee24e7afddb74804a36ac90fd595b1b19118534b4",
"0xf5bb815f51d9592402f4e315897b0dac91e8d08e0acbd6ce592324c0c75440be",
"0x54a008da769447cb3013066e6194fbafa3a4609408aac2e2786443acf8c0aa67",
"0x944c25f0295c6aca289fd71c957de9a19b6a593c8df10da8aead0d0afc85b7f3",
"0x5e2bb4981be518decac053944ebc0d281ca49045bace02d4bdb902ca00f99a82",
"0x1470e5d8584a6ceeb7ebb241f0cdfe9a8a40d7edbdab71a29a43885af89ed03e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


