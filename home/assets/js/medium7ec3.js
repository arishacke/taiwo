const getMedium = () => {
  fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mantanetwork',
  )
    .then((res) => res.json())
    .then((data) => {
      const { items } = data
      let output = ''
      items.forEach((item) => {
        const date = new Date(item?.pubDate)

        const day = date ? date.getDate() : ''
        const month = date
          ? date.toLocaleString('en-US', { month: 'short' })
          : ''
        const year = date ? date.getFullYear() : ''

        return (output += `
                        <div class="swiper-slide">
                            <a class="medium-card" href="${item?.link}" target="_blank">
                                <span class="img-wrap">
                                    <img src="${item?.thumbnail}" alt="Post Cover">
                                </span>
                                <span class="text-wrap">
                                    <h5>${item?.title}</h5>
                                    <h6>${month} ${day}, ${year}</h6>
                                </span>
                            </a>
                        </div>`)
      })
      document.querySelector('.medium-section .swiper-wrapper').innerHTML =
        output

      if (items.length > 0) {
        document
          .querySelector('.medium-section')
          .classList.remove('display-none')
      }
    })
}

getMedium()
