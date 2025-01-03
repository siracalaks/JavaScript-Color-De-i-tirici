const hexValues = '0123456789ABCDEF';
const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

// Generate random hex color
const getRandomHexColor = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexValues[Math.floor(Math.random() * 16)];
    }
    return hexColor;
};

// Copy color code to clipboard
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            // Show feedback
            const originalText = colorSpan.textContent;
            colorSpan.textContent = 'Copied!';
            setTimeout(() => {
                colorSpan.textContent = originalText;
            }, 1000);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
};

// Change background color
const changeColor = () => {
    const hexColor = getRandomHexColor();
    document.body.style.backgroundColor = hexColor;
    colorSpan.textContent = hexColor;
};

// Event Listeners
btn.addEventListener('click', changeColor);
colorSpan.addEventListener('click', () => copyToClipboard(colorSpan.textContent)); 