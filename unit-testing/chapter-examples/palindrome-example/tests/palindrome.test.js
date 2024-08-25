const isPalindrome = require('../palindrome.js');

describe("testing isPalindrome", function()
{
    test("should return true for a single letter", function(){
        expect(isPalindrome("a")).toBe(true);
    })
    test("should return true for a single letter repeated", function() {
        expect(isPalindrome("aaa")).toBe(true);
     });
     test("should return true for a simple palindrome", function() {
        expect(isPalindrome("aba")).toBe(true);
     });
     test("should return true for a longer palindrome", function() {
        expect(isPalindrome("racecar")).toBe(true);
     });
     test("should return false for a two different letter", function(){
        expect(isPalindrome("ab")).toBe(false);
    })
    test("should return false for a word that is not a palindrome", function() {
        expect(isPalindrome("launchcode")).toBe(false);
     });
     test("should return false for a palindrome that is not case equal", function() {
        expect(isPalindrome("abA")).toBe(false);
     });
     test("should return false for a string", function() {
        expect(isPalindrome("rso many dynamos")).toBe(false);
     });
     test("should consider the empty string a palindrome", function() {
        expect(isPalindrome("")).toBe(true);
     });

    
    });
