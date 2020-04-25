const checkboxes = document.querySelectorAll('.input input[type="checkbox"]') 

function handleCheck(event) {
  console.log(event)
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))