// launchcode.test.js code:
const launchcode = require('../index.js');
const input = 60;

describe("Testing launchcode", function(){
  test("This will check to make sure the value of organization is 'nonprofit'", function(){
    expect(launchcode.organization).toBe("nonprofit");
  })
  test("This will check to make sure the value of 'executiveDirector' is 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  })
  test("This will check to make sure the percentageCoolEmployees property value is set to 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe("100");
  })
  test("This will check to make sure that the programsOffered property value is set correctly", function(){
    expect(launchcode.programsOffered.length).toBe(3);
  })
  test("This will check that the output of launchOutput will be 'launch' if the number passed  into it is divisible by 2", function(){
    expect(launchcode.launchOutput(input)).toBe("Launch!");
  })
  test("This will check that when a number passed is only divisible by 3, function will return 'Code!'", function(){
    expect(launchcode.launchOutput(input)).toBe("Code!");
  })
  test("This will check that a number passed is only divisible by 5, function will return 'Rocks!'", function(){
    expect(launchcode.launchOutput(input)).toBe("Rocks!");
  })
  test("This will check that a number passed is divisible by both 2 and 3, function will return 'LaunchCode!'", function(){
    expect(launchcode.launchOutput(input)).toBe("LaunchCode!");
  })
  test("This will check that a number passed is divisible by both 3 and 5, function will return 'Code Rocks!'", function(){
    expect(launchcode.launchOutput(input)).toBe("Code Rocks!");
  })
  test("This will check that the output is 'Launch Rocks' if the number passed is divisble by both 2 and 5", function(){
    expect(launchcode.launchOutput(input)).toBe("Launch Rocks! (CRASH!!!!)");
  })
  test("This will check that the output is 'LaunchCode Rocks!' if the number passed is divisible by 2, 3, and 5", function(){
    expect(launchcode.launchOutput(input)).toBe("LaunchCode Rocks!");
  })
  test("This will check that the output is 'Rutabagas! That doesn't work.' if the number passed is not divisble by 2, 3 or 5", function(){
    expect(launchcode.launchOutput(input)).toBe("Rutabagas! That doesn't work!");
  })
  // Write your unit tests here!

  
});