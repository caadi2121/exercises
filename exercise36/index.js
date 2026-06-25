const colorPker = document.querySelector('#colorPker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const historyButton = document.querySelector('#historyButton');

colorPker.addEventListener('input', function() {
    const selectedColor = colorPker.value;
    colorPreview.style.backgroundColor = selectedColor;
    addColorToHistory(selectedColor);
});
function addColorToHistory(color) {
    const li = document.createElement('li');
    li.textContent = color;
    li.style.color = color;
    colorHistory.appendChild(li);
}

historyButton.addEventListener('click', function() {
    colorHistory.innerHTML = ''; 
});
