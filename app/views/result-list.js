class ResultItemView {
  constructor(model) {
    // Stup the data for our CURREN table row
    this.model = model;

    // Setup our element for THE CURRENT row in our table
    this.el = document.createElement('div');
    this.el.classList.add('grid__item');

    this.el.innerHTML = `
      <p class="grid__item--header">Oct. 24 2:00PM</p>
      <div class="grid__item--content">
        <div class="grid__item--players">
          <p class="playerOne">Dan</p>
          <p class="vs">vs</p>
          <p class="playerTwo">Ryan</p>
          </div>
          <div class="grid__item--score">
            <p class="playerOneScore">1</p>
            <p class="playerTwoScore">11</p>
          </div>`;
  }

  render() {
    this.el.querySelector('.grid__item--header').innerText = this.model.games.time;
    this.el.querySelector('playerOne').innerText = this.model.games.player[0.name];
    this.el.querySelector('playerTwo').innerText = this.model.games.player[1.name];
    this.el.querySelector('playerOneScore').innerText = this.model.user;
    this.el.querySelector('playerTwoScore').innerText = this.model.bpm;
  }
}

export default class ResultList {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.innerHTML = '';

    // Loop through our model
    this.model.forEach((result) => {
      // Create a new result item view
      const row = new ResultItemView(result);
      row.render();

      // Append the new result row to the list element
      this.el.appendChild(row.el);
    });
  }
}
