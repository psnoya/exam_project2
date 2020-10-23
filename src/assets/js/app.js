const  storage = window.localStorage

const  renderContacts = () => {
  const  contacts = JSON.parse(storage.getItem('items'))

  let  div = document.querySelector('#shopping-list')
  if (contacts) {
	div.innerHTML = ''
	const  ul = document.createElement('ul')

	items.forEach(item  => {
		let  li = document.createElement('li')

		li.innerHTML = `
		  <span>${item.name}</span>
	    `
	    ul.appendChild(li)
	  })
			
	  div.appendChild(ul)
	} else {
	  div.innerHTML = '<p>You have no items on your list</p>'
	}
}
document.addEventListener('DOMContentLoaded', () => {
	renderItem()
	const  contactForm = document.getElementById('new-item-form')
    const  toggleFormVisibilityButton = document.getElementById('add-item')
	contactForm.style.display = 'none'
 
	toggleFormVisibilityButton.addEventListener('click', () => {
		if (contactForm.style.display === '') {
			contactForm.style.display = 'none'
		} else {
			contactForm.style.display = ''
            window.addEventListener("DOMContentLoaded", () => {
                let button = document.getElementById("quote");
                let message = document.getElementById("message");
            
                showMeAQuote = () => {
                    message.innerHTML = `Keep on keeping on!`;
                };
                button.addEventListener("click", showMeAQuote);
            });