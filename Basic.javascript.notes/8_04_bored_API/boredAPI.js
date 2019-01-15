// This will be the class to make fetch calls to the bored API

class Bored {
  returnAccessibilityLevel(levelOfDifficulty) {
    let minAccess;
    let maxAccess;
    if (levelOfDifficulty === "easy") {
      minAccess = 0;
      maxAccess = 0.2;
    } else if (levelOfDifficulty === "normal") {
      minAccess = 0.21;
      maxAccess = 0.4;
    } else {
      minAccess = 0.41;
      maxAccess = 0.6;
    }
    return {
      minAccess,
      maxAccess
    };
  }

  async getActivity(levelOfDifficulty, num, type) {
    // you need to use the "this" keyword to call a method in the same class
    const obj = this.returnAccessibilityLevel(levelOfDifficulty);

    const minAccess = obj.minAccess;

    const maxAccess = obj.maxAccess;

    const response = await fetch(
      `http://www.boredapi.com/api/activity?minaccessibility=${minAccess}&maxaccessibility=${maxAccess}&participants=${num}&type=${type}`
    );

    const responseData = await response.json();

    return {
      activity: responseData.activity,
      accessibility: responseData.accessibility,
      price: responseData.price
    };
  }
}
