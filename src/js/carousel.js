document.getElementById('expandButton').addEventListener('click', function() {
    var extraContent = document.getElementById('extraContent');
    if (extraContent.classList.contains('hidden')) {
        extraContent.classList.remove('hidden');
        this.textContent = 'Clique para Recolher';
    } else {
        extraContent.classList.add('hidden');
        this.textContent = 'Clique para Expandir';
    }
});
