let audioElement=new Audio(`songs/1.mp3`)
let songItem=Array.from(document.getElementsByClassName("songItem"))
let songIndex=0
let masterPlay=document.getElementById("masterPlay")
let previous =document.getElementById("previous")
let next =document.getElementById("next")
let masterSongName=document.getElementById("masterSongName")
let myProgressBar=document.getElementById("myProgressBar")

let songs=[

    {songName: "prettry girl", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "pretty boy", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "sweather weather", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "muse", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "how you doin", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "oke oka", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "lokham", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "high", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Teri kasam", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "im cahndker", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItem.forEach((e,i)=>{
    e.getElementsByClassName("songName")[0].innerText=songs[i].songName
    e.getElementsByTagName("img")[0].src=songs[i].coverPath
})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.src<0){
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")

    }
})

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
    songIndex=parseInt(e.target.id)
    console.log(songIndex)
    if(audioElement.paused || audioElement.src<0){
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play()
        masterSongName.innerText=songs[songIndex].songName
    }
    else{
        audioElement.pause()
        e.target.classList.remove("fa-pause-circle")
    e.target.classList.add("fa-play-circle")
    masterPlay.classList.remove("fa-pause-circle")
    masterPlay.classList.add("fa-play-circle")
    }
    })
})
next.addEventListener("click",(i)=>{
    if(songIndex<0){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})

previous.addEventListener("click",(i)=>{
    if(songIndex<0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.play()
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})
