let oldHTML = undefined
document.getElementById('searchForm').addEventListener('submit', event => {
  event.preventDefault()
  // actual logic, e.g. validate the form
  const word = document.getElementById('search_input').value
  const searchText = document.getElementById('search_text')
  searchText.innerHTML = cleanUpWrappers(searchText.innerHTML)
  document.getElementById('resultText').textContent = countWords(word, searchText)
  document.getElementById('searchWord').textContent = word
  searchText.innerHTML = wrapWords(searchText.innerHTML, word)
})

const wrapWords = (html, word) => {
  oldHTML = html
  if (word.length === 0) {
    return oldHTML
  }
  return html.replace(new RegExp(`${word}(?!([^<]+)?>)`, 'gi'), match =>
    wrappedWord(match.substring(match.indexOf(word), word.length)),
  )
}
const wrappedWord = word => `<span class=accentWord>${word}</span>`

const cleanUpWrappers = html => (oldHTML ? oldHTML : html)

const countWords = (word, node) => node.textContent.match(new RegExp(`${word}`, 'gi')).length
