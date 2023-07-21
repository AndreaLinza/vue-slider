
Vue.createApp({
    data() {
        return {

            slides: [
                {
                    image: 'img/Born-to-grill.jpg',
                    title: 'Born to Grill',
                    text: 'Un esperienza senza pari che ti porterà ad immergerti nei meandri della VERA guerra. Un action, strategico senza pari',
                }, {
                    image: 'img/Pokemon.jpg',
                    title: 'Pokemon: acchiappali tutti ',
                    text: "Goditi le fantastiche musiche di Kanto e 'acchiappa' tutti i fantastici animaletti per farli diventare tuoi amici ",
                }, {
                    image: 'img/takedown-red-sabre.jpg',
                    title: 'TakeDown Red Sabre',
                    text: "Invita tutti i tuoi amici a giocare a questo fantastico gioco di strategia-simulativo e divertiti in mappe 'piccionaie' ",
                }, {
                    image: 'img/Dark.jpg',
                    title: 'Dark Shadows: Army of Evil',
                    text: "Dagli sviluppatori di Final Fantasy, un RPG a tutto tondo che vi porterà a scontri mozzafiato, con un combat rinnovato e action",
                }, {
                    image: 'img/TLOU.png',
                    title: "The Loss of Ass",
                    text: 'Gioco di spara spara zombie, narrativo, strappalacrime. Coinvolgiti emotivamente in questa fantastica storia fatta di zombie e amore paterno',
                }
            ],

            timer: null,
            activeImageIndex: 0,
        }
    },

    methods: {
        nextClick() {
            this.activeImageIndex++
            if (this.activeImageIndex > this.slides.length - 1) {
                this.activeImageIndex = 0
            }
        },
        prevClick() {
            this.activeImageIndex--
            if (this.activeImageIndex < 0) {
                this.activeImageIndex = this.slides.length - 1
            }
        },
        onClickThumb(i) {
            this.activeImageIndex = i
        },

        stop() {
            
            clearInterval(this.timer);

        },
        play() {
            this.timer = setInterval(this.nextClick, 3000)
        }

    },

    mounted() {
        this.timer = setInterval(this.nextClick, 3000)
    }


}).mount("#app")



