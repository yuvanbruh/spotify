// console.log("this iss")

// let songIndex=0;
// let song=new Audio("songs/1.mp3");
// let masterplay = document.getElementById('masterplay')
// let myProgressBar=document.getElementById('myProgressBar')
// let gif=document.getElementById('gif')

// let lalaland= document.getElementById('lalaland')



// let songs=[
//     {songName:"let me love you ", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"}
// ]

// masterplay.addEventListener('click',()=>{
//     if(song.paused || song.currentTime <=0){
//         song.play()
//         masterplay.classList.remove('fa-circle-play');
//         masterplay.classList.add("fa-circle-pause");
//         lalaland.style.opacity=1
//     }
//     else{
//         song.paused()
//         masterplay.classList.remove('fa-circle-pause');
//         masterplay.classList.add("fa-circle-play");
//         lalaland.style.opacity=0

//     }




// })


// // gif.addEventListener('click', ()=>{
// //     if(song.paused || song.currentTime<=0){
// //         song.play()
// //         gif.classList.remove('fa-circle-play');
// //         gif.classList.add("fa-circle-pause");
// //     }
// //     else{
// //         song.pause()
// //         gif.classList.remove('fa-circle-pause');
// //         gif.classList.add("fa-circle-play");

// //     }

// //     }
// // )




// song=document.addEventListener('timeupdate',()=>{
//     console.log('timeupdate')
// })

// console.log("hello there ")
let songIndex=0
// let song = new Audio('songs/1.mp3')
let song =new Audio('The-Neighbourhood-Sweater-Weather-(RawPraise.ng).mp3')
//  let songs=[
//     {
//         songName:"let me love you", filePath:'songs/1.mp3', coverPath:"covers/1.jpg",
//         songName:"city", filePath:'songs/2.mp3', coverPath:"covers/2.jpg",
//         songName:"chelsea", filePath:'songs/3.mp3', coverPath:"covers/3.jpg",
//         songName:"want it hard", filePath:'songs/4.mp3', coverPath:"covers/4.jpg",
//         songName:"hard me ", filePath:'songs/5.mp3', coverPath:"covers/5.jpg",
//         songName:"vampire", filePath:'songs/6.mp3', coverPath:"covers/6.jpg",
//         songName:"summer time sadness", filePath:'songs/7.mp3', coverPath:"covers/7.jpg",
//         songName:"luis diaz", filePath:'songs/8.mp3', coverPath:"covers/8.jpg"
//     }

//  ]

 let yuvan= document.getElementById('masterplay')
 masterplay.addEventListener('click',()=>{
    if(song.paused || song.currentTime<=0){
        song.play()
        yuvan.classList.remove("fa-circle-play")
        yuvan.classList.add("fa-circle-pause")

    }
    else{
        song.pause()
        yuvan.classList.remove("fa-circle-pause")
        yuvan.classList.add("fa-circle-play")
    }

 })

//  let virat=document.getElementById('lalaland')
//  lalaland.addEventListener('click',()=>{
//     if(song.paused || song1.currentTime<=0){
//         song.play()
//         virat.classList.remove("fa-circle-play")
//         virat.classList.add("fa-circle-pause")
//     }
//     else{
//         song1.pause()
//         virat.classList.remove("fa-circle-pause")
//         virat.classList.add("fa-circle-play")
//     }

//  })


// let music= new Audio('The-Neighbourhood-Sweater-Weather-(RawPraise.ng).mp3')

// let radacanu=document.getElementById('cool')
// radacanu.addEventListener('click',()=>{
//     music.play()
// }) 
// let emma= new Audio("The-Neighbourhood-Sweater-Weather-(RawPraise.ng).mp3")
// let rohit = document.getElementById('mess')
// rohit.addEventListener("click",()=>{
//  if(emma.paused || emma.currentTime<=0){
//     emma.play()
//     rohit.classList.remove('fa-circle-play')
//     rohit.classList.add('fa-circle-pause')
//  }
//  else{
//     emma.pause()
//     rohit.classList.remove('fa-circle-pause')
//     rohit.classList.add('fa-circle-play')
//  }

// })


// let coin= document.getElementById('solidworks')
// solidworks.addEventListener('click',()=>{
//      song.play()
// })

song.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})
song.addEventListener('timeupdate',()=>{
    console.log('timeupdate')

})


develop= parseInt((song.currentTime/song.duration)*100)
console.log('develop')

myProgressBar.value= develop;
myProgressBar.value=develop;

myProgressBar.addEventListener('change',()=>{
    song.currentTime=myProgressBar.value * song.duration/100
})

// let olivia=document.getElementById('track')
// track.addEventListener('click',()=>{
//     if(song.paused || song1.currentTime<=0){
//         song.play()
//         olivia.classList.remove('fa-circle-play')
//         olivia.classList.add("fa-circle-pause")

//     }
//     else{
//         olivia.classList.remove('fa-circle-pause')
//         olivia.classList.add("fa-circle-play")

//     }
// })
// let songItems= Array.from(document.getElementById('u'))
// songItems.forEach((element,i)=>{

//     element.geElementsByTagName("img")[0].src=song[i].coverPath
//     element.geElementByClassName("txt")[0].innerText=song[i].txt

// })

const makeAllPlays=()=>{


 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-circle-play')
    element.classList.add('fa-circle-pause')
 })

}



 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e)
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        song.src=`The-Neighbourhood-Sweater-Weather-(RawPraise.ng).mp3`
        song.currentTime=0
        song.play()
        yuvan.classList.remove("fa-circle-play")
        yuvan.classList.add("fa-circle-pause")


    })

 })

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    song.src=`songs/${songIndex+1}.mp3`
    song.currentTime=0
    song.play()
    yuvan.classList.remove("fa-circle-play")
    yuvan.classList.add("fa-circle-pause")
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    song.src=`songs/${songIndex+1}.mp3`
    song.currentTime=0
    song.play()
    yuvan.classList.remove("fa-circle-play")
    yuvan.classList.add("fa-circle-pause")
})







