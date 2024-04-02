declare global {
    interface Window {
        ethereum?: any;
    }
}
export async function registerWithMetaMask(maskdata: {
    wallet_address: string,
    display_name: string,
    username: string
}): Promise<void> {
    // Check if MetaMask is installed and connected
    // if (window.ethereum && window.ethereum.isMetaMask) {
    try {
        
        // Request Ethereum account
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const account = accounts[0];
        // console.log('Registering with account:', account);

        // Call your backend registration endpoint
        console.log(JSON.stringify(maskdata))
        const response = await fetch('http://64.226.94.204:1337/api/accounts/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ wallet_address: maskdata.wallet_address, display_name: maskdata.display_name, username: maskdata.username }),
        });

        if (!response.ok) {
            throw new Error('Failed to register');
        }

        const data = await response.json();
        console.log('Registration successful:', data);
    } catch (error) {
        console.error('MetaMask registration error:', error);
        throw error;
    }
    // } else {
    //     throw new Error('MetaMask not installed or not connected');
    // }
}
