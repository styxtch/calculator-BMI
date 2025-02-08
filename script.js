document.getElementById('calculateBtn').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Mohon masukkan tinggi dan berat badan yang valid!");
        return;
    }

    const bmi = weight / (height * height);
    const bmiValue = bmi.toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Berat Badan Kurang';
    } else if (bmi < 25) {
        category = 'Berat Badan Ideal';
    } else if (bmi < 30) {
        category = 'Berat Badan Berlebih';
    } else {
        category = 'Obesitas';
    }

    document.getElementById('bmiValue').textContent = bmiValue;
    document.getElementById('bmiCategory').textContent = `Kategori: ${category}`;

    // Animasi pada tombol
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.classList.add('pulse');
    setTimeout(() => {
        calculateBtn.classList.remove('pulse');
    }, 500);

    // Animasi pada result-box
    const resultBox = document.getElementById('result');
    resultBox.classList.add('show');

});