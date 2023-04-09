import './src/components/CardSocialMedia.js'
import { DP_LINKS, DIFERENTE_RAVE_LINKS } from './src/services/linksSocialNetwork.js'

function $(elemenet) {
  return document.getElementById(elemenet)
}

const dpSocialNetworkContainer = $('dp-social-network')
const drSocialNetworkContainer = $('dr-social-network')

DP_LINKS.forEach(({ socialNetwork, url, icon }) => {
  const card = document.createElement(`dp-card-social-media`)
  card.setAttribute('socialNetwork', socialNetwork)
  card.setAttribute('url', url)
  card.setAttribute('icon', icon)
  dpSocialNetworkContainer.appendChild(card)
})

DIFERENTE_RAVE_LINKS.forEach(({ socialNetwork, url, icon }) => {
  const card = document.createElement(`dp-card-social-media`)
  card.setAttribute('socialNetwork', socialNetwork)
  card.setAttribute('url', url)
  card.setAttribute('icon', icon)
  drSocialNetworkContainer.appendChild(card)
})