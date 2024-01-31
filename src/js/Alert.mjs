export default class Alert {
  constructor() {
    // this.category = category;
    this.path = `../json/alerts.json`;
  }
  async init() {
    try {
      // Read the contents of alerts.js
      const response = await fetch(this.path);
      const data = await response.text();

      // Parse JSON content
      const alerts = JSON.parse(data);

      // Check if alerts exist
      if (alerts.length > 0) {
        // Create a section element
        const alertListSection = document.createElement('section');
        alertListSection.className = 'alert-list';

        // Loop through the results and build <p> for each alert
        alerts.forEach((alert) => {
          // Create a <p> element
          const alertElement = document.createElement('p');
          alertElement.textContent = alert.message;

          // Apply background and foreground colors
          alertElement.style.backgroundColor = alert.background;
          alertElement.style.color = alert.color;

          // Append the <p> element to the section
          alertListSection.appendChild(alertElement);
        });

        // Prepend the section to the main element
        document.querySelector('main').prepend(alertListSection);
      }
    } catch (error) {
      console.error('Error reading alerts.js:', error);
    }
  }
}
