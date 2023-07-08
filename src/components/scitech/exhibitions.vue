<script>
</script>

<template>
    <div class="content-stuff">

        <div class="scitech-navbar">
            <ul>
                <li><a href="/pdf/Exhibitions Rules.pdf" class="my_button">Rules</a></li>
                <li><a href="#coords" class="my_button">Contact</a></li>
                <li><a href="#hof" class="my_button">Hall of Fame</a></li>
            </ul>
        </div>

        <div class="intro">
            <div class="intro-content">
                <br><br>
                <h1>Exhibitions</h1><br>
                <p>From the book to the lab</p><br>
                <router-link to = "/scitech/exhibitions_register">
                    <button type="button" class="reg_button">Register</button>
                </router-link>
            </div>
            <div class="intro-image">
                <img src="/img/scitech/Exhibitions.jpg" alt="scitech">
            </div>
        </div>

        <div class="declaration">
            <div class="big-text" style="background-color: #ebf234;">
                <h1>Don't miss out on <br> IISc's marquee exhibitions event</h1>
            </div>
            <div class="small-text" style="background-color: #ebf234;">
                <p>Here is a chance to challenge your practical skills. Time to have fun playing around and experimenting with ideas, and trying to implement them!

IISc Exhibitions here at Pravega brings to you a one-of-its-kind of contest that would poke your curiosity and make you whack your brains. Identify a real-world problem. , use YOUR brains to think of ideas to solve it and try to realise them!
</p>
            </div>
        </div>

        <div class="details">
            <div class="img">
                <img src="/img/scitech/sample2.png" alt="scitech">
            </div>
            <div class="text">
                <div class="timeline">
                    <h1>Timeline</h1><br>
                    <p> Last date of submission of exhibition: 28th July<br>
                    Final Presentation: Day of Pravega
                    </p>
                </div>
                <div class="eligibility">
                    <h1>Eligibility</h1><br>
                    <p> 11th standard to 2nd year undergraduate.
                    </p>
                </div>
                <div class="rules">
                <h1>Rules</h1>
                <p>You can find the rules <a href = "/pdf/Exhibitions Rules.pdf">here</a></p>
                </div>
                <div class="prizes">
                    <h1>Prizes</h1><br>
                    <p> The event will have Prizes of up to 20k.
                    </p>
                </div>
            </div>
        </div>
        <div class="coord-intro" id="coords">
            <h1>Our Coordinators</h1><br>

            <p> Meet our amazing coordinators. For any query regarding the event, they are your first point of contact!
                Don't hesistate to mail them at any time of the day, and they will try to reply as soon as possible. For any general 
                queries, mail us at scitech[dot]pravega[at]iisc[dot]ac[dot]in.
            </p><br>
        </div>


        <div class="coords">



            <div class="coord">
                <div class="coord-img">
                    <img src="\img\scitech\Deep_Exhibitions.jpeg" alt="scitech">
                </div><br>
                <div class="coord-text">
                    <h1>Deep Bhowmik</h1>
                    <p>Mail: deepbhowmik[at]iisc[dot]ac[dot]in</p>
                </div>
            </div>
            <div class="coord">
                <div class="coord-img">
                    <img src="\img\scitech\HVD_Exhibitions.jpeg" alt="scitech">
                </div><br>
                <div class="coord-text">
                    <h1>Harsh Vardhan Dewangan</h1>
                    <p>Mail: vardhand[at]iisc[dot]ac[dot]in</p>
                </div>
            </div>
        </div>
       <!-- <div class="quote">
            <div class="quote-text" style="font-family: 'Times New Roman', Times, serif;">
                <p> Understanding reaction intermediates give ideas to new reactions...
                </p>
            </div>
        </div>

        <div class="hof" id="hof">
            <br><br>
            <div class="big-text-2" style="width:100vw">
                <h1>Hall of Fame</h1>
            </div>
            <div class="small-text" style="width:100vw">
                <table>
                    <tr>
                        <th>Position</th>
                        <th>Names of the winners</th>
                        <th>College</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>Priyanshu Jaseja and Sahil Yadav </td>
                        <td>MAMC,Delhi and AIIMS,Delhi </td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>Supratik Ghosh</td>
                        <td>RM Vidyamandira Belur</td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>Subhajit Chakraborty and Sayantan Khan  </td>
                        <td>IISER Kolkata</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>Snehadeep Gayen and Yeshwanth Narayana </td>
                        <td>IIT Madras</td>
                    </tr>
                </table>
            </div>
        </div>-->
    </div>
</template>

<style scoped>
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
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin: auto;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

.scitech-navbar {
    width: 70vw;
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

.coord-intro {
    position: relative;
    top: 25vh;
    margin: auto;
    height: 30vh;
    width: 80vw;
    background-color: #ffffff;
    color: black;
    text-align: center;
    font-size: larger;
}

.content-stuff {
    position: relative;
    top: 10vh;
    height: 90vh;
    background-color: #ffffff;

    border-top-left-radius: 25px;
    border-top-right-radius: 30px;
    overflow-y: scroll;
}

.intro {
    display: flex;
    flex-direction: row;
    position: relative;
    top: 7vh;
    height: 90vh;
    width: 100vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.intro-content {
    position: relative;
    height: 90vh;
    width: 50vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}
.intro-content h1{
    font-size: 5rem;
}
.intro-content p{
    font-size: 3rem;
}

.intro-image {
    position: relative;
    height: 90vh;
    width: 50vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.intro-image img {
    width: 80%;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.declaration {
    display: flex;
    flex-direction: row;
    position: relative;
    top: 10vh;
    height: 80vh;
    width: 100vw;
    background-color: #ebf234;
    align-items: center;
    text-align: center;
}

.quote {
    height: auto;
    margin: auto;
    width: 80vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.quote-text {
    position: relative;
    height: auto;
    width: 80vw;
    font-size: 2rem;
    color: coral;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.big-text {
    position: relative;
    height: 45vh;
    width: 50vw;
    margin-top: 0;
    margin-right: 8vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.big-text-2 {
    position: relative;
    height: 15vh;
    width: 50vw;
    margin-top: 0;
    margin-right: 8vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.small-text {
    font-size: 1.2vw;
    position: relative;
    height: 45vh;
    width: 30vw;
    margin-top: 0;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.details {
    display: flex;
    flex-direction: row;
    position: relative;
    top: 10vh;
    height: auto;
    width: 100vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.text {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 50vw;
    padding-top: 5vw;
    background-color: #ffffff;
    align-items: left;
    text-align: left;
}

.timeline, .rules,
.eligibility,
.prizes {
    margin-bottom: 7vh;
    padding-right: 2vw;
}

.details img {
    height: 90vh;
    width: 50vw;
}

.coords {
    position: relative;
    top: 16vh;
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    row-gap: 10vh;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.coord {
    width: 30vw;
    background-color: #ffffff;
    align-items: right;
    text-align: center;
}

.coord-img img{
    width:250px;
    height:300px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px grey;
    object-fit: cover;
}

.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 90vh;
    width: 100vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}

.hof {
    position: relative;
    top: 10vh;
    height: 40vh;
    width: 100vw;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
}
    
.my_button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.my_button:hover {
  background-color: #45a049;
}

.my_button:active {
  background-color: #3e8e41;

}  
    
@media screen and (max-width:1024px) {

    .intro,
    .details,
    .declaration,
    .content,
    .hof {
        flex-direction: column;
    }

    .scitech-navbar {
        width: 87vw;
        justify-content: center;
    }

    .scitech-navbar li {
        float: right;
    }

    .declaration,
    .content,
    .hof {
        height: auto;
        border-radius: 10px;
    }

    .intro-image,
    .intro-content,
    .text {
        width: 100vw;
    }

    .intro-image img {
        width: 90%;
    }

    .intro{
        height: 100vh;
    }

    .intro-content {
        width: 100vw;
    }
    .intro-content h1{
        font-size: 3rem;
    }
    .intro-content p{
        font-size: 2rem;
    }

    .big-text{
        margin-top: 2vh;
        margin-bottom: 5vh;
        margin-left: 8vw;
        padding-top: 75px;
        width: 90vw;
        height: auto;
    }

    .big-text-2 {
        margin-top: 2vh;
        margin-bottom: 5vh;
        padding-top: 75px;
        width: 90vw;
        height: auto;
    }

    .small-text {
        margin-top: 2vh;
        margin-bottom: 9vh;
        width: 90vw;
        height: auto;
        font-size: 5vw;
    }

    .details img {
        width: 100vw;
        height: auto;

    }

    .text,
    .timeline, .rules,
    .eligibility,
    .prizes {
        padding: 30px;
        text-align: center;
        margin: -1%;
    }

    .text {
        background-color: beige;
        margin-top: 3vh;
        border-radius: 10px;
        height:auto;
    }

    .coord-intro {
        width: 90vw;
        height: auto;
        position: relative;
        top: 15%;
        margin-top: 3vh;
        margin-bottom: 5vh;
    }

    .coords {
        position: relative;
        top: 20%;
        flex-direction: column;
        justify-content: center;
    }

    .coord {
        width: 90vw;
        height: auto;
        margin-top: 3vh;
    }

    .coord-img img {
        width: 45vw;
        height: 60vw;
    }

    .hof {
        position: relative;
        top: 40%;
        height: auto;
        text-align: center;
        width: 100vw;
        margin: auto;
    }

    .hof .big-text {
        padding-top: 30px;
        margin: auto;
    }

    .quote{
        position: relative;
        top: 40%;
        height: auto;
        margin: auto;
    }
}</style>
