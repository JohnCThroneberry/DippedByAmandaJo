function togglePricing() {
    var pricingTab = document.getElementById('pricingTab');
    if (pricingTab.style.display === 'block') {
        pricingTab.style.display = 'none';
    } else {
        pricingTab.style.display = 'block';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const formData = new FormData(form);
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
				}).then(() => {
						console.log('Form successfully submitted');
				}).catch((error) => {
						console.error('Error submitting form:', error);
				});

    window.location.href = mailtoLink;
});
