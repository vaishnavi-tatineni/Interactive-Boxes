function selectOption(boxNumber) {
    const details = document.querySelectorAll('.details');
    const boxes = document.querySelectorAll('.option');
    const totalElement = document.getElementById('total');
    
    boxes.forEach((box, index) => {
        const priceElement = box.querySelector('.price');
        const price = priceElement.getAttribute('data-price');
        
        if (index + 1 === boxNumber) {
            box.classList.add('active');
            details[index].style.display = 'flex'; // Show details for the selected box
            totalElement.textContent = `Total: $${price} USD`;
            box.style.backgroundColor = '#FFF9FA'; // Change background color for selected box
        } else {
            box.classList.remove('active');
            details[index].style.display = 'none'; // Hide details for other boxes
            box.style.backgroundColor = 'transparent'; // Reset background color
        }
    });
}