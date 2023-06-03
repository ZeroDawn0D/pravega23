<script>

</script>

<template>
<div class = 'content-stuff'>
    <div class = "culturals_navbar">
        <ul>
            <li><a href="#news">Gallery</a></li>
            <li><a href="#contact">Poster</a></li>
            <li><a href="#hof">Contact</a></li>
        </ul>
    </div>
    <br>
    <br>

    <div class = "main_image">
        <div class = "desc">
            <h2>TEMPLATE</h2>
            <p>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
        </div>
    </div>
    <br>
    <br>
    <div class = "details">
        <div class = "img">
        </div>
        <div class = "text">
            <div class = "timeline">
                <h1>Timeline</h1><br>
                <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
            <div class = "eligibility">
                <h1>Eligibility</h1><br>
                <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
            <div class = "prizes">
                <h1>Prizes</h1><br>
                <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
            <div class = "rules">
                <h1>Rules</h1><br>
                <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class = 'coords'>
        <h1>Our Coordinators</h1><br>
        <div class = "flex-images">
            <div class = "image_1">
                <h2>Coordinator 1</h2>
                <p>Contact Info</p>
            </div>
            <div class = "image_2">
                <h2>Coordinator 2</h2>
                <p>Contact Info</p>
            </div>
            <div class = "image_3">
                <h2>Coordinator 3</h2>
                <p>Contact Info</p>
            </div>
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

ul {
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
  overflow: hidden;
}

li {
  float: right;
}

li a {
  display: block;
  padding: 20px;
  background-color: #ffffff;
  text-decoration: none;
}

li a:hover {
  color: grey;
}

.main_image{
    background-image: url("/img/culturals/template main image.jpg");
    background-size: 110% 130%;
    background-repeat: no-repeat;
    background-position: 10% -20%;
    background-attachment: fixed;
    height: 75vh;
    width: 85vw;
    position: absolute;
}

.desc{
    position: relative;
    top: 40%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: white;
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
    width: 130vw;
    background-image: url("/img/culturals/template_guitar.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-attachment: fixed;
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
}

.image_1{
    height: 100vh;
    width: 32vw;
    background-image: url("/img/culturals/random.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}
.image_2{
    height: 100vh;
    width: 32vw;
    background-image: url("/img/culturals/random.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.image_3{
    height: 100vh;
    width: 32vw;
    background-image: url("/img/culturals/random.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}


.image_1 h2{
    position: relative;
    top: 85%;
    left: 85%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: left;
    padding: 5px;
}

.image_1 p{
    position: relative;
    top: 85%;
    left: 92%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: left;
    padding: 10px;
}
.image_2 p{
    position: relative;
    top: 85%;
    left: 92%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: left;
    padding: 10px;
}
.image_3 p{
    position: relative;
    top: 85%;
    left: 92%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: left;
    padding: 10px;
}
.image_2 h2{
    position: relative;
    top: 85%;
    left: 85%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: left;
    padding: 10px;
}
.image_3 h2{
    position: relative;
    top: 85%;
    left: 85%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: left;
    padding: 10px;
}


@media screen and (max-width:1024px) {
    .culturals_navbar{
        width: 100vw;
    }
}

</style>