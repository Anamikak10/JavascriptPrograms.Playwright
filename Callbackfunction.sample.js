function display(result)
{
    console.log("the result is"+result)
}
function findaverage(mark1,mark2,mark3, callback)
{
    let average = (mark1 + mark2 + mark3) / 3;
    callback(average);
}
findaverage(50, 80, 90, display)
function findsum(mark1, mark2, mark3, callback)
{
    let sum = mark1 + mark2 + mark3
    callback(sum)
}
findsum(50, 80, 90, display)