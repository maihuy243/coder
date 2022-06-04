const get = document.querySelector.bind(document)
const gets = document.querySelectorAll.bind(document)

// 

const listsong = get('.listsong')
const namesong = get('h1')
const cd = get('.cd')
const audio = get('audio')
const btnplay = get('.btn-plays')
const iconpause = get('.btn-pause')
const iconplay = get('.btn-play.active')
const btnnext = get('.btn-next')
const btnprev = get('.btn-previous')
const btnrepeat = get('.btn-repeat span')
const btnrandom = get('.btn-random span')
const progress = get('.progress')



// 
const music = {
    index: 0,
    isplay: false,
    isrepeat: false,
    isramdom: false,
    songs: [{
            names: "3170",
            singer: "3170",
            img: "../assets/img/3170.jpg",
            patch: "../assets/music/mp3-3170.mp3"

        },
        {
            names: "Cảm ơn em đã đến bên anh",
            singer: "Chu mi A",
            img: "../assets/img/camonemdadenbenanh.jpg",
            patch: "../assets/music/camonemdadenbenanh.mp3"

        },
        {
            names: "Cần không có có không cần",
            singer: "Thanh Hưng",
            img: "../assets/img/cankcocokcan.jpg",
            patch: "../assets/music/cankcocokcan.mp3"

        },
        {
            names: "Chẳng thể tìm được em",
            singer: "Chi Dân",
            img: "../assets/img/Changthetimduocem.jpg",
            patch: "../assets/music/changthetimduoce.mp3"

        },
        {
            names: "Chỉ còn 1 đêm cuối",
            singer: "Tuấn Hưng",
            img: "../assets/img/chicon1dem.jpg",
            patch: "../assets/music/chicon1demcuoi.mp3"

        }, {
            names: "3170",
            singer: "3170",
            img: "../assets/img/3170.jpg",
            patch: "../assets/music/mp3-3170.mp3"

        },
        {
            names: "Cảm ơn em đã đến bên anh",
            singer: "Chu mi A",
            img: "../assets/img/camonemdadenbenanh.jpg",
            patch: "../assets/music/camonemdadenbenanh.mp3"

        },
        {
            names: "Cần không có có không cần",
            singer: "Thanh Hưng",
            img: "../assets/img/cankcocokcan.jpg",
            patch: "../assets/music/cankcocokcan.mp3"

        },
        {
            names: "Chẳng thể tìm được em",
            singer: "Chi Dân",
            img: "../assets/img/Changthetimduocem.jpg",
            patch: "../assets/music/changthetimduoce.mp3"

        },
        {
            names: "Chỉ còn 1 đêm cuối",
            singer: "Tuấn Hưng",
            img: "../assets/img/chicon1dem.jpg",
            patch: "../assets/music/chicon1demcuoi.mp3"

        },

    ],

    // Xử lí thao tác 

    handle: function() {
        _this = this

        // disc rotate
        const cdthumb = cd.animate([{
            transform: 'rotate(360deg)'
        }], {
            duration: 15000, //15s
            iterations: Infinity
        })
        cdthumb.pause()
            // play
        btnplay.onclick = function() {
            if (_this.isplay) {
                audio.onpause()
            } else {
                audio.onplay()
            }

        }
        audio.onplay = function() {
            _this.isplay = true
            audio.play()
            cdthumb.play()
            iconplay.classList.remove('active')
            iconpause.classList.add('active')
        }
        audio.onpause = function() {
                _this.isplay = false
                audio.pause()
                cdthumb.pause()
                iconplay.classList.add('active')
                iconpause.classList.remove('active')
            }
            // chạy nhạc
        audio.ontimeupdate = function() {
                if (audio.duration) {
                    const curenpercent = Math.floor(audio.currentTime / audio.duration * 100)
                    progress.value = curenpercent
                }
            }
            // tua nhạc

        progress.oninput = function(e) {
            const changetime = audio.duration / 100 * e.target.value
            audio.currentTime = changetime
        }

        audio.onended = function() {
                btnnext.onclick()
            }
            // next btn
        btnnext.onclick = function() {
            if (_this.isramdom) {
                _this.random()
            } else {
                _this.index++
                    if (_this.index > _this.songs.length - 1) {
                        _this.index = 0
                    }
                _this.viewsong()
                audio.play();
            }
        }

        btnprev.onclick = function() {
            if (_this.isramdom) {
                _this.random()
            } else {
                _this.index--
                    if (_this.index <= 0) {
                        _this.index = _this.songs.length - 1
                    }
                _this.viewsong()
                audio.play();
            }
        }


        btnrepeat.onclick = function() {
            btnrepeat.classList.toggle('red')
            audio.play()

        }
        btnrandom.onclick = function() {
            _this.isramdom = !_this.isramdom
            btnrandom.classList.toggle('red', _this.isramdom)
        }



    },
    random: function() {
        let newindex
        do {
            newindex = Math.floor(Math.random() * this.songs.length)
        }
        while (newindex === _this.index)
        this.index = newindex
        this.viewsong();
        audio.play()


    },

    // render songs list
    render: function() {
        const htmls = this.songs.map(function(item, index) {
            return `
    <div class="song ${this.index === index ? "active" : '' }" >
          <div class="img" style="background-image:url('${item.img}');">
          </div>
          <div class="title">
              <div class="name">${item.names}</div>
              <div class="singer">${item.singer}</div>
          </div>
      </div>
    `
        })
        listsong.innerHTML = htmls.join('');
    },

    // view song in view
    viewsong: function() {

        currentsong = this.loadsongbegin();
        namesong.innerHTML = currentsong.names
        cd.src = currentsong.img
        audio.src = currentsong.patch
    },

    // load the first song when load page
    loadsongbegin: function() {
        return this.songs[this.index]
    },



    // app start
    start: function() {
        this.loadsongbegin();
        this.viewsong();
        this.handle()
        this.render();

    }
}
music.start();