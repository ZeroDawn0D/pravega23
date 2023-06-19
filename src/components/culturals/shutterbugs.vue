<script>

</script>

<template>
<div class = 'content-stuff'>
    <div class = "culturals_navbar">
        <ul class = "ul">
            <li class = 'li'><a href="#news">Gallery</a></li>
            <li class = 'li'><a href="/img/culturals/Shutterbugs V2.jpg">Poster</a></li>
            <li class = 'li'><a href="#contact">Contact</a></li>
        </ul>
    </div>
    <br>
    <br>

    <div class = 'desc_mobile'>
        <h2>Shutterbugs</h2><br>
            <p>Photography can get lonely. Not under our watch! Introducing SHUTTERBUGS 2023, where students from all over India come together to share their mutual passion for photography. Is it just another competition? Hell no!
You'll get to experience photography workshops and events throughout the competition, helping you learn and level up your shutter skills.
Don't miss this exciting opportunity to showcase your talent and love for photography! Grab your camera, set free your imagination and let your pictures do the talking.


            </p><br>
            <router-link to = "/culturals/shutterbugs_register">
                    <button type="button" class="reg_button">Register here!</button>
            </router-link>

    </div>

    <div class = "main_image"> <!--Render size: 2612px-->
        <div class = "desc">
            <h2>Shutterbugs</h2>
            <p>Photography can get lonely. Not under our watch! Introducing SHUTTERBUGS 2023, where students from all over India come together to share their mutual passion for photography. Is it just another competition? Hell no!
You'll get to experience photography workshops and events throughout the competition, helping you learn and level up your shutter skills.
Don't miss this exciting opportunity to showcase your talent and love for photography! Grab your camera, set free your imagination and let your pictures do the talking.

<br><br>
            <router-link to="/culturals/shutterbugs_register" :style="`text-decoration: none; color: inherit;`">
				<p class = 'learn'>Register here!</p>
			</router-link>

            </p>
        </div>
       
			
    </div>
    <br>
    <br>
    <div class = "details">
        <div class = "img"> <!--Render size: 1102px-->
        </div>
        <div class = "text">
            <div class = "timeline">
                <h1>Timeline</h1><br>
                <p> Registrations open from 1<sup>st</sup> July to 15<sup>th</sup> August</p>
                
            </div>
            <div class = "eligibility">
                <h1>Eligibility</h1><br>
                <p> No specific restrictions as such.
                </p>
            </div>
            <div class = "prizes">
                <h1>Prizes</h1><br>
                <p> Prize pool of 20k+.
                </p>
            </div>
            <div class = "rules">
                <h1>Rules</h1><br>
                <p> Click here for the rules and regulations PDF.
                </p>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class = 'coords' id = 'contact'>
        <h1>Our Coordinators</h1><br>
        <div class = "flex-images">
            <div class = "image_1"> <!--Render size: 844px-->
                <h2>Jagadish</h2>
                <p>+91 97906 84454<br>jagadishn@iisc.ac.in</p>
            </div>
            <div class = "image_2">
                <h2>Subham Das</h2>
                <p>+91 74320 04324<br>subhamdas@iisc.ac.in</p>
            </div>
            <!--<div class = "image_3">
                <h2>Coordinator 3</h2>
                <p>Contact Info</p>
            </div>-->
        </div>
    </div>


</div>

</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

.content-stuff{
	position: relative;
	top: 10vh;
	height: 90vh;;
	background-color: #ffffff;
    padding: 0px 100px;
	border-top-left-radius: 25px;
	border-top-right-radius: 30px;
	overflow-y: scroll;
}
.culturals_navbar{
    width:80vw;
}

.ul {
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
  overflow: hidden;
}

.li {
  float: right;
}

.li a {
  display: block;
  padding: 20px;
  background-color: #ffffff;
  text-decoration: none;
}

li a:hover {
  color: grey;
}

.desc_mobile{
    display: none;
}

.reg_button{
    background-color: #5d83eb; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius:30px;
}
.reg_button:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: crimson;
}

.main_image{
    background-image: url("/img/culturals/shutterbugs_img1.png");
    background-size: 90% 170%;
    background-repeat: no-repeat;
    background-position: 30% 30%;
    background-attachment: fixed;
    height: 75vh;
    width: 85vw;
    position: absolute;
}

.learn{
	cursor: pointer;
	font-weight: bold;
	transition: font-size 1s;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: yellow;
    text-align: left;
}

.learn:hover{
	font-size: 1.5em;
}

.desc{
    position: relative;
    top: 40%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: yellow;
    text-align: left;
    padding: 10px;
    width: 30vw;
}

.desc h2{
    font-size: 60px;
}

.details{
    display: flex;
    flex-direction: row;
    height: auto;
    position: relative;
    top: 80vh;
    width: 85vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
    gap: 200px;
}
.img{
    height: 90vh;
    width: 40vw;
    background-image: url("/img/culturals/shutterbugs_img2.png");
    background-repeat: no-repeat;
    background-size: 45% 100%;
    background-attachment: fixed;
    background-position: 0% -20%;
}

.timeline,.eligibility,.prizes, .rules{
    margin-bottom: 7vh;
    padding-right: 2vw;
    text-align: left;
}
.coords{
    position: relative;
    top: 80vh;
    width: 85vw;
    background-color: #ffffff;
    text-align: center;
    padding: 10px;
    margin-bottom: 10vh;
    height: auto;
}
.flex-images{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: auto;
    width: 85vw;
    background-color: #ffffff;
    position: relative;
    top: 10vh;
    gap: 20px;
    margin-bottom: 15vh;
}

.image_1{
    height: 100vh;
    width: 32vw;
    background-image: url("/img/people/Jagadish.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

}
.image_2{
    height: 100vh;
    width: 32vw;
    background-image: url("/img/people/Subham_Das.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.image_3{
    height: 100vh;
    width: 32vw;
    background-image: url("/img/culturals/random.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}


.image_1 h2{
    position: relative;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 5px;
}

.image_1 p{
    position: relative;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 10px;
}
.image_2 p{
    position: relative;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 10px;
}
.image_3 p{
    position: relative;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 10px;
}
.image_2 h2{
    position: relative;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 10px;
}
.image_3 h2{
    position: relative;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 10px;
}


@media screen and (max-width:1024px) {

    .content-stuff{
        height: 100vh;
        overflow-y: none;
        align-items: center;
        padding: 0px;
    }

    .culturals_navbar{
        width: 82vw;
    }

    .main_image{
        background-size: 90% 87%;
        background-position: 50% 50%;
        background-attachment: scroll;
        height: 50vh;
        width: 100vw;
        position: relative;
        left: 0%;
    }

    .desc{
        display: none;
    }

    .desc_mobile{
        display: block;
        position: relative;
        text-align: center;
        padding: 10px;
        width: 80vw;
        margin: auto;
    }
    .details{
        position: relative;
        top: 0vh;
        flex-direction: column-reverse;
    }
    .text{
        height: auto;
    }
    .timeline,.eligibility,.prizes, .rules{
        text-align: center;
        padding: 0px 0px 0px 40px;
    }
    li{
        text-align: left;
    }
    .img{
        position: relative;
        top: -32vh;
        left: 6vw;
        width: 96vw;
        display: block;
        margin: auto;
        background-size: 90% 75%;
        background-attachment: scroll;
    }
    .coords{
        top: -52vh;
        height: auto;
        margin: auto;
    }
    .flex-images{
        flex-direction: column;
        gap: 10px;
    }
    .image_1,.image_2,.image_3{
        height: 50vh;
        width: 80vw;
    }
    .image_1 h2,.image_2 h2,.image_3 h2{
        text-align: center;
        font-size: 20px;
        left: 50%;
        top: 75%;
    }
    .image_1 p,.image_2 p,.image_3 p{
        text-align: center;
        font-size: 15px;
        left: 50%;
        top: 74%;
    }
    .image_2 p,.image_3 p{
        top: 71%;
    }
}

</style>