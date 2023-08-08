<script>
import Timer from './Timer.vue'
import Carousel from './Carousel.vue'
export default {
  components: { Timer, Carousel },
  data() {
    return {
      slides: [
        "/img/home/ramayan.png",
        "/img/home/billboard_11zon.jpg",
        "/img/home/gulmohar_11zon.jpg",
        "/img/home/tablefootball_11zon.jpg",
        "/img/home/aerial_view.jpg",
      ],
      cards: [
        {
          bgimg: "/img/scitech/BioBlitz.jpg",
          logo: "/img/logo/x.png",
          text: "Registrations extended till 13th July!",
          date: "Prelims 2: 12.08.2023",
          urltext: "Register Here",
          urllink: "/scitech/bioblitz_register"
        },
        {
          bgimg: "/img/scitech/Decoherence.jpg",
          logo: "/img/logo/x.png",
          text: "Registrations closing soon",
          date: "Prelims date: 05.08.2023",
          urltext: "Register Here",
          urllink: "/scitech/decoherence_register"
        },
        {
          bgimg: "/img/scitech/Quadsparks.jpg",
          logo: "/img/logo/x.png",
          text: "Registrations closing soon",
         // date: "20.02.2023",
          urltext: "Register here",
          urllink: "/scitech/quadsparks"
        },
        {
          bgimg: "/img/recreationals/chess.jpg",
          logo: "/img/logo/x.png",
          text: "Registrations live now!",
         // date: "20.02.2023",
          urltext: "Register here",
          urllink: "/recreationals/chess_register"
        }//add more lists to add more cards
      ]
    }
  }
}
</script>

<template>
  <div :id="`home`">

    <div class="landing">
    </div>

    <div class="landing-title">
      <div class="logo">
        <div class="desc">
          India's <span class="grad">biggest</span> SciTech-Cultural Fest
        </div>
        <img src="/img/logo/pravega.png" class="pravega" />
        <img src="/img/logo/x.png" class="X" />

        <div class="location">
          Indian Institute of Science, Bangalore
        </div>
      </div>
      <div class="circle"></div>
      <div class="hollow-circle"></div>
      <div class="rectangle"></div>
      <div class="hollow-rectangle"></div>
    </div>


    <div class = "announcements-container">
      <div class="grad announcements">
        Announcements
      </div>
      <div class = "announcements-flex">
        <div v-for="x in cards" class="second hero">
          <img class="hero-profile-img" v-bind:src="x.bgimg" alt="" />
          <div class="hero-description-bk"></div>
          <div class="hero-logo">
            <img v-bind:src="x.logo" style="width:100%;" alt="">
          </div>
          <div class="hero-description">
            <p>{{ x.text }}</p>
          </div>
          <div class="hero-date">
            <p>{{ x.date }}</p>
          </div>
          <div class="hero-btn">
            <router-link v-bind:to = "x.urllink">
                        {{x.urltext}}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class = "faq-container">
      <div class = "faq">
        <div class = "faq-title grad">
          FAQ
        </div>
        <div class = "faq-q grad">
           What is Pravega?
        </div>

        <div class = "faq-a">
          Pravega is the undergraduate fest of IISc, featuring exemplary events in Science, Technology, and Culture. This year marks the 10th edition of Pravega, giving us all the more motivation to make this edition the most memorable Pravega ever. Pravega sees exemplary participation in its quizzes, stunning cultural competitions, and stellar concerts. 
        </div>
        <div class = "faq-q grad">
          What are the different events Pravega organises?
        </div>

        <div class = "faq-a">
          Pravega organizes a variety of events, ranging from quizzes to cultural performances and technical exhibitions. Information about individual events can be found on our Instagram page 
        </div>


        <div class = "faq-q grad">
          Where will the offline finals be held?
        </div>

        <div class = "faq-a">
          The offline finals for various events will be held at the IISc campus in Bengaluru. Finalists will be provided with accommodation and travel reimbursements subject to our rules.
        </div>

        <div class = "faq-q grad">
          How will the winners be rewarded?
        </div>

        <div class = "faq-a">
          The event winners and runners-up will be felicitated on stage in a grand ceremony at the end of Pravega. The awards include cash prizes, trophies and merchandise. 
        </div>

        <div class = "faq-q grad">
          How can I participate in Pravega?
        </div>

        <div class = "faq-a">
          To participate in our events, you can register for the ones you are eligible for on this website. To stay updated about the various new events and announcements, follow us on Instagram (//add link//) and Twitter (//add link//)
        </div>


        <div class = "faq-q grad">
          About IISc
        </div>
        <div class = "faq-a">
          The Indian Institute of Science is India's top ranked research institution and a scientific force to be reckoned with on the global stage. With a focus on interdisciplinary research in the undergraduate program, supported by preeminent faculty from each major discipline and a flourishing environment of extracurricular activities - IISc provides a suitable setting for the holistic growth of bright young bright minds. 
        </div>

      </div>

      <div class = "collage">
        <img class = "img-1" src = "/img/home/ramayan.png" width = "250px">
        <img class = "img-2" src = "/img/home/aerial_view.jpg" width = "300px">
        <br />
        <img class = "img-3" src = "/img/home/gulmohar_11zon.jpg" width = "250px">
        <img class = "img-4" src = "/img/home/tablefootball_11zon.jpg" width = "250px">
      </div>
    </div>
    <!-- <Carousel :slides="slides" :intervals="3000" controls indicators></Carousel> -->
  </div>
</template>

<style scoped>

.faq-title {
  font-size: 75px;
  width: fit-content;
}

.announcements{
  font-size: 75px;
  text-align: center;
}
.announcements-flex{
 margin: 0px 0px 0px 50px;
}

.faq-q{
  font-size: 25px;
}
.faq-a{
  color: white;
  text-align: justify;
  padding-bottom: 10px;
}
.faq{
  width: 50%;
  position: relative;
}
.faq-container{
  display: flex;
  justify-content: space-evenly;
}
.collage{
  padding: 10px;
  align-items: center;
}
.img-1{
  transform: rotate(-15deg);
}
.img-2{
  transform: rotate(10deg);
}
.img-3{
  position: relative;
  transform: rotate(5deg);
  top: 20%;
}
@media (min-width: 1024px){
  .faq{
    right: 0px;
  }
}

/*card design */

/* BEGIN CARD DESIGN */
.hero {
  display: inline-block;
  position: relative;
  width: 400px;
  min-width: 400px;
  height: 400px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  margin: 30px;
}

@media (max-width: 1024px){
  .hero{
    width: 320px;
    min-width: 320px;
    height: 340px;
    margin: 15px;
  }

  .hero-description{
    font-size: 1rem;
  }
  .announcements-flex{
    margin: 0rem 0rem 0rem 4.5vw;
  }
  .announcements-container{
    position: relative;
    top:-145px;
  }
}

.hero-profile-img {
  height: 70%;
  width: 100%;
}

.hero-description-bk {
  background-image: linear-gradient(0deg, #3f5efb, #fc466b);
  border-radius: 30px;
  position: absolute;
  top: 55%;
  left: -5px;
  height: 65%;
  width: 108%;
  transform: skew(19deg, -9deg);
}

.second .hero-description-bk {
  background-image: linear-gradient(-20deg, #bb7413, #e7d25c);
  align-items: center;
  justify-content: center;
}

.cards{
  display: flex;  /*change this to start making the card carousel. Check mobile responsiveness*/
  width: fit-content;
  align-items: center;
  justify-content: center;
 
}


.hero-logo {
  height: 80px;
  width: 80px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  bottom: 30%;
  left: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
}

.hero-logo img {
  height: 100%;
}

.hero-description {
  position: absolute;
  color: #fff;
  font-weight: 900;
  left: 150px;
  bottom: 26%;
}

.hero-btn {
  position: absolute;
  color: #fff;
  right: 30px;
  bottom: 10%;
  padding: 10px 20px;
  border: 1px solid #fff;
}

.hero-btn a {
  color: #fff;
}

.hero-date {
  position: absolute;
  color: #fff;
  left: 30px;
  bottom: 10%;
}

/* END CARD DESIGN */

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  background-color: #eee;
  min-height: 100vh;
}

.btn i:before {
  width: 14px;
  height: 14px;
  position: fixed;
  color: #fff;
  background: #0077B5;
  padding: 10px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
}

/* card desogn ends */
.landing {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-image: url("/img/home/landing.jpg");
  background-size: 130%;
  background-position: center;
  background-color: #000000;
  filter: brightness(0.3);
  overflow: visible;
}

@keyframes move {
  to {
    transform: translateY(calc(4vw - 100%))
  }
}

@keyframes move2 {
  to {
    transform: translateX(calc(4vw - 100%))
  }
}

.hollow-rectangle {
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 22%;
  opacity: 0.5;

  height: 21vw;
  width: 26.5vw;
  border: 4px solid #f72585;
  border-image-slice: 1;
  border-image-source: linear-gradient(135deg, #f72585, #a92fde 100%);
}

.rectangle {
  position: absolute;
  top: 15%;
  left: 10%;
  height: 2.5vw;
  width: 2.5vw;
  transform: translateY(calc(-1*(4vw - 100%)));
  border: 2px solid #dc2eaa;
  animation: move 2s ease-in-out infinite alternate;
}

.hollow-circle {
  position: absolute;
  top: 15%;
  left: 90%;
  height: 2.5vw;
  width: 2.5vw;
  transform: translateY(calc(-1*(4vw - 100%)));
  border: 2px solid #086fbe;
  border-radius: 50%;
  animation: move 2s ease-in-out infinite alternate;
}

.circle {
  position: absolute;
  top: 80%;
  left: 10%;
  height: 2.5vw;
  width: 2.5vw;
  border: 2px solid #bbd414;
  border-radius: 50%;
  transform: translateX(calc(-1*(4vw - 100%)));
  animation: move2 2s ease-in-out infinite alternate;
}


.landing-title {
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  overflow: visible;
}

#home {
  height: 90vh;
  width: 100vw;
  background-color: #3a0ca3;
}

.logo {
  width: fit-content;
  position: relative;
  color: white;
  padding-top: 10vh;
  opacity: 1;
  height: 5vw;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, 50%);
}

.logo img {
  opacity: 1;
  height: 6.75vw;
  width: auto;

}


.desc {

  width: fit-content;
  position: relative;
  top: 90px;
  font-size: 25px;
  z-index: 10;
  padding-bottom: 0.75vw;
}

.grad {
  background-image: -webkit-linear-gradient(0deg, #f72585, #a92fde 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.location {

  width: fit-content;
  position: relative;
  z-index: 10;
  padding-top: 0.75vw;
}

.timer {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
}

.pravega {
  position: relative;
  top: 90px;
  animation: appearPravega 0.8s ease-out;
}

.X {
  position: relative;
  top: 90px;
  animation: appearX 2s ease-out;
}

.location {
  position: relative;
  top: 90px;
}

@keyframes appearPravega {
  0% {
    opacity: 0%;
    right: 1.5vw;
  }

  100% {
    opacity: 100%;
    right: 0vw;
  }
}

@keyframes appearX {
  0% {
    opacity: 0%;
    right: 1.5vw;
  }

  50% {
    opacity: 0%;
    right: 1.5vw;

  }

  100% {
    opacity: 1;
    right: 0vw;
  }
}




@media screen and (max-width: 1024px) {
  .logo img {
    height: 10vw;
  }

  .logo {
    top: 1vh;
  }

  .desc {
    font-size: 3vw;
  }

  .location {
    font-size: 3vw;
  }

  .hollow-rectangle {
    height: 45vw;
    width: 35vw;
    top: 30%;
    border: 5px solid #10e685;
    display: none;
  }

  .hollow-circle {
    left: 80%;
    height: 3vw;
    width: 3vw;
    transform: translateY(calc(1*(10vw - 100%)));
  }

  .circle {
    top: 50%;
    height: 3vw;
    width: 3vw;
    transform: translateX(calc(1*(8vw - 100%)));
  }

  .rectangle {
    height: 3vw;
    width: 3vw;
    transform: translateY(calc(1*(10vw - 100%)));
  }

  .landing {
    height: 100vh;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }


  .faq-title {
    align-items: center;
    font-size: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .announcements{
    align-items: center;
    font-size: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .faq{
    padding: 10px;
    width: 90%;
  }
  .faq-container{
    flex-direction: column;
  }
  .collage{
    padding-top: 40px;
  }
  .img-1{
    width: 200px;

  padding: 4px;
  transform: rotate(0deg);
}
.img-2{
  width: 200px;
  padding: 4px;
  transform: rotate(0deg);
}
.img-3{
  width: 200px;

  padding: 4px;
  transform: rotate(0deg);
}
.img-4{

  padding: 4px;
  width: 200px;
}
.collage{
  margin: auto;
}
}</style>