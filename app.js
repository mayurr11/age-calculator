const CalculateBtn = document.querySelector("#calculate-btn");

CalculateBtn.addEventListener('click', () => {
    const birthdateInput = document.getElementById('birthdate');
    const result = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();
        
    if (isNaN(birthdate)) {
        result.innerText = "Please Enter Valid Date!!";
        result.style.color ="Red";
        return;
    }
    
    // Calculating age
    const ageInMilliseconds = currentDate - birthdate;

    const ageDate = new Date(ageInMilliseconds);
    
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    
    result.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
    result.style.color = 'Green';

    if(currentDate < birthdate) {
        result.innerText = "Please Enter Valid Date!!";
        result.style.color ="Red";
        return;
    }
});