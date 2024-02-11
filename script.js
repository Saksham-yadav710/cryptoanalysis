function getCryptoInfo() {
    const cryptoSymbol = document.getElementById('cryptoInput').value.toUpperCase();

    if (!cryptoSymbol.trim()) {
        alert('Please enter a cryptocurrency symbol.');
        return;
    }

    // Replace 'YOUR_API_KEY' with your actual CoinGecko API key
    const apiKey = 'YOUR_API_KEY';
    const endpoint = `https://api.coingecko.com/api/v3/coins/${cryptoSymbol}`;

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const cryptoResultDiv = document.getElementById('cryptoResult');

        if (data.error) {
            cryptoResultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            const { name, symbol, image, market_data } = data;

            cryptoResultDiv.innerHTML = `
                <p>Name: ${name}</p>
                <p>Symbol: ${symbol}</p>
                <img src="${image.small}" alt="${name} logo">
                <p>Current Price: $${market_data.current_price.usd}</p>
                <p>Market Cap: $${market_data.market_cap.usd}</p>
            `;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while fetching cryptocurrency information.');
    });
}
