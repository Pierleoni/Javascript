

//prima prova
function copyToClipboard(idTxt,idBtn) {
    const codeSnippet = document.getElementById(idTxt);
    const btn = document.getElementById(idBtn);
    
    navigator.clipboard.writeText(codeSnippet.textContent);
    alert('Code copied to clipboard!');
    btn.innerHTML = '<img src="/Media/verified.png" alt="Verified Icon" class="verified-icon">';
}


/*function copyToClipboard(id) {
    const codeSnippet = document.getElementById(id);
    navigator.clipboard.writeText(codeSnippet.textContent)
        .then(() => {
            // Success: Code copied to clipboard
            alert('Code copied to clipboard!');
            changeIconToVerified();
        })
        .catch((err) => {
            // Handle errors if any
            console.error('Unable to copy to clipboard', err);
        });
}

function changeIconToVerified(id) {
    const copyButton = document.querySelector('.copyButton');
    if (copyButton) {
        // Assuming you have an element with a verified icon class or image
        copyButton.innerHTML = '<img src="/Media/verified.png" alt="Verified Icon" class="verified-icon">';
    }
}*/




