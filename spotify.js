let audioElement=new Audio(`songs/1.mp3`)
let masterPlay=document.getElementById("masterPlay")
let previous=document.getElementById("previous")
let next=document.getElementById("next")
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif") 
let masterSongName=document.getElementById("masterSongName")
let songItems=Array.from(document.getElementsByClassName("songItem"))
let songIndex=0


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
songItems.forEach((e,i)=>{
    e.getElementsByTagName("img")[0].src=songs[i].coverPath
    e.getElementsByClassName("songName")[0].innerText=songs[i].songName

})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
    }

    else if(audioElement.currentTime>0){
        audioElement.pause()
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
    }
}
)
// play.addEventListener("click",()=>{
// if(audioElement.paused || audioElement.currentTime<0){
//     audioElement.play()
//     play.classList.remove("fa-pause-circle")

// }
// })
// const makeAllPlays=()=>{
//     Array.from(play).forEach((e)=>{
//         // audioElement.play()
//         e.classList.remove('fa-pause-circle');
//         e.classList.add('fa-play-circle');
//     })
// }
// Array.from(play).forEach((e)=>{
//     e.addEventListener("click",(e)=>{
//         // makeAllPlays()
//         songIndex=parseInt(e.target.id)
//         console.log(songIndex)
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
// audioElement.src=`songs/${songIndex+1}.mp3`
// masterSongName.innerText=songs[songIndex].songName;
// audioElement.play()
// masterPlay.classList.remove('fa-play-circle');
// masterPlay.classList.add('fa-pause-circle');
//     })
// })
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`songs/${songIndex+1}.mp3`
            audioElement.play()
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            masterSongName.innerText=songs[songIndex].songName
            

        
    })
})
document.getElementById("next").addEventListener("click",()=>{
if(songIndex>=9){
    songIndex=0
}
else{
    songIndex+=1
}
audioElement.src=`songs/${songIndex+1}.mp3`
audioElement.play()
masterSongName.innerText=songs[songIndex].songName
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
    
})
document.getElementById("previous").addEventListener("click",(e)=>{
    // songIndex=parseInt(e.target.id)
    // console.log(songIndex)
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex-=1
    }

    audioElement.src=`songs/${songIndex+1}.mp3`
    audioElement.play()
    masterSongName.innerText=songs[songIndex].songName
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
    








