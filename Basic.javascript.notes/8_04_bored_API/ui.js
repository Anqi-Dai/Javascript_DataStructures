class UI {
  showActivity(level, activity) {
    // add activity to different card according to the level

    if (level === "easy") {
      document.getElementById("easy-activity").innerHTML = activity.activity;

      document.getElementById(
        "easy-accessibility"
      ).innerHTML = `Accessibility: ${activity.accessibility}`;

      document.getElementById("easy-price").innerHTML = `Price: ${
        activity.price
      }`;
    } else if (level === "normal") {
      document.getElementById("normal-activity").innerHTML = activity.activity;

      document.getElementById(
        "normal-accessibility"
      ).innerHTML = `Accessibility: ${activity.accessibility}`;

      document.getElementById("normal-price").innerHTML = `Price: ${
        activity.price
      }`;
    } else {
      document.getElementById("hard-activity").innerHTML = activity.activity;

      document.getElementById(
        "hard-accessibility"
      ).innerHTML = `Accessibility: ${activity.accessibility}`;

      document.getElementById("hard-price").innerHTML = `Price: ${
        activity.price
      }`;
    }
  }
}
