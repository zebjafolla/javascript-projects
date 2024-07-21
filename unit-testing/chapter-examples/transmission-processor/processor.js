// console.log(processor("9701::<489584872710>"));
function processor(transmission){
    let array = transmission.split("::")
    let rawData = array[1];
    // console.log(rawData[0]);
    // console.log(rawData[rawData.length - 1]);
    
    if (!rawData[0] === "<" && !rawData[rawData.length - 1] === ">" )
    {
        return {
            id : Number(array[0]),
            rawData : -1,
            trimmed : true
        }
    }
    // console.log(array[2]);
    if(array[2] !== undefined)
    {
        return {
            id : Number(array[0]),
            rawData : -1,
            trimmed : true
        }
    }
    if (transmission[0] === " " || transmission[transmission.length - 1] === " ")
    {
        // console.log("trimmed")
        
            return {
                id : Number(array[0]),
                rawData : Number(rawData),
                trimmed : false
            }
        }
    
    // console.log(rawData);
    let cleanDataArray = rawData.split("");
    // console.log(rawData);
    cleanDataArray.pop();
    cleanDataArray.shift();
    rawData = Number(cleanDataArray.join(""));
    if (typeof rawData !== "number")
        {
            return {
                id : Number(array[0]),
                rawData : -1,
                trimmed : true
            }
        }
    return {
        id : Number(array[0]),
        rawData : Number(rawData),
        trimmed : true
    }

}

// console.log(processor("9>701::<4895848::72710>"));
module.exports = processor;
