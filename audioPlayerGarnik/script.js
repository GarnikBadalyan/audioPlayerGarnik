let data = {
    title: [
        "idea 10",
        "idea 22",
        "jamanak",
        "Jamie Duffy - Solas",
        "Adele - Skyfall",
        "I Wanna Be Yours",
        "Mariage d'Amour ",
        "Passacaglia",
        "One Of The Girls ",
        "Way Down We Go",
    ],
    song: [
        "music/idea-10.mp3",
        "music/idea-22-gibran-alcocer-piano-music-pianist.mp3",
        "music/jamanak.mp3",
        "music/Jamie Duffy - Solas (Official Video) (64).mp3",
        "music/Adele - Skyfall (Lyrics) (64).mp3",
        "music/I Wanna Be Yours (64).mp3",
        "music/Mariage d'Amour (64).mp3",
        "music/Passacaglia – Handel-Halvorsen (Piano Solo) (64).mp3",
        "music/The Weeknd, JENNIE & Lily Rose Depp - One Of The Girls (Official Audio) (64).mp3",
        "music/Vietsub _ Way Down We Go - KALEO _ Lyrics Video (64).mp3",
    ],
    poster: [
       "https://i.scdn.co/image/ab67616d0000b273d2cc3146f7e4bdcd2fb7ac8f",
       "https://i1.sndcdn.com/artworks-gCvbMz54SchDvHNm-XJJCig-t500x500.png",
       "https://ter-hambardzum.net/wp-content/uploads/2016/03/Jamanak.jpg",
       "https://i.ytimg.com/vi/ZT0aOrjIcVE/maxresdefault.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvU_Ed6JPArFut65W_pKNhxaxtAfJzZ7ypw&s",
       "https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZ5bEN3rClPEtflZ8o_CYp9bMppF9zwW5MQu8LwhgZA&s",
       "https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
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
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play()
}
function PlayOrPauseSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    }
    else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.width = position * 100 + "%"
    convertTime(song.currentTime)
    if (song.ended) {
        next()
    }
})

function convertTime(seconds) {
    currentTime = document.getElementsByClassName("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent = min + ":" + sec
    totalTime(song.duration)
}
function totalTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent += " / " + min + ":" + sec
}
function next() {
    let play = document.getElementById("play")
    play.src = "images/pause.png"


    currentSong++

    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong()
}


function pre() {
    let play = document.getElementById("play")
    play.src = "images/pause.png"

    currentSong--
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong()
}

function mute() {
    let mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    }
    else {
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}
function decrease() {
    song.volume -= 0.2
    // if(song.volume <= 0.2){
    //     song.volume = 0
    //     mute.src = "images/volume.png"
    // }
}

function increase() {
    song.volume += 0.2
    // if(song.volume > 2){
    //     song.volume = 2
    //     mute.src = "images/volume.png"
    // }
}

