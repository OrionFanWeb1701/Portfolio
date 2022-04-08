const main = () => {
	const hamburgerBtn = document.querySelector('.hamburger')
	const navItem = document.querySelectorAll('.nav-menu__item')

	/* Animation of navigation */
	const showMenu = () => {
		const html = document.querySelector('html')
		const navHamburger = document.querySelector('.nav-menu__hamburger')

		hamburgerBtn.classList.toggle('is-active')

		if (hamburgerBtn.classList.contains('is-active')) {
			navHamburger.classList.remove('hidden-menu')
			navHamburger.classList.add('show-menu')
			html.style.overflowY = 'hidden'
		} else {
			navHamburger.classList.remove('show-menu')
			navHamburger.classList.add('hidden-menu')
			html.style.overflowY = 'scroll'
		}
	}

	const addShadow = () => {
		const nav = document.querySelector('.nav')
		const logo = document.querySelector('.nav__logo')

		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
			logo.style.boxShadow = 'none'
		} else {
			nav.classList.remove('shadow-bg')
			logo.style.boxShadow = '0 0 10px #000'
		}
	}

	/* ----------------------------------------------------------------- */
	/* Show year in the footer */

	const showYear = () => {
		const textYear = document.querySelector('.year')
		const date = new Date()
		const year = date.getFullYear()

		textYear.textContent = ` ${year} `
	}

	showYear()

	/* ----------------------------------------------------------------- */
	/* addEventsListeners */

	hamburgerBtn.addEventListener('click', showMenu)
	window.addEventListener('scroll', addShadow)
	navItem.forEach(item => {
		item.addEventListener('click', showMenu)
	})
}

document.addEventListener('DOMContentLoaded', main)
