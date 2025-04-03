//   Q - 1 

let Even = document.querySelector("#Even")

for(let i=1;i<=50;i++){
    
    if(i%2 == 0){
       Even.innerText += i
       Even.innerText += "," 
    }
}


// Q - 2



let table = document.querySelector("#table")
let num = 5
for(let i=1;i<=10;i++){
  table.innerHTML += num, "*", i , "=" ,num*i
  table.innerHTML += " * "
  table.innerHTML += i
  table.innerHTML += " = "
  table.innerHTML += num*i
  table.innerHTML += "<br>"

}


// Q - 3 

let factorial = document.querySelector("#factorial")

let Num = 40

for(let i=1;i<=Num;i++)
{
    if(Num % i == 0){
        factorial.innerHTML += i
        factorial.innerHTML += "<br>"
    }
}

// Q -4 


let Q_4 = document.querySelector("#Q_4")
let m3 = "Fizz"
let m5 = "Buzz"
for(let i=1;i<=100;i++){
    if(i % 3 == 0){
        Q_4.innerText += m3
    }
    else if(i % 5 == 0){
      Q_4.innerHTML += m5
    }
    else{
        Q_4.innerHTML += i
    }
    
    Q_4.innerHTML += "<br>"
}


// Q - 5

let Q_5 = document.querySelector("#Q_5")

let sum = 0

for(let i=1;i<=100;i++){
    
    
     Q_5.innerHTML += i
     Q_5.innerHTML += " + "
    sum += i
}
Q_5.innerHTML += " = "
Q_5.innerHTML  += sum

// Q - 6

let Q_6 = document.querySelector("#Q_6")

let cube = 0

for (let i =1 ; i<=10;i++){
    Q_6.innerHTML += i
    Q_6.innerHTML += "*"
    Q_6.innerHTML += i
    Q_6.innerHTML += "*"
    Q_6.innerHTML += i
    Q_6.innerHTML += " = "
    Q_6.innerHTML += i*i*i

    Q_6.innerHTML += "<br>"
    
}


// Q - 7 
let Q_7 = document.querySelector("#Q_7")
let sumOfOdd = 0

for(let i=1;i<=20;i++){
    if(i % 2 != 0){
        Q_7.innerHTML += i
        Q_7.innerHTML += "+"

      sumOfOdd += i
    }
}
Q_7.innerHTML += " = "
Q_7.innerHTML += sumOfOdd


// Q - 8 

let Q_8 = document.querySelector("#Q_8")

let sumOfDivisible = 0

for(let i=1;i<=100;i++){
    if(i % 3 == 0){
        Q_8.innerHTML += i
        Q_8.innerHTML += "+"

      sumOfDivisible += i
    }
}
Q_8.innerHTML += " = "
Q_8.innerHTML += sumOfDivisible

// Q - 9

let Q_9 = document.querySelector("#Q_9")

let sumOfSquares = 1

for(let i=1;i<=10;i++){
    sumOfSquares *= i
    Q_9.innerHTML += i
    Q_9.innerHTML += "*"
   
}

Q_9.innerHTML += " = "
Q_9.innerHTML += sumOfSquares


// Q -10 

let Q_10 = document.querySelector("#Q_10")

let number  = 10


while(number >= 1){
    Q_10.innerHTML += number
    Q_10.innerHTML +=","
    number--
}


// Q - 11 

let Q_11 = document.querySelector("#Q_11")

let number2 = 1;
// console.log(number)
Q_11.innerHTML += number2
Q_11.innerHTML += ","

while (number2 <= 1000) {
    number2 *= 2;
    Q_11.innerHTML += number2
    Q_11.innerHTML += ","
    // console.log(number)
}
Q_11.innerHTML += "          <span>The final value :-</span> "
Q_11.innerHTML += number2


// Q -12 

let Q_12 = document.querySelector("#Q_12")

let number3 = 1;

while (number3 <= 100) {
    if(number3 % 2 == 0){
        Q_12.innerHTML += number3
        Q_12.innerHTML += ","
    }
    number3++
}

// Q - 13

let Q_13 = document.querySelector("#Q_13")

let numberForDivisible = 1

while (numberForDivisible <= 90) {
    if(numberForDivisible % 3 == 0 && numberForDivisible % 5 == 0){
        Q_13.innerHTML += numberForDivisible
        Q_13.innerHTML += ","
    }
    numberForDivisible++
}

// Q -14 

let Q_14 = document.querySelector("#Q_14")

let numDoWhile = 1

do{
    Q_14.innerHTML += numDoWhile
    Q_14.innerHTML += ","
    numDoWhile++
}while(numDoWhile <= 10)