let buttons = document.querySelectorAll("button")
let clue = document.querySelector("#clue")
document.body.style.backgroundColor = "blue"
let r = Math.round(Math.random() * 10)
console.log(r)
function guess(n) {
    console.log(n)
    if (n>r) {
        clue.innerText = "Try Lower"
    }
    else if(n==r) {
        clue.innerText = "You Got It!"
        r = Math.round(Math.random() * 10)
    }
    else{
        clue.innerText = "Try Higher"
    }
}
for(let i=0;i<buttons.length;i++) {
    let button = buttons[i]
    button.addEventListener("click", function() {guess(i)})
}

function crazyBackground() {
    const colors = ['red', 'orange', 'yellow','green']
    let offset = 0
    const getColorSet = () => {
        offset++
        if (offset >= colors.length) offset = 0
        return [...colors.slice(offset), ...colors.slice(0, offset)].join(', ')
    }

    const getRandomColorSet = () => {
        const chars = "0123456789ABCDEF"
        const set = []
        for (let i = 0; i < 7; i++) {
            let hex = "#"
            for (let j = 0; j < 6; j++) {
                hex += chars[Math.floor(Math.random()*chars.length)]
            }
            set.push(hex)
        }
        return set.join(', ')
    }

    const bStyle = document.body.style
    bStyle.transition = 'all 500ms'
    bStyle.height = '100vh'

    const setBg = () => {
        bStyle.backgroundImage = `linear-gradient(90deg, ${getRandomColorSet()})`
    }

    setInterval(setBg, 50);
}

crazyBackground()