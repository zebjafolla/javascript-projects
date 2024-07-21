const processor = require("../processor.js");
const check = require("../check.js");
const input = "9701::<487297403495<720912>"

describe("transmission processor", function() {
  test("make sure string is returned as object", function(){
    let result = processor(input);
    expect(typeof result).toBe("object");
  })
  test("make sure transmission includes '::' characters", function(){
    let result = check(input);
    expect(result).toBe(true);
  })
  test("make sure object has an 'id' key which will be everything before the '::'", function(){
    let result = processor(input)
    {
      expect(result.id).not.toBeUndefined();
    }
  })
  test("make sure id key is of type Number", function(){
    let result = processor(input)
    {
      expect(typeof result.id).toBe("number");
    }
  })
  test ("transmission should contain raw data which is everything after the '::'", function(){
    let result = processor(input)
    
      expect(result.rawData).not.toBeUndefined()
    
  })
  test("rawData part of transmission should start and end with '< >'", function(){
    let result = processor(input);
    expect(result.rawData).not.toBe(-1);
  })
  test("trim leading and trailing white spaces from transmission", function(){
    let result = processor(input)
    expect(result.trimmed).toBe(true);
  })
  test("if transmission id is anything but a number", function(){
    let result = processor(input)
    {
      expect(result.id).not.toBe(NaN);
    }
  })
  test("more than one '::' found in transmission", function(){
    let result = processor(input)
    expect(result).not.toBe(`second -1 ` + -1);
  })
  test("make sure to remove starting '< >' from the beginning and end of the raw Data", function(){
    let result = processor(input);
    expect(typeof result.rawData).toBe("number");
  })
  test("make sure nothing but numbers are present in between the '< >' symbols", function()
    {
      let result = processor(input)
      expect(result.rawData).not.toBe(-1)
    }
  )
   //  TODO: put tests here
 
 });
