let myQuotes = [
    "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand. -Vince Lombardi",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up. -Thomas A.Edison",
    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. -Pele",
    "Only those who will risk going too far can possibly find out how far one can go. -T.S. Eliot",
    "The greatest test of courage on Earth is to bear defeat without losing heart. -Robert Green Ingersoll",
    "The only failure is not to try. -George Clooney"
]

const genQuoteBtn = document.getElementById("genQuote")
let quote = document.getElementById("rdmquote")
let tDate = document.getElementById("date")
console.log(tDate)
let tTime = document.getElementById("time")
console.log(tTime)


genQuoteBtn.addEventListener("click", function(){
    let randomQuote = getRandomQuote()
    quote.textContent = myQuotes[randomQuote]
})

function getRandomQuote(){
    return Math.floor(Math.random()*myQuotes.length)
}


//Dealing with date and time
//time
function startTime(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let ampm = h > 12 ? 'PM' : 'AM'
    h = h % 12
    h = h ? h : 12
    m = m < 10 ? '0'+m : m
    let totalTime = `${h}:${m} ${ampm}`
    tTime.innerHTML = totalTime
    const t = setTimeout(function (){
        startTime()
    },500)
}


//date
function startDate(){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const d = new Date()
    const fullDate = `${days[d.getDay()]} | ${[d.getMonth()+1]}/${d.getDate()}/${d.getFullYear()}`
    tDate.innerHTML = fullDate
}






















