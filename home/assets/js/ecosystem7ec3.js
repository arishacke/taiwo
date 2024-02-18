const ecosystemTagsCheckboxes = document.querySelectorAll(
  '#ecosystem-tags .tags-wrap input',
)
const ecosystemTagsCards = document.querySelectorAll(
  '#ecosystem-tags .tags-cards-wrap .tags-card',
)
const ecosystemTagAll = document.getElementById('ecosystem-tag-all')
const ecosystemTagsWithoutAllCheckbox = Array.prototype.slice
  .call(ecosystemTagsCheckboxes)
  .filter((checkbox) => checkbox.id !== 'ecosystem-tag-all')

let isFirstClick = false
let currentActiveTags = []
const fallContainer = document.querySelector('.tags-cards-wrap')
const masonry = new Masonry(fallContainer, {
  itemSelector: '.tags-card',
  // to fix this https://stackoverflow.com/questions/28687603/when-first-masonry-item-is-hidden-all-remaining-items-form-into-a-single-colum
  columnWidth: '.tags-card:not(.display-none)',
})

const handleShowPartnerIndex = (currentActiveTags = []) => {
  const partnerPacificCards = document.querySelectorAll('.card-Pacific')
  const partnerAtlanticCards = document.querySelectorAll('.card-Atlantic')

  if (
    currentActiveTags.includes('ecosystem-tag-partner') ||
    currentActiveTags.length === 0
  ) {
    partnerPacificCards.forEach((card) => {
      card.classList.remove('display-none')
    })
    partnerAtlanticCards.forEach((card) => {
      card.classList.remove('display-none')
    })
  } else {
    partnerPacificCards.forEach((card) => {
      card.classList.add('display-none')
    })
    partnerAtlanticCards.forEach((card) => {
      card.classList.add('display-none')
    })
  }
}

const handleEcosystemTagCheck = (activeCheckbox) => {
  if (activeCheckbox.id === 'ecosystem-tag-all') {
    ecosystemTagsCheckboxes.forEach((checkbox) => {
      if (activeCheckbox.checked) {
        checkbox.checked = true

        ecosystemTagsCards.forEach((card) => {
          card.classList.remove('display-none')
        })
      } else {
        checkbox.checked = false

        ecosystemTagsCards.forEach((card) => {
          card.classList.add('display-none')
        })
      }
    })
    handleShowPartnerIndex([])
  } else {
    // all tag check or uncheck
    if (
      ecosystemTagsWithoutAllCheckbox.some(
        (checkbox) => checkbox.checked === false,
      )
    ) {
      ecosystemTagAll.checked = false
    } else {
      ecosystemTagAll.checked = true
    }

    if (isFirstClick === false) {
      isFirstClick = true
      ecosystemTagsCheckboxes.forEach((checkbox) => {
        if (checkbox === activeCheckbox) {
          checkbox.checked = true
        } else {
          checkbox.checked = false
        }
      })
    }

    const currentActiveTags = ecosystemTagsWithoutAllCheckbox
      .filter((checkbox) => checkbox.checked === true)
      .map((checkbox) => checkbox.getAttribute('id'))

    handleShowPartnerIndex(currentActiveTags)

    ecosystemTagsCards.forEach((card) => {
      const cardTagsString = card.getAttribute('data-ecosystem-tag')
      card.classList.add('display-none')
      if (currentActiveTags.some((tag) => cardTagsString.includes(tag))) {
        card.classList.remove('display-none')
      }
    })
  }

  masonry.layout()
}
