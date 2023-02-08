function fizzbuzz()
{
    for(let i=1;i<=100;i++)
    {
        // if div by 15 => fizz buzz
        if(i % 15 === 0)
        {
            process.stdout.write('fizzbuzz ')
        }
        // if divisible by 3 => fizz
        else if(i % 3 === 0)
        {
            process.stdout.write('fizz ')
        }
        // if div by 5 => buzz
        else if(i % 5 === 0)
        {
            process.stdout.write('buzz ')
        }   
        // otherwise
        else
        {
            process.stdout.write(i + " ")
        }
        console.log(i);
    }
}
fizzbuzz()