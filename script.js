let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft +=100;
})
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -=330;
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft +=330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -=330;
})


const music = new Audio('Audio/1.mp3');
// music.play();
const songs =[
    {
        id:1,
        SongName:`Faded <br>
        <div class="subtitle">Alan Walker</div>`,
        poster : "poster/1.jpg"
    },
    {
        id:2,
        SongName:`Chaleya <br>
        <div class="subtitle">Aa chaliyea</div>`,
        poster : "poster/2.jpg"
    },
    {
        id:3,
        SongName:`Heeriye<br>
        <div class="subtitle">Heeriye</div>`,
        poster : "poster/3.jpg"
    },
    {
        id:4,
        SongName:`Apna bana le<br>
        <div class="subtitle">Apna bana le</div>`,
        poster : "poster/4.jpg"
    },
    {
        id:5,
        SongName:`Guli mata<br>
        <div class="subtitle">guli mata</div>`,
        poster : "poster/5.jpg"
    },
    {
        id:6,
        SongName:`Dil jhoom<br>
        <div class="subtitle">Dil jhoom</div>`,
        poster : "poster/6.jpg"
    },
    {
        id:7,
        SongName:`Zihaal-e-Miskin<br>
        <div class="subtitle">zihaal-e-miskin</div>`,
        poster : "poster/7.jpg"
    },
    {
        id:8,
        SongName:`Raate lambiyan<br>
        <div class="subtitle">Shershaah-Original-Motion-</div>`,
        poster : "poster/8.jpg"
    },
    {
        id:9,
        SongName:`Tum hi ho<br>
        <div class="subtitle">Tum hi ho</div>`,
        poster : "poster/9.jpg"
    },
    {
        id:10,
        SongName:`Ram Siya Ram <br>
        <div class="subtitle">Ram siya ram Adipurush</div>`,
        poster : "poster/10.jpg"
    },
    {
        id:11,
        SongName:`Dil me chupa lunga<br>
        <div class="subtitle">Dil me chupa lunga</div>`,
        poster : "poster/11.jpg"
    },
    {
        id:12,
        SongName:`Thoda Thoda pyaar<br>
        <div class="subtitle">TThoda thoda pyaar huaa tumse</div>`,
        poster : "poster/12.jpg"
    },
    {
        id:13,
        SongName:`Saiyaara<br>
        <div class="subtitle">Saiyaara Eak tha Tiger</div>`,
        poster : "poster/13.jpg"
    },
    {
        id:14,
        SongName:`Shape of you <br>
        <div class="subtitle">Shape of you by ed shereen</div>`,
        poster : "poster/14.jpg"
    },
    {
        id:15,
        SongName:`On the floor <br>
        <div class="subtitle">Shakira shakira</div>`,
        poster : "poster/15.jpg"
    },
    {
        id:16,
        SongName:`Shakira hips dont lie <br>
        <div class="subtitle">Shakira</div>`,
        poster : "poster/16.jpg"
    },
    {
        id:17,
        SongName:`Jug jug jeeva<br>
        <div class="subtitle">jug jug jeeva</div>`,
        poster : "poster/17.jpg"
    },
    {
        id:18,
        SongName:`Jtni dafa<br>
        <div class="subtitle">Jitni dafa</div>`,
        poster : "poster/18.jpg"
    },
    {
        id:19,
        SongName:`Chennai Express <br>
        <div class="subtitle">chenai nai nai express</div>`,
        poster : "poster/19.jpg"
    },
    {
        id:20,
        SongName:`Humnavav<br>
        <div class="subtitle">chennai nai nai nai express</div>`,
        poster : "poster/20.jpg"
    },
]
Array.from(document.getElementsByClassName('song_item')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs [i].SongName
});

let masterplay=document.getElementById('masterplay');
let wave=document.getElementById('Wave');

masterplay.addEventListener('click',() => {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill')
        masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill')
        masterplay.classList.remove('bi-pause-fill');
    }
});

    const makeAllplay= () => {
        Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
            el.classList.add('bi-play-circle-fill');
            el.classList.remove('bi-pause-circle-fill');
    })
}
    const makeAllBackground = () => {
        Array.from(document.getElementsByClassName('song_item')).forEach((el) => {
            el.style.background = 'rgb(105,105,105,.0)';
    })
}


let index = 0;
let poster_masterplay =document.getElementById('poster_master_play')
let title =document.getElementById('title')

Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src =`Audio/${index}.mp3`;
        poster_masterplay.src=`poster/${index}.jpg`
        music.play();
        // console.log(index);
        masterplay.classList.remove('bi-play-fill')
        masterplay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index ;
        });

        songTitles.forEach(elss =>{
            let {SongName} =elss;
            title.innerHTML=SongName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.background="rgb(105,105,105,.1)";

        makeAllplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('current_start');
let currentEnd = document.getElementById('current_End');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;    
    let music_dur = music.duration;    
    // console.log(music_dur);



    let min1 = Math.floor(music_dur / 60);
    let sec1 =Math.floor(music_dur % 60);

    // console.log(min1); 

    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    
    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) *100)

    seek.value = progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}% `
});

seek.addEventListener('change',() => {
    music.currentTime = seek.value*music.duration /100 ;
});

let vol_icon = document.getElementById('vol_icon')
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.volume = 2)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');   
    }
    if(vol.value > 2 || vol.value < 50){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    if(vol.Value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left =`${vol_a}%` ;

    music.volume = vol_a/100 ;
})


let back = document.getElementById('back')
let next = document.getElementById('next')

back.addEventListener('click' , () =>{
        index = index-1;
        if (index < 1){
            index = 20 ;
            // index = Array.from(document.getElementsByClassName(song_item)).length;
            // song_item
        }
        music.src =`Audio/${index}.mp3`;
        poster_masterplay.src=`poster/${index}.jpg`
        music.play();
        // console.log(index);
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {SongName} =elss;
            title.innerHTML=SongName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.background="rgb(105,105,105,.1)";

        makeAllplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', () =>{
    index = index+1;
    if (index > 20){
        index = 1 ;
        // index = Array.from(document.getElementsByClassName(song_item)).length;
        // song_item
    }
    music.src =`Audio/${index}.mp3`;
    poster_masterplay.src=`poster/${index}.jpg`
    music.play();
    // console.log(index);
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {SongName} =elss;
        title.innerHTML=SongName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background="rgb(105,105,105,.1)";

    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})