const get = document.querySelector.bind(document)
const gets = document.querySelectorAll.bind(document)

// animation list menu

const listmenu = gets('.menu-list-item')
const line = get('.line')
const active = get('.menu-list-item.active')

line.style.height = active.offsetHeight + "px"
line.style.top = active.offsetTop + "px"
listmenu.forEach((list) => {
    list.onclick = function() {
        get('.menu-list-item.active').classList.remove('active')
        list.classList.add('active')
        line.style.top = list.offsetTop + "px"
        line.style.height = list.offsetHeight + "px"
    }
})


const play = get('.playbtn')
const audiobtn = get('.audio')
const CD = get('.play-song-disc')
const namesong = get('.play-song-name-song')
const namesingle = get('.play-song-name-single')
const imgdisc = get('.imgdisc')
const audio = get('.audio')
const nextbtn = get('.next')
const prevbtn = get('.prev')
const randombtn = get('.random')
const repeatbtn = get('.playback')
const playlist = get('.play-list');



// app
const app = {
    // set = 0 để lấy phần tử đầu tiên của mảng,
    // load web sẽ auto chạy phần tử đầu
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    listsong: [{
            name: "Lỡ Hẹn Với Dòng Lam",
            single: "Thái Học Offical",
            patch: "../assets/music/lohenvoidonglam.mp3",
            img: "../assets/img-song/lohenvoidonglam.jpg",

        }, {
            name: "Cần Không Có, Có Không Cần",
            single: "Thanh Hưng Official",
            patch: "../assets/music/cankcocokcan.mp3",
            img: "../assets/img-song/cankcocokcan.jpg",

        }, {
            name: "Không Thể Yêu , Không Thể Quên",
            single: "Khang Việt",
            patch: "../assets/music/khongtheyeukhongthequen.mp3",
            img: "../assets/img-song/khongtheyeukhongthequen.jpg",

        }, {
            name: "Đám Cưới Nha",
            single: "Hồng Thanh - DJ Mie",
            patch: "../assets/music/damcuoinha.mp3",
            img: "../assets/img-song/damcuoinha.jpg",

        }, {
            name: "Thương Em Lắm",
            single: "Thanh Tân Official",
            patch: "../assets/music/thuongemlam.mp3",
            img: "../assets/img-song/thuongemlam.jpg",

        },
        {
            name: "Tha Phương Tuổi 18",
            single: "Trần Thế Chí",
            patch: "../assets/music/thaphuongtuoi18.mp3",
            img: "../assets/img-song/thaphuongtuoi18.jpg",

        },
        {
            name: "Rồi Nâng Cái Ly",
            single: "Nal | Official Music",
            patch: "../assets/music/roinangcai li.mp3",
            img: "../assets/img-song/roinangcaili.jpg",

        },
        {
            name: "Người Tôi Yêu Chẳng Hề Yêu Tôi",
            single: "Chi Dân",
            patch: "../assets/music/nguoitoiyeuchangyeutoi.mp3",
            img: "../assets/img-song/nguoitoiyeuchangheyeutoi.jpg",

        },
        {
            name: "3170",
            single: "Titie, Nâu ,Dươngg",
            patch: "../assets/music/mp3-3170.mp3",
            img: "../assets/img-song/3170.jpg",

        },
        {
            name: "Thương Em",
            single: "Châu Khải Phong, ACV",
            patch: '../assets/music/thuongem.mp3',
            img: "../assets/img-song/thuongem.jpg",

        },
        {
            name: "Mộng Tàn Hoa",
            single: "Thiên Tú Official",
            patch: "../assets/music/mongtanhoa.mp3",
            img: "../assets/img-song/mongtanhoa.jpg",

        },
        {
            name: "Mãi Mãi Không Phải Anh",
            single: "Châu Khải Phong, ACV",
            patch: "../assets/music/maimaikhongphaianh.mp3",
            img: "../assets/img-song/maimaikhongphaianh.jpg",

        },

        {
            name: "Dễ Đến Dễ Đi",
            single: "Quang Hùng Master D",
            patch: "../assets/music/dedendedi.mp3",
            img: "../assets/img-song/dedendedi.jpg",

        },
        {
            name: "Chỉ Còn 1 Đêm Cuối",
            single: "Tuấn Hưng",
            patch: "../assets/music/chicon1demcuoi.mp3",
            img: "../assets/img-song/chicon1demcuoi.jpg",

        },
        {
            name: "Chẳng Thể Tìm Được Em",
            single: "PhucXp ft. Freak D",
            patch: "../assets/music/changthetimduoce.mp3",
            img: "../assets/img-song/changthetimduocem.jpg",

        },
        {
            name: "Cảm Ơn Em Đã Đến Bên Anh",
            single: "Thái Học Official",
            patch: "../assets/music/camonemdadenbenanh.mp3",
            img: "../assets/img-song/thuongemlam.jpg",

        },
    ],

    render: function() {
        const htmls = this.listsong.map(function(item, index) {
            return `
            <div  data-index="${index}" class="play-list-song ${_this.currentIndex == index ? 'active' : ''}">
                     <div class="play-list-song-logo"><img src="${item.img}" alt=""></div>
                     <div class="play-list-song-name">
                         <div class="play-list-song-name-songname">${item.name}</div>
                         <div class="play-list-song-name-singlename">${item.single}</div>
                     </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('');
    },

    // Load thông tin bài hát vào UI
    loadSong: function() {

        namesong.textContent = this.currentSong.name
        namesingle.textContent = this.currentSong.single
        imgdisc.src = this.currentSong.img
        audio.src = this.currentSong.patch

    },

    defineProperties: function() {
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.listsong[this.currentIndex];
            }
        });
    },

    handleEvent: function() {
        _this = this
            // Bấm play phát nhạc

        play.onclick = function() {
            if (_this.isPlaying) {
                audiobtn.pause()
            } else {
                audiobtn.play()
            }
        }

        //  CD quay , dừng
        const animateCD = CD.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 20000, //10s
            iterations: Infinity
        })
        animateCD.pause()


        // Khi play
        audiobtn.onplay = function() {
                _this.isPlaying = true
                animateCD.play()

            }
            // khi pause
        audiobtn.onpause = function() {
            _this.isPlaying = false
            animateCD.pause()

        }

        // Khi hết bài sẽ auto next
        audiobtn.onended = function() {
            if (_this.isRepeat) {
                audiobtn.play()
            } else {
                nextbtn.click()

            }
        }

        // thanh time mp3 chạy (duration - tổng thời gian của audio)
        audiobtn.ontimeupdate = function() {
                const progress = get('#progress')
                if (audiobtn.duration) {
                    // làm tròn số % ( currentTime = thời gian hiện tại)
                    const pregresspercen = Math.floor(audiobtn.currentTime / audiobtn.duration * 100)
                    progress.value = pregresspercen
                }
            }
            // Tua nhạc
        progress.oninput = function(e) {
                const seektime = audiobtn.duration / 100 * e.target.value
                audiobtn.currentTime = seektime
            }
            // Khi bấm next song
        nextbtn.onclick = function() {
            if (_this.isRandom) {
                _this.playrandom();
            } else {
                _this.nextSong();
            }
            audiobtn.play()
            _this.render();
            _this.scrolltosong()
        }



        prevbtn.onclick = function() {
            if (_this.isRandom) {
                _this.playrandom();
            } else {
                _this.prevSong();
            }
            audiobtn.play()
            _this.render();
            _this.scrolltosong()


        }

        // Bật tắt random song
        randombtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom
            randombtn.classList.toggle('active', _this.isRandom);
        }

        // Lặp lại 1 bài
        repeatbtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatbtn.classList.toggle('active', _this.isRepeat)
        }

        playlist.onclick = function(e) {
            // Bấm vào trong thẻ sẽ hiển thị data của thẻ bọc nó
            const songIndex = e.target.closest('.play-list-song:not(.active)')
            if (songIndex) {
                // đặt attribute là data-index ->> dataset.index để lấy value
                // dataset trả về text , gán curentIndex = text thì k gán đc vào index để them class active,
                // nên phải chuyển sang number
                _this.currentIndex = songIndex.dataset.index
                _this.loadSong()
                audio.play()
                _this.render()

            }

        }



    },
    // Next Song
    nextSong: function() {
        this.currentIndex++
            if (this.currentIndex >= this.listsong.length) {
                this.currentIndex = 0
            }
        console.log(this.currentIndex)
        this.loadSong();
    },
    prevSong: function() {
        this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.listsong.length - 1
            }
        this.loadSong();
    },
    playrandom: function() {
        let newIndex
        do(
            newIndex = Math.floor(Math.random() * this.listsong.length)
        )
        while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadSong();
    },
    scrolltosong: function() {
        setTimeout(function() {
            //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
            // view nhảy khi chuyển bài active
            get('.play-list-song.active').scrollIntoView({
                behavior: "smooth",
                block: "start" //vị trí kéo tới
            })
        }, 300)
    },
    // Start App
    start: function() {
        // Định nghĩa các thuộc tính cho obj
        this.defineProperties();

        // Xử lí hành động
        this.handleEvent();

        // Load bài hát đầu tiên vào UI khi chạy 
        this.loadSong();


        // render playlist
        this.render();

    }
}
app.start();