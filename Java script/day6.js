//.length:Returns the length of the string.
let len = ("hi i am javascript")
console.log(len.length);

//.toUpperCase):Converts the entire string to uppercase.
let up = ("india")
console.log(up.toUpperCase());

//.toLowerCase):Converts the entire string to lowercase
let jf =("MAN")
console.log(jf.toLowerCase());


//.charAt(Index):Returns the character
let low = ("hello world")
console.log(low.charAt(7));


// indexof(): Returns the index of the first occurrence of the specified substring.
let ind=("javascript")
console.log(ind.indexOf("a"));


//lastIndexOf:Returns the index of the last occurrence of the specified substring.
let last = ("hello welcome to earth")
console.log(last.lastIndexOf("h"));

// includes(): Checks if the string contains the specified substring.
let inc = ("hello java welcome to coding place")
console.log(inc.includes("java"));


//slice () Extracts a section of the string
let sli = 
("hello sir")
console.log(sli.slice(-3));

//substring : is use to take the particular word in sentance starting 0

let substring = ("hello world")
console.log(substring.substring(0,4));

//.replace():Replaces the specified value with a new value.
let rep= ("hello i'm in kovai")
console.log(rep.replace("kovai","chennai"));

//.replaceAll: this function use to replace all the same words in the para
let all=("hi i am java and java is a coding language")
console.log(all.replaceAll("java" , "javascript"));

//.trim():Removes whitespace from both ends of the string.
let tr = ("           hey world             ")
console.log(tr.trim());


//.split():Splits the string into an array of substring
let spl = ("hello chennai")
console.log(spl.split("").join(""));
 
//.join():joins the string into an array of substring
//let jo = ("h", "e", "l", "l" ,"o", "c", "h", "e", "n", "n", "a", "i")
//console.log(jo.join(""));


//.concat():Joins two or more strins
let con = ("gajendaran")
console.log(con.concat(".s"));

//.startswith(): Checks if the string starts with the specified substring.
let str = ("karthik")
console.log(str.startsWith("k"));

// .endswith():Checks if the string ends with the specified substring.
let atv =("mathan")
console.log(atv.endsWith("a"));
