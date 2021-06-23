addEventListener('DOMContentLoaded', () => {
	const nav_button = document.querySelector('.nav_button')
	if (nav_button) {
		nav_button.addEventListener('click', () => {
			const nav_ul = document.querySelector('.nav_ul')
			nav_ul.classList.toggle('show')
		})
	}
})
