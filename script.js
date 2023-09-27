console.log("welcome aj");
let index =0;
let audio = new Audio('song/1.mp3');
let play1 =document.getElementById('play1');
let progressbar=document.getElementById('progressbar');
musiccon1= Array.from(document.getElementsByClassName('musiccon'));
let song = [
    {songname:"blast", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songname:"lofi chill", filePath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songname:"happy travel Pop", filePath:"song/3.mp3",coverPath:"cover/3.jpg"},
    {songname:"future bass vlog", filePath:"song/4.mp3",coverPath:"cover/4.jpg"},
    {songname:"black box", filePath:"song/5.mp3",coverPath:"cover/5.jpg"},
    {songname:"Cyberpunk", filePath:"song/6.mp3",coverPath:"cover/6.jpg"}
]
musiccon1.forEach((element, i)=>{
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src= song[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText= song[i].songname;
})
//play/pause
play1.addEventListener('click', ()=>{
    if(audio.paused || audio.currentTime<=0){
       audio.play();
       play1.classList.remove("fa-play-circle");
       play1.classList.add("fa-pause-circle");

    }
    else{
        audio.pause();
        play1.classList.remove("fa-pause-circle");
        play1.classList.add("fa-play-circle");
    }
})
audio.addEventListener('timeupdate',()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    progressbar.value = progress;
    console.log(progress);
})
progressbar.addEventListener('change', ()=>{
    audio.currentTime = progressbar.value*audio.duration/100;
})
const makeAllplay = ()=>{
   Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
    element.classList.add('fa-play-circle');
    element.classList.remove('fa-pause-circle');
   })
   
}

Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
    console.log(e.target.id);
    makeAllplay();
    index = parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audio.src = `song/${index}.mp3`;
    audio.currentTime = 0;
    audio.play();
    play1.classList.remove("fa-play-circle");
    play1.classList.add("fa-pause-circle");
    })
}) 






document.getElementById("previous").addEventListener('click',()=>{
    if(index>6){
        index= 0 ;
    }
    else{
        index -= 1;    
    }
    audio.src = `song/${index}.mp3`;
    audio.currentTime = 0;
     audio.play();
     play1.classList.remove("fa-play-circle");
     play1.classList.add("fa-pause-circle");
})
document.getElementById("next").addEventListener('click',()=>{
    if(index>6){
        index= 0 ;
    }
    else{
        index += 1;
        
    }
    audio.src = `song/${index}.mp3`;
    audio.currentTime = 0;
     audio.play();
     play1.classList.remove("fa-play-circle");
     play1.classList.add("fa-pause-circle");
     
})