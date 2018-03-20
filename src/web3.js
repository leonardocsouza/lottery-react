import Web3 from 'web3';

// Leverage existing web3 provider config that is injected
// in the web page via metamask
// We do this to be able to use newer version of web3
const web3 = new Web3(window.web3.currentProvider);

export default web3;