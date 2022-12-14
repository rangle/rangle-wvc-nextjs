const sendToSearchPage = (function () {
  let value
  document.getElementById('gsc-i-id1').addEventListener('keydown', (e) => {
    value = e.target.value

    if (e.keyCode === 13 && value) {
      e.preventDefault()
      window.location.href = `https://worldvision.ca/search?q=${value}`
    }
  })

  document
    .getElementById('nav-search-button')
    .addEventListener('click', (e) => {
      e.preventDefault()
      value = document.getElementById('gsc-i-id1').value

      if (value) {
        window.location.href = `https://worldvision.ca/search?q=${value}`
      }
    })

  document
    .getElementById('mobile-search-button')
    .addEventListener('click', () => {
      const mobileInput = document.getElementById('mobile-search-input')
      const closeButton = document.getElementById('mobile-search-close-button')
      mobileInput.classList.toggle('show')
      closeButton.classList.toggle('show')
    })
})()
