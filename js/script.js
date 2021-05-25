const first = document.getElementById('first');
const second = document.getElementById('second');
const result = document.getElementById('result-value');

const sumValues = function() {
    const localFirst = Number(first.value);
    const localSecond = Number(second.value);

    result.textContent = localFirst + localSecond;
}

const sumButton = document.getElementById('sum');
sumButton.addEventListener('click', sumValues);

