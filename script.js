console.log("hi");
let songIndex = 0;
let audioElement = new Audio('songs/Yaarr Ni Milyaa.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progess');
let gif = document.getElementById("gif");


// song list
let song   =[
    {songname:"Yaar ni milya", filepath :"songs/Yaarr Ni Milyaa.mp3", coverPath:"cover img/covere.jpg" },
    {songname:"Yaar mod do", filepath :"songs/2.mp3", coverPath:"cover img/cover2.jpg" },
    {songname:"high rated gabru", filepath :"songs/3.mp3", coverPath:"cover img/cover3.jpg" },
    {songname:"Fashion", filepath :"songs/4.mp3", coverPath:"cover img/cover4.jpg" },
    {songname:"Lahore", filepath :"songs/5.mp3", coverPath:"cover img/cover5.jpg" },
    {songname:"Daru Party", filepath :"songs/ 6.mp3", coverPath:"cover img/cover6.jpg" },
    {songname:"slowly slowly", filepath :"songs/7.mp3", coverPath:"cover img/cover7.jpg" },
    {songname:"Ishare tera", filepath :"songs/8.mp3", coverPath:"cover img/cover8.jpg" },
    {songname:"Downtown", filepath :"songs/9.mp3", coverPath:"cover img/cover9.jpg" },
    {songname:"Badri ki Dulhania", filepath :"songs/10.mp3", coverPath:"cover img/cover10.jpg" },
    {songname:"Daru vich Pyaar", filepath :"songs/11.mp3", coverPath:"cover img/covere11.jpg" },
]

// play pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play( );
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }

})



// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // seekbar
    progess = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progess);
    myProgressBar.value = progess;



})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

}
)