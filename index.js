const cellsToggle = document.querySelector("#cells");
const columnToggle = document.querySelector('#square');
const container = document.querySelector('#container');
const cardsContainer = document.querySelector('#cards-container');

cellsToggle.addEventListener('click', () => {
  container.classList.remove('hide');
  container.classList.add('show');
  cardsContainer.classList.remove('show');
  cardsContainer.classList.add('hide');
});

columnToggle.addEventListener('click', () => {
    cardsContainer.classList.remove('hide');
    cardsContainer.classList.add('show');
    container.classList.remove('show');
    container.classList.add('hide');
  });
  