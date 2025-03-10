function injectCSS() {
  const css = `
      .fg-item:hover .fg-caption,
      .fg-item .fg-caption {
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
      }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
}

injectCSS();
