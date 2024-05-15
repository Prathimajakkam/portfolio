window.onload = function () {
  const favicon = document.getElementById('profile')
  const pageTitle = document.title
  const attentionMessage = 'Come back'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './images/dp_female.svg'
    } else {
      document.title = attentionMessage
      favicon.href = './images/folded.png'
    }
  }
}
