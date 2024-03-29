declare global {
    interface Window {
        ethereum?: any;
    }
}

interface RegistrationData {
    maskdata: object
}

export async function registerWithMetaMask(maskdata:object): Promise<void> {
    // Check if MetaMask is installed and connected
    // if (window.ethereum && window.ethereum.isMetaMask) {
        try {
            // Request Ethereum account
            // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            // const account = accounts[0];
            // console.log('Registering with account:', account);

            // Call your backend registration endpoint

            const registrationData: RegistrationData = {
                maskdata: maskdata
            };
            console.log(JSON.stringify(registrationData.maskdata))
            const response = await fetch('http://64.226.94.204:1337/api/accounts/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registrationData),
                mode: 'no-cors'
            });
            
            if (!response.ok) {
                throw new Error('Failed to register');
                console.log(response)
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
