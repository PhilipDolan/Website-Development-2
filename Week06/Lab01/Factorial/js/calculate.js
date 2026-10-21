const factorial = (field) => {
  if (field === 0 || field === 1) 
    return 1
  
 let total = 1
 for (i = field-1; i > 1; i--) {
	 field *= i
 }
   return field
}

const input = document.querySelector('#num');
    const result = document.querySelector('#factorial');
    const form = document.querySelector('form');
    form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      result.value = factorial(parseInt(input.value));
    });