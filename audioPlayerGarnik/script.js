let data = {
    title : ["Happy Nation", 
             "BRAZILIAN FONK", 
             "BIBI PHONK BR",
            ],
    song :  ["music/Ace Of Base - Happy Nation.mp3",
             "music/.music.mp3", 
             "music/Bibi Babydoll  DJ FKU - BIBI PHONK BR.mp3",
            ],
    poster: [
        "https://upload.wikimedia.org/wikipedia/en/4/4b/Happy_nation.jpg",
        "https://miro.medium.com/v2/resize:fit:1400/1*XrnXihETfw2zHC-T5U5L7Q.jpeg",
        "https://i.ytimg.com/vi/HttkgipRz9Q/maxresdefault.jpg",
            ],
}


let song = new Audio()

window.onload = function () {
    playSong()
}


let currentSong = 0
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main")
    main[0].style.backgroudImage = "url(" + data.poster[currentSong] + ")";
    song.play()
}


function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}


song.addEventListener("timeupdate",function(){
    // console.log(song.currentTime);
    // console.log(song.duration)

    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.width = position * 100 + "%"

    convertTime(song.currentTime)

    if(song.ended){
        next()
    }
})


function convertTime(seconds){
     currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
   
    currentTime[0].textContent = min + ":" + sec
    totalTime(song.duration)
}

function totalTime(seconds){
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    currentTime[0].textContent += "/" + min  + ":" + sec
}

function next(){
    currentSong++
    if(currentSong >= data.song.length){
        currentSong = 0
    }

    playSong()
}

function prev(){
    currentSong--
    if(currentSong < 0){
        currentSong = data.song.length -1
    }

    playSong()
}