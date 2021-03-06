const burgerBtn = document.querySelector('.nav__mobile-burger')
const burger = document.querySelector('.hamburger')
const mobNavBody = document.querySelector('.nav__mobile-body')
const mobNavItems = document.querySelectorAll('.nav__mobile-link')
const boxes = document.querySelectorAll('.boxes__box')

const boxesClosing = document.querySelectorAll('.boxes__box .closing')

const wisdomLink = document.querySelectorAll('.wisdom__link a')
const thinkingLink = document.querySelectorAll('.thinking__link a')
const critiqueLink = document.querySelectorAll('.critique__link a')
const resetLink = document.querySelectorAll('.reset__link a')

const yearSpan = document.querySelector('.year')

const handleNav = () => {
  burger.classList.toggle('is-active')
  mobNavBody.classList.toggle('show-nav')
  document.body.classList.toggle('sticky')
  hideNav()
}

const hideNav = () => {
  mobNavItems.forEach(item => {
    item.addEventListener('click', () => {
      burger.classList.remove('is-active')
      mobNavBody.classList.remove('show-nav')
      document.body.classList.remove('sticky')
    })
  })
}

const handleBoxClosing = () => {
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      box.firstElementChild.classList.toggle('open')
    })
  })
}

const handleTagLinks = () => {
  wisdomLink.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      boxesClosing.forEach(box => {
        if (box.parentElement.classList.contains('wisdom')) {
          box.classList.add('open')
        } else {
          box.classList.remove('open')
        }
      })
    })
  })
  thinkingLink.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      boxesClosing.forEach(box => {
        if (box.parentElement.classList.contains('thinking')) {
          box.classList.add('open')
        } else {
          box.classList.remove('open')
        }
      })
    })
  })
  critiqueLink.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      boxesClosing.forEach(box => {
        if (box.parentElement.classList.contains('critique')) {
          box.classList.add('open')
        } else {
          box.classList.remove('open')
        }
      })
    })
  })

  resetLink.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      boxesClosing.forEach(box => {
        box.classList.remove('open')
      })
    })
  })
}

const handleYear = () => {
  const year = new Date().getFullYear();
  yearSpan.textContent = year
}


burgerBtn.addEventListener('click', handleNav)
handleTagLinks()
handleBoxClosing()
handleYear()
