

//prima prova
function copyToClipboard(id) {
    const codeSnippet = document.getElementById(id);
    navigator.clipboard.writeText(codeSnippet.textContent);
    alert('Code copied to clipboard!');
}





//seconda prova 
/*function copyToClipboard() {
    const codeSnippet = document.getElementById('codeSnippet').textContent;

    navigator.clipboard.writeText(codeSnippet)
        .then(() => {
            alert('Code copied to clipboard!');
        })
        .catch(err => {
            console.error('Unable to Copy Code', err);
        });
}*/ 


