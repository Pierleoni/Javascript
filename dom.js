

//prima prova
function copyToClipboard(id) {
    const codeSnippet = document.getElementById(id);
    navigator.clipboard.writeText(codeSnippet.textContent);
    alert('Code copied to clipboard!');
}






