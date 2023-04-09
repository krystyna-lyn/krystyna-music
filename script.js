const music = new Audio("audio/1.mp3");

const songs = [
  {
    id: "1",
    songName: `If Your Love<br>
      <div class="subtitle">Nikko Culture</div>`,
    poster: "img/1.jpg",
  },
  {
    id: "2",
    songName: `Let me <br>
      <div class="subtitle">Nikko Culture</div>`,
    poster: "img/2.jpg",
  },
  // all object type
  {
    id: "3",
    songName: `Somethings gone <br><div class="subtitle">Nikko Culture</div>`,
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName: `Live in the Moment <br><div class="subtitle">Nikko Culture</div>`,
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName: `Sunset Vibes <br><div class="subtitle">Dimitris Athanasiou</div>`,
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName: `A beautiful girl <br><div class="subtitle">Dimitris Athanasiou</div>`,
    poster: "img/6.jpg",
  },
  {
    id: "7",
    songName: `Into the light <br><div class="subtitle">Dimitris Athanasiou</div>`,
    poster: "img/7.jpg",
  },
  {
    id: "8",
    songName: `I feel you <br><div class="subtitle">Nikko Culture</div>`,
    poster: "img/8.jpg",
  },
  {
    id: "9",
    songName: `In Your Eyes <br><div class="subtitle">Dimitris Athanasiou</div>`,
    poster: "img/9.jpg",
  },
  {
    id: "10",
    songName: `Deep Emotions <br><div class="subtitle">Dimitris Athanasiou</div>`,
    poster: "img/10.jpg",
  },
  {
    id: "11",
    songName: `Baby Come To Me <br><div class="subtitle">Dimitris Athanasiou</div>`,
    poster: "img/11.jpg",
  },
  {
    id: "12",
    songName: `Romance <br><div class="subtitle">Nando Fortunato</div>`,
    poster: "img/12.jpg",
  },
  {
    id: "13",
    songName: `Believe <br><div class="subtitle">Housenick</div>`,
    poster: "img/13.jpg",
  },
  {
    id: "14",
    songName: `I dont mind <br><div class="subtitle">Anagramma</div>`,
    poster: "img/14.jpg",
  },
  {
    id: "15",
    songName: `Paranoia <br><div class="subtitle">Deep Koliis</div>`,
    poster: "img/15.jpg",
  },
  {
    id: "16",
    songName: `Without You <br><div class="subtitle">Mahmut Orhan</div>`,
    poster: "img/16.jpg",
  },
];

// show popular songs
let pop_songs = document.getElementsByClassName("pop_song")[0];

songs.forEach((element) => {
  const { id, songName, poster } = element;

  let li = document.createElement("li");
  li.classList.add("songItem");

  li.innerHTML = `
                  <div class="img_play" id="${id}">
                      <img src="${poster}" alt="#">
                      <i class="bi playListPlay bi-play-circle-fill" id="${id}"></i>
                  </div>
                  <h5>${songName}</h5>
                  `;
  pop_songs.appendChild(li);
});

// SEARCH BAR

let search_result = document.getElementsByClassName("search_result")[0];

songs.forEach((element) => {
  const { id, songName, poster } = element;

  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;

  card.innerHTML = `
  <img src="${poster}" class="img_search" alt="">
                        <div class="content">
                          ${songName}
                        </div>
                        `;
  search_result.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_result.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];

    let text_value = as.textContent || as.innerHTML;

    let div = document.getElementById(`${index + 1}`);

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";

      div.classList.add("border");
    } else {
      items[index].style.display = "none";
      div.classList.remove("border");
    }

    if (input.value == 0) {
      search_result.style.display = "none";
      div.classList.remove("border");
    } else {
      search_result.style.display = "";
    }
  }
});

let play_song = document.getElementById("play_song");
let btn_play = document.getElementsByClassName("btn-play")[0];

// play Button PLAY
btn_play.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active2");
    btn_play.innerHTML = 'PLAY';
  } else {
    music.pause();
    btn_play.innerHTML = 'PAUSE';
    wave.classList.remove("active2");
  }
});


// play und pause song below
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
  }
});

// Shuffle button

let shuffle = document.getElementsByClassName("shuffle")[0];

shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;
  console.log(a);

  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";

      break;

    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";

      break;
    case "random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";

      break;
  }

  music.addEventListener("ended", (e) => {
    index++;

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;

    //music.play();
    var playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          masterPlay.classList.remove("bi-play-circle-fill");
          masterPlay.classList.add("bi-pause-circle-fill");

          let song_title = songs.filter((el) => {
            return el.id == index;
          });

          song_title.forEach((el) => {
            let { songName } = el;
            title.innerHTML = songName;

            masterPlay.classList.remove("bi-play-fill");
            masterPlay.classList.add("bi-pause-fill");
            wave.classList.add("active2");

            makeAllBackgrounds();
            Array.from(document.getElementsByClassName("songItem"))[
              `${index - 1}`
            ].style.background = "rgb(105, 105, 170, .1)";
            makeAllPlays();
            e.target.classList.remove("bi-play-circle-fill");

            e.target.classList.add("bi-pause-circle-fill");
            wave.classList.add("active2");
          });
        })
        .catch((error) => {
          console.log("error");
        });
    }
  });
});

// add to all buttons Play icon and remove pause
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach(
    (element) => {
      element.classList.add("bi-play-circle-fill");
      element.classList.remove("bi-pause-circle-fill");
    }
  );
};

const makeAllBackgrounds = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
    element.style.background = "rgb(105, 105, 170, 0)";
  });
};

// after click on play add pause icon and change poster, title of song
let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = e.target.id;
      makeAllPlays();
      e.target.classList.remove("bi-play-circle-fill");
      e.target.classList.add("bi-pause-circle-fill");
      music.src = `audio/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();

      let song_title = songs.filter((el) => {
        return el.id == index;
      });

      song_title.forEach((el) => {
        let { songName } = el;
        title.innerHTML = songName;

        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active2");

        //click for pause song
        music.addEventListener("ended", () => {
          masterPlay.classList.add("bi-play-fill");
          masterPlay.classList.remove("bi-pause-fill");
          wave.classList.remove("active2");
        });

        makeAllBackgrounds();
        Array.from(document.getElementsByClassName("songItem"))[
          `${index - 1}`
        ].style.background = "rgb(105, 105, 170, .1)";
      });
    });
  }
);

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);

  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
  masterPlay.classList.add("bi-play-fill");
  masterPlay.classList.remove("bi-pause-fill");
  wave.classList.remove("active2");
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.add("bi-volume-up-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

// back and next buttons fot player below

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(getElementsByClassName("songItem")).length;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();

  let song_title = songs.filter((el) => {
    return el.id == index;
  });

  song_title.forEach((el) => {
    let { songName } = el;
    title.innerHTML = songName;
  });
  document.getElementById(`${index}`).classList.remove("bi-play-fill");
  document.getElementById(`${index}`).classList.add("bi-pause-fill");
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgb(105, 105, 170, .1)";
});

next.addEventListener("click", () => {
  index -= 0;
  index += 1;
  if (index < 1) {
    index = Array.from(getElementsByClassName("songItem")).length;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();

  let song_title = songs.filter((el) => {
    return el.id == index;
  });

  song_title.forEach((el) => {
    let { songName } = el;
    title.innerHTML = songName;
  });
  document.getElementById(`${index}`).classList.remove("bi-play-fill");
  document.getElementById(`${index}`).classList.add("bi-pause-fill");
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgb(105, 105, 170, .1)";
});

// popular songs arrows
let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");
let pop_song = document.getElementsByClassName("pop_song")[0];

left_scroll.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

right_scroll.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

// artist arrows
let right_scrolls = document.getElementById("right_scrolls");
let left_scrolls = document.getElementById("left_scrolls");
let item = document.getElementsByClassName("item")[0];

left_scrolls.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

right_scrolls.addEventListener("click", () => {
  item.scrollLeft += 330;
});

// button to open menu on phone

if (window.innerWidth < 930) {
  let menu_list_active_button = document.getElementById(
    "menu_list_active_button"
  );
  let menu_side = document.getElementsByClassName("menu_side")[0];

  menu_list_active_button.addEventListener("click", () => {
    menu_side.style.transform = "unset";
    menu_list_active_button.style.opacity = 0;
  });

  let song_side = document.getElementsByClassName("song_side")[0];
  song_side.addEventListener("click", () => {
    menu_side.style.transform = "translateX(-100%)";
    menu_list_active_button.style.opacity = 1;
  });
}




