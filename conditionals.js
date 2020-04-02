/*
    Conditionals, Logic, and Formatting Practice

    Today you are working on your Smart Home!  
    Your smart home has many lights that are controllable, and you can use JavaScript
    to control them.

    Complete the Following Exercises.
*/

/* ------------------------------------------------
    Exercise One

    Choosing a color for a light.  

    Given a number, decide which color should be returned.

    Complete the following ternary statement.
    If the number is > 10, return "blue"
    otherwise return "red";
*/
function getColor(number) {
  // Uncomment and complete
  return number > 10 ? "blue" : "red";
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/ alert(
  "-----Tests for Exercise One-----"
);
alert("* Check for 15");
alert(getColor(15) === "blue");
alert("* Check for 5");
alert(getColor(5) === "red");
alert("* Check for 10");
alert(getColor(10) === "red");

/* ------------------------------------------------
    Exercise Two

    A controllable lightbulb has a brightness which is a numeric value between 0 and 255.
    You need to create a function which returns a string which summarizes the status of the lightbulb.

    Complete the following function using two nested ternary statments

    If the brightness is zero, return "off"
    otherwise if the brightness is greater than zero but less that 200, return "dimmed"
    if the brightness is greater than or equal to 200, then return "on"
*/
function lightStatus(brightness) {
  return brightness >= 200 ? "on" : brightness > 0 ? "dimmed" : "off";
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/ alert(
  "-----Tests for Exercise Two-----"
);
alert("* Check for 0");
alert(lightStatus(0) === "off");
alert("* Check for 85");
alert(lightStatus(85) === "dimmed");
alert("* Check for 200");
alert(lightStatus(200) === "on");
alert("* Check for 255");
alert(lightStatus(255) === "on");

/* ------------------------------------------------
    Exercise Three

    Given a lightbulb's status, create a switch statement which returns 
    a nicely formatted user readable string.

    A lightbulb can have any of the following statuses:
    "on", "off", "dimmed", "offline", "deleted", "missing", "broken" 

    If the lightbulb is on, return "The house is bright!"
    If the lightbulb is dimmed, return "The house is nice and dim"
    If the lightbulb is deleted, return "The lightbulb has been removed from the system"
    If the lightbulb is off, return "The house is dark"
    If the lightbulb is broken, return "The house is dark and we can't turn the light on!"
    If the lightbulb is offline or missing, return "The house is dark and we can't find the lightbulb!"
    If the lightbulb is any other value, then return "Something is wrong!"
*/

function getLightBulbStatusDisplayString(status) {
  let result = status;
  switch (result) {
    case "on":
      alert("The house is bright!");
      break;
    case "dimmed":
      alert("The house is nice and dim");
      break;
    case "deleted":
      alert("The lightbulb has been removed from the system");
      break;
    case "off":
      alert("The house is dark");
      break;
    case "broken":
      alert("The house is dark and we can't turn the light on!");
      break;
    case "offline":
    case "missing":
      alert("The house is dark and we can't find the lightbulb!");
      break;

    default:
      alert("Something is wrong");
  }

  return result;
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/ alert(
  "-----Tests for Exercise Three-----"
);
alert("* Check for on");
alert(getLightBulbStatusDisplayString("on") === "The house is bright!");
alert("* Check for off");
alert(getLightBulbStatusDisplayString("off") === "The house is dark");
alert("* Check for dimmed");
alert(
  getLightBulbStatusDisplayString("dimmed") === "The house is nice and dim"
);
alert("* Check for offline");
alert(
  getLightBulbStatusDisplayString("offline") ===
    "The house is dark and we can't find the lightbulb!"
);
alert("* Check for missing");
alert(
  getLightBulbStatusDisplayString("missing") ===
    "The house is dark and we can't find the lightbulb!"
);
alert("* Check for deleted");
alert(
  getLightBulbStatusDisplayString("deleted") ===
    "The lightbulb has been removed from the system"
);
alert("* Check for broken");
alert(
  getLightBulbStatusDisplayString("broken") ===
    "The house is dark and we can't turn the light on!"
);
alert("* Check for empty string");
alert(getLightBulbStatusDisplayString("") === "Something is wrong!");
alert("* Check for 5");
alert(getLightBulbStatusDisplayString(5) === "Something is wrong!");
alert("* Check for false");
alert(getLightBulbStatusDisplayString(false) === "Something is wrong!");
alert("* Check for null");
alert(getLightBulbStatusDisplayString(null) === "Something is wrong!");

/* ------------------------------------------------
    Exercise Four

    Now you need to write the logic for the entire home to control the lights.

    You have the following Lightbulbs in the house:

    livingRoomLight
    diningRoomLight
    kitchenLight
    frontPorchLight
    bedroomLight

    Your home tells you the following conditions:

    somebodyIsHome
    theyAreWatchingTV
    itIsDarkOutside
    theyAreCooking
    theyWentToBed

    They are all booleans.


    Implement this logic

    If it's dark out, the porch light should be on.  If it's not dark, then it's off.
    If nobody home, then turn all the lights off (except the porch light). 
    If someone is home but they haven't gone to bed, then the living room and dining room lights should be on.
    if someone is cooking, then the kitchen light should be on.
    However, if they are watching TV, then turn off the livingroom and dining room lights.
    
*/

/*
   -------START OF GIVEN CODE - DO NOT EDIT ------------------------------------
   But do read through through this code.  Try to understand what it's doing.
*/

let currentLights = {};
function resetLights() {
  currentLights = {
    livingRoomLight: "off",
    diningRoomLight: "off",
    kitchenLight: "off",
    frontPorchLight: "off",
    bedroomLight: "off"
  };
}

function turnOnLight(lightName) {
  // This turns on a light.
  if (currentLights[lightName]) {
    currentLights[lightName] = "on";
  } else {
    alert("WARNING Incorrect light name! - " + lightName);
  }
}

function turnOffLight(lightName) {
  // This turns off a light.
  if (currentLights[lightName]) {
    currentLights[lightName] = "off";
  } else {
    alert("WARNING Incorrect light name! - " + lightName);
  }
}
/*
   -------END OF GIVEN CODE - DO NOT EDIT ------------------------------------
*/

/* 
   -------YOUR CODE-----------------------------------------------------------
*/
function updateLights(
  somebodyIsHome,
  theyAreWatchingTV,
  itIsDarkOutside,
  theyAreCooking,
  theyWentToBed
) {
  // Write your code here!  You don't need to return anything, just call the given functions
  // You should be using if else statements and the function arguments
  // example of turning a light on
  turnOnLight("livingRoomLight");
  // example of turning off a light
  turnOffLight("livingRoomLight");
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/ alert(
  "-----Tests for Exercise Four-----"
);
alert("* Check if they are all off.");
resetLights();
updateLights(false, false, false, false, false);
alert(
  currentLights.livingRoomLight == "off" &&
    currentLights.diningRoomLight == "off" &&
    currentLights.kitchenLight == "off" &&
    currentLights.frontPorchLight == "off" &&
    currentLights.bedroomLight == "off"
);
alert("* Check that the porch light turns on at night.");
resetLights();
updateLights(false, false, true, false, false);
alert(
  currentLights.livingRoomLight == "off" &&
    currentLights.diningRoomLight == "off" &&
    currentLights.kitchenLight == "off" &&
    currentLights.frontPorchLight == "on" &&
    currentLights.bedroomLight == "off"
);
alert("* Check when somebody is home");
resetLights();
updateLights(true, false, true, false, false);
alert(
  currentLights.livingRoomLight == "on" &&
    currentLights.diningRoomLight == "on" &&
    currentLights.kitchenLight == "off" &&
    currentLights.frontPorchLight == "on" &&
    currentLights.bedroomLight == "off"
);
alert("* Check when they are cooking");
resetLights();
updateLights(true, false, true, true, false);
alert(
  currentLights.livingRoomLight == "on" &&
    currentLights.diningRoomLight == "on" &&
    currentLights.kitchenLight == "on" &&
    currentLights.frontPorchLight == "on" &&
    currentLights.bedroomLight == "off"
);
alert("* Check when they are watching TV");
resetLights();
updateLights(true, true, true, false, false);
alert(
  currentLights.livingRoomLight == "off" &&
    currentLights.diningRoomLight == "off" &&
    currentLights.kitchenLight == "off" &&
    currentLights.frontPorchLight == "on" &&
    currentLights.bedroomLight == "off"
);
alert("* Check when they are in bed");
resetLights();
updateLights(true, false, true, false, true);
alert(
  currentLights.livingRoomLight == "off" &&
    currentLights.diningRoomLight == "off" &&
    currentLights.kitchenLight == "off" &&
    currentLights.frontPorchLight == "on" &&
    currentLights.bedroomLight == "on"
);
