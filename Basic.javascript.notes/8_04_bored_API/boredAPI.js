// This will be the class to make fetch calls to the bored API

class bored {
  returnAccessibilityLevel(levelOfDifficulty) {
    let minAccess;
    let maxAccess;
    if (levelOfDifficulty === "easy") {
      minAccess = 0;
      maxAccess = 0.33;
    } else if (levelOfDifficulty === "normal") {
      minAccess = 0.34;
      maxAccess = 0.66;
    } else {
      minAccess = 0.67;
      maxAccess = 1;
    }
    return {
      minAccess,
      maxAccess
    };
  }

  async getEasyOne(levelOfDifficulty, num) {
    const obj = bored.returnAccessibilityLevel(levelOfDifficulty);

    const minAccess = obj.minAccess;

    const maxAccess = obj.maxAccess;

    const response = await fetch(
      `http://www.boredapi.com/api/activity?minaccessibility=${minAccess}&maxaccessibility=${maxAccess}&participants=${num}`
    );

    const responseData = await response.json();

    return {
      activity: responseData.activity,
      accessibility: responseData.accessibility,
      price: responseData.price
    };
  }
}
