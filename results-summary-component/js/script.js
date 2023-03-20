fetch("../data.json")
.then(res => res.json())
.then(datas => showInfo(datas))

function showInfo(datas){
    let result = document.querySelector("h1")
    let sum = 0
    let statsTitle = document.querySelectorAll(".box p")
    let statsIcon = document.querySelectorAll(".box img")
    let statsScore = document.querySelectorAll(".box span.secondaryText")
    let statsMax = document.querySelectorAll(".box span.tertiaryText")
    

    for(let i = 0; i < datas.length; i++){
        statsIcon[i].src = datas[i].icon
        statsTitle[i].innerText = datas[i].category
        statsScore[i].innerText = datas[i].score
        statsMax[i].innerText = "/100"
        sum += datas[i].score
    }
    result.innerText = (sum/datas.length).toFixed()
}