
import('node-fetch').then(async (fetchModule) => {
    const fetch = fetchModule.default;
    
    // Your code using fetch goes here
    const url = 'http://localhost:30001/search?name=Smart Watch';
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data fetched successfully:', data);
}).catch((err) => {
    console.error('Error loading node-fetch module:', err);
});





