
export const numberWithCommas = (number:string):string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const isSpliteDouble = (number:string) => {

    if(number.indexOf('.') > -1)
    {
        let first =  number.substring(0,number.lastIndexOf('.'));
        let last = number.substring(number.indexOf('.'),number.length)
        return {first,last}
    }
    else{
        return number
    }
   
}




