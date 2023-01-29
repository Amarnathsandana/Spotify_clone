console.log("Welcome guys");

//Intialize variables

let songIndex=0;
//initialize audio element
let audioElement = new Audio('songs/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Mortals" ,filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Shape of you",filepath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Stiches",filepath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Despacito",filepath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Rise of legends",filepath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Sing for the Moment",filepath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Lose yourself",filepath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Slim shady",filepath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Enemy",filepath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"It's my Life",filepath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

songItems.forEach((element,i)=>{
document.getElementsByTagName("img")[i].src=songs[i].coverPath;
document.getElementsByClassName("songName")[i].innerText=songs[i].songName;
})



// audioElement.play();

//handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    //update progressbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById("next").addEventListener('click',()=>{

if(songIndex>=9)
{
    songIndex=0;
}
else{
    songIndex+=1;
}

    audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})

document.getElementById("previous").addEventListener('click',()=>{

    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    
        audioElement.src=`songs/${songIndex+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    
    })


