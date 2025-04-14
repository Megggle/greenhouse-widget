class GreenhouseJobBoard extends HTMLElement {
  connectedCallback() {
    const script = document.createElement('script');
    script.src = 'https://boards.greenhouse.io/embed/job_board/js?for=nuclearpromisex';
    script.onload = () => {
      const container = document.createElement('div');
      container.id = 'grnhse_app';
      this.appendChild(container);
    };
    document.head.appendChild(script);
  }
}

customElements.define('greenhouse-job-board', GreenhouseJobBoard);
