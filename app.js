// Check if MetaMask is installed
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    console.log('MetaMask is not installed. Please install it to use this app.');
}

// Request account access if needed
async function connectMetaMask() {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected:', accounts[0]);
            return accounts[0];
        } catch (error) {
            console.error('User denied account access:', error);
            return null;
        }
    } else {
        console.error('MetaMask is not installed. Please install it to use this app.');
        return null;
    }
}

// Initialize Web3
function initWeb3() {
    if (window.ethereum) {
        // Use MetaMask's provider
        window.web3 = new Web3(window.ethereum);
        console.log('Web3 has been initialized.');
    } else {
        console.error('MetaMask is not installed. Please install it to use this app.');
    }
}

// Connect button event listener
document.getElementById('connectButton').addEventListener('click', async () => {
    const account = await connectMetaMask();
    if (account) {
        document.getElementById('accountDisplay').innerText = `Connected account: ${account}`;
    }
});

// Initialize Web3 on page load
window.addEventListener('load', () => {
    initWeb3();
});
