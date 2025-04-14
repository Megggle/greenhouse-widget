class GreenhouseJobBoard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<h2>Greenhouse Widget Loaded!</h2>";
  }
}
customElements.define('greenhouse-job-board', GreenhouseJobBoard);
