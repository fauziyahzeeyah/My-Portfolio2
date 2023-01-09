var cover = document.querySelector("#cards");
var modal = document.querySelector('#modal');
var closeModal = document.querySelector('#close-modal');
var modalContent = document.querySelector('#modal-content');

closeModal.addEventListener('click', () => modal.classList.add('hidden'));

const development = [
  {
    id: 1,
    title: 'Tonic',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: '1stimg.png',
    languages: ['html', 'css', 'javaScript', 'Ruby'],
    liveVersion: 'https://fauziyahzeeyah.github.io/port-folio-mobile/',
    source: 'https://github.com/fauziyahzeeyah/port-folio-mobile',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: '2ndimg.png',
    languages: ['html', 'css', 'javaScript', 'Ruby'],
    liveVersion: 'https://fauziyahzeeyah.github.io/port-folio-mobile/',
    source: 'https://github.com/fauziyahzeeyah/port-folio-mobile',
  },
  {
    id: 3,
    title: 'Tonic',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: '3rdimg.png',
    languages: ['html', 'css', 'javaScript', 'Ruby'],
    liveVersion: 'https://fauziyahzeeyah.github.io/port-folio-mobile/',
    source: 'https://github.com/fauziyahzeeyah/port-folio-mobile',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2015',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: '4thimg.png',
    languages: ['html', 'css', 'javaScript', 'Ruby'],
    liveVersion: 'https://fauziyahzeeyah.github.io/port-folio-mobile/',
    source: 'https://github.com/fauziyahzeeyah/port-folio-mobile',
  },
];

development.forEach((development) => {
  const div = document.createElement('div');
  div.classList.add('card');

  function sequenceString(x, y) {
    x += `<li class="tag">${y}</li>`;
    return x;
  }

  const languages = development.languages.reduce(sequenceString, '');
  const buttonId = `see-project-${development.id}`;

  div.innerHTML = `
  <div class="card-picture">
    <img src="images/cards/${development.featuredImage}" alt="Tonic" />
  </div>
  <div class="card-elements">
    <h3 class="card-title">${development.title}</h3>
    <div class="card-specs">
      <div class="specs_client">Canopy</div>
      <div class="dot"></div>
      <div class="specs_role">Back End dev</div>
      <div class="dot"></div>
      <div class="specs_year">2015</div>
    </div>
    <p class="card-description">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    <ul class="card-techs">
      ${languages}
    </ul>
    <button class="card-button" id="see-project-${development.id}">See Project</button>
  </div>
  `;

  cover.appendChild(div);

  const developmentButton = document.querySelector(`#${buttonId}`);

  developmentButton.addEventListener('click', () => {
    modalContent.innerHTML = `
      <h3 class="card-title">${development.title}</h3>

      <div class="card-specs">
        <div class="specs_client">Canopy</div>
        <div class="dot"></div>
        <div class="specs_role">Back End dev</div>
        <div class="dot"></div>
        <div class="specs_year">2015</div>
      </div>

      <div class="card-picture">
        <img src="images/cards/${development.featuredImage}" alt="Multi-Post stories" />
      </div>

      <div class="popup-description">

        <p class="card-description">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
        </p>

        <div class="modal-footer">

          <ul class="card-techs">
            ${languages}
          </ul>

          <div class="card-bar"></div>
          <div class="footer-buttons">
            <button class="card-button" onClick="location.href='${development.liveVersion}'">
              See live
              <i class="fa-regular fa-arrow-up-right-from-square" alt="live-version icon"></i>
            </button>
            <button class="card-button" onClick="location.href='${development.source}'">
              See Source
              <img src="./images/github.svg" alt=github-icon>
            </button>
          </div>

        </div>

      </div>
    `;
    modal.classList.remove('hidden');
  });
});
