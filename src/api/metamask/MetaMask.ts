// declare global {
//     interface Window {
//         ethereum?: any;
//     }
// }
// export async function registerWithMetaMask(maskdata: {
//     wallet_address: string,
//     display_name: string,
//     username: string
// }): Promise<void> {
//     // Check if MetaMask is installed and connected
//     // if (window.ethereum && window.ethereum.isMetaMask) {
//     try {
//         // Request Ethereum account
//         // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         // const account = accounts[0];
//         // console.log('Registering with account:', account);
//         // Call your backend registration endpoint
//         console.log(JSON.stringify(maskdata))
//         const response = await fetch('http://64.226.94.204:1337/api/accounts/register/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ wallet_address: maskdata.wallet_address, display_name: maskdata.display_name, username: maskdata.username }),
//         });
//         if (!response.ok) {
//             throw new Error('Failed to register');
//         }
//         const data = await response.json();
//         console.log('Registration successful:', data);
//     } catch (error) {
//         console.error('MetaMask registration error:', error);
//         throw error;
//     }
//     // } else {
//     //     throw new Error('MetaMask not installed or not connected');
//     // }
// }

import axios from 'axios'
declare global {
    interface Window {
        ethereum?: any;
    }
}

export async function registerWithMetaMask(maskdata: {
    wallet_address: string,
    display_name: string,
    username: string,
    profile_picture: File | null,
    cover_picture: File | null
}): Promise<void> {
    try {
        const formData = new FormData();
        formData.append('wallet_address', maskdata.wallet_address);
        formData.append('display_name', maskdata.display_name);
        formData.append('username', maskdata.username);
        if (maskdata.profile_picture !== null) {
            formData.append('profile_picture', maskdata.profile_picture);
        }
        if (maskdata.cover_picture !== null) {
            formData.append('cover_picture', maskdata.cover_picture);
        }
        const response = await axios.post('http://64.226.94.204:1337/api/accounts/register/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            const responseData = response.data;
            console.log(responseData);

            // Store the image URL for preview
        } else {
            console.error('Error uploading file:', response.statusText);
            // Handle error, e.g., show an error message
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        // Handle error, e.g., show an error message
    }
}
