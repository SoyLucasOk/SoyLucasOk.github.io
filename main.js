import './src/components/CardSocialMedia.js'
import { LINKS } from './src/services/linksSocialNetwork.js'

function $(elemenet) {
  return document.getElementById(elemenet)
}

const app = $('app')

// app.innerHTML = '<dp-card-social-media></dp-card-social-media>'

LINKS.forEach(({ socialNetwork, url, icon }) => {
  const card = document.createElement(`dp-card-social-media`)
  card.setAttribute('socialNetwork', socialNetwork)
  card.setAttribute('url', url)
  card.setAttribute('icon', icon)
  app.appendChild(card)
})