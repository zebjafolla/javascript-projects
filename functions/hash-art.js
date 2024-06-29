function makeLine(num, char = "#")
{
    let hold = "";
    for(let i = 0; i < num; i++)
        {
            hold += char
        }
    return hold;
}
console.log(makeLine(5, "&"));
console.log("-------------------")

function makeSquare(num, char = "#")
{
    let hold = "";
    for(let i = 0; i < num; i++)
    {
        for (let i = 0; i < num; i++)
        {
            hold += char
        } 
        if (i !== num)
        {
            hold += "\n";
        }
        else 
        {
            break;
        }
            
    }
    return hold;
}
console.log(makeSquare(5, "$"));
        
console.log("-------------------")

function makeRectangle(width, height, char = "#")

{
    let hold = "";
    for(let i = 0; i < height; i++)
        {
            for (let i = 0; i < width; i++)
                {
                    hold += char
                } 
                if (i !== height)
                    {
                        hold += "\n";
                    }
                    else 
                    {
                        break;
                    }
                    
                }
                return hold;
            }
            console.log(makeRectangle(5, 10, "*"));
            
            console.log("-------------------")
            function makeDownwardStairs(height, char = "#")
            {
                let hold = "";
                let flightStart = height - (height - 1);
                for( let i = 0; i < height; i++)
                    {
                        
                        hold += makeLine(flightStart, char);
                        if(flightStart !== height)
                        {
                            hold += "\n";
                        }
                        flightStart += 1;

                    }
                    
                    return hold;
                }
                console.log(makeDownwardStairs(10, "&"));
                console.log("-------------------");
function makeSpace(num)
{
    let hold = "";
    for (let i = 0; i < num; i++)
    {
        hold += " ";
    }
    return hold;
}


function makeSpaceLine(space, num, char = "#")
{
    let hold = "";
    hold += makeSpace(space);
    hold += makeLine(num, char);
    hold += makeSpace(space)
    return hold;
}
console.log(makeSpaceLine(3, 5, "@"));
console.log("-------------------");
function makeIsoscelesTriangle(height, char = "#")
{
    let k = height - (height - 1);
    let hold = '';
    for (let i = 0; i < height; i++)
    {
        hold += makeSpaceLine(height - i, k, char);
        k = k + 2;
        if(i !== k)
        {
            hold += "\n";
        }
    }
    return hold
}
console.log(makeIsoscelesTriangle(12, "^"));

console.log("-------------------");

function makeDiamond(height, char = "#")
{
    let hold = "";
    hold += makeIsoscelesTriangle(height, char);
    hold += makeIsoscelesTriangle(height, char).split("").reverse().join("").replace("\n", "");
    return hold;
}
console.log(makeDiamond(8, "!"));
                