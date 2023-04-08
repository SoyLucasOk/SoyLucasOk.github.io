class CardSocialMedia extends window.HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const $ = element => this.getAttribute(element) || ''
    this.socialNetwork = $('socialNetwork')
    this.url = $('url')
    this.icon = $('icon')
    this.render()
  }

  static get styles() {
    return /* css */ `
      :host {}
      .card {
        background-color: transparent;
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 5px 10px;
        border-radius: 5px;
        user-select: none;
        position: relative;
        text-decoration: none;
        color: black;
        font-size: .8em;
        font-weight: 700;
      }

      img {
        object-fit: cover;
        width: 90%;
        transition: all .15s;
      }

      img.blur {
        position: absolute;
        opacity: 0;
      }

      span {
        opacity: 0;
        position: absolute;
        bottom: -20px;
        background: #c9c9c9;
        padding: 5px 5px;
        border-radius: 5px;
        transition: all .15s;
        display: flex; 
        justify-content: center;
      }

      span::before {
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
        top: -5px;
        border-left: 10px solid transparent;
        border-bottom: 5px solid #c9c9c9;
        border-right: 10px solid transparent;
      }

      .card:hover > img {
        transform: translateY(-10px);
      }

      .card:hover > img.blur {
        transform: translateY(-10px);
        filter: blur(20px);
        opacity: .45;
      }

      .card:hover > span {
        opacity: 1;
        bottom: -40px;
      }
      
    `
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${CardSocialMedia.styles}</style>
    <a class="card" href="${this.url}">
      <img src="../src/assets/icon-${this.icon}.png" alt="icono de ${this.icon}">
      <img class="blur" src="../src/assets/icon-${this.icon}.png" alt="icono de ${this.icon}">
      <span>${this.socialNetwork}</span>
    </a>`
  }
}

window.customElements.define('dp-card-social-media', CardSocialMedia)
