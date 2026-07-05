const sumAll = function(num1,num2) {
    if (Number.isInteger(num1) && num1>0 && Number.isInteger(num2) && num2>0)
    {
        let sum = 0
        if (num1 < num2)
        {
            for (i = num1; i <= num2; i++)
            {
                sum+=i
            }
        }
        else if (num1 > num2)
        {
            for (i = num2; i <= num1; i++)
            {
                sum+=i
            }
        }
        return sum
    }
    else
    {
        return `'ERROR'`
    }
};

// Do not edit below this line
module.exports = sumAll;
