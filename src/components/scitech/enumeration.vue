<script>

</script>

<template>
    <div class="content-stuff">

        <div class="scitech-navbar">
            <ul>
                <li><a href="/pdf/Enumeration_2023_Rules_Reg.pdf">Rules</a></li>
                <li><a href="/pdf/Enumeration_Prelims_2022_rectified.pdf">Sample Questions</a></li>
                <li><a href="#hof">Hall of Fame</a></li>
            </ul>
        </div>

        <div class="intro">
            <div class="intro-content">
                <br><br>
                <h1>Enumeration</h1><br>
                <p>To Infinity and beyond</p><br>
                <router-link to = "/scitech/enumeration_register">
                    <button type="button" class="reg_button">Register</button>
                </router-link>
            </div>
            <div class="intro-image">
                <img src="/img/scitech/Enumeration.jpg" alt="scitech">
            </div>
        </div>

        <div class="declaration">
            <div class="big-text" style="background-color: #ebf234;">
                <h1>Don't miss out on <br> IISc's Premier Mathematics Event</h1>
            </div>
            <div class="small-text" style="background-color: #ebf234;">
                <p>This is a unique opportunity for any mathematics enthusiast to showcase their problem-solving ability and
                    insight in the subject. Go through the PDFs for correct informations. <br /> <a
                        href="/pdf/Enumeration_2023_Rules_Reg.pdf">Rules</a><br /><a
                        href="/pdf/Enumeration_Prelims_2022_rectified.pdf">Questions</a>
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
                    <p>Event has two rounds: Prelims and Finals<br>Prelims (online): 29th July, 2023 (4th weekend of July)
                    </p><p>Prelims will have computational as well as subjective problems, roughly olympiad style
                    </p><p>Finals will be offline, with only the top few teams from the prelims, on the IISc campus on the weekend of Pravega, for applicants outside of India, an online finals would be held, in case of travel absence</p>
                </div>
                <div class="eligibility">
                    <h1>Eligibility</h1><br>
                    <p> Grade 8-12 school students and UG 1st-4th year
                    </p>
                </div>
                <div class="rules">
                <h1>Rules</h1>
                <p>You can find the rules <a href = "/pdf/Enumeration_2023_Rules_Reg.pdf">here</a></p>
                </div>
                <div class="prizes">
                    <h1>Prizes</h1><br>
                    <p> Prizes upto 30k
                    </p>
                </div>
            </div>
        </div>
        <div class="coord-intro">
            <h1>Our Coordinators</h1><br>
            <p> Meet our amazing coordinators. For any query regarding the event, they are your first point of contact!
                Don't hesistate to mail them at any time of the day, and they will try to reply as soon as possible. For any general 
                queries, mail us at scitech[dot]pravega[at]iisc[dot]ac[dot]in.
            </p>
        </div>
        <div class="coords">



            <div class="coord">
                <div class="coord-img">
                    <img src="/img/scitech/rahul_enum_photo.jpeg" alt="scitech">
                </div><br>
                <div class="coord-text">
                    <h1>Rahul Adhikari</h1>
                    <p>rahuladhikar[dot]iisc[dot]ac[dot]in</p>
                </div>
            </div>
            <div class="coord">
                <div class="coord-img">
                    <img src="/img/scitech/aryan_photo_enum.jpg" alt="scitech">
                </div><br>
                <div class="coord-text">
                    <h1>Aryan Amin Kazi</h1>
                    <p>aryanamin[at]iisc[dot]ac[dot]in</p>
                </div>
            </div>
        </div>

        <div class="quote">
            <div class="quote-text" style="font-family: 'Times New Roman', Times, serif;">
                <p> People that are useful to clarify any queries you have regarding Enumeration event. Obviously, they
                    won't solve
                    questions for you!
                </p><br />
            </div>
        </div>

        <div class="hof" id="hof">
            <br><br>
            <div class="big-text-2" style="width:100vw">
                <h1>Hall of Fame</h1>
            </div>
            <h2>Year 2022</h2><br>
            <div class="small-text" style="width:100vw">
                <table>
                    <tr>
                        <th>Position</th>
                        <th>Names of the winners</th>
                        <th>College</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>Shantanu Nene and Madhur Agarwal</td>
                        <td>IIT Bombay</td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>Rohan Goyal and Atul Shatavart Nadig  </td>
                        <td>Chennai Mathematical Institute (CMI)</td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>Arindam Bhattacharya and Hrishikesh Saikia </td>
                        <td>Chennai Mathematical Institute (CMI)</td>
                    </tr>
                </table>
            </div>
        </div>
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
.intro-image img{
    width:80%;
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
    top: 10vh;
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

@media screen and (max-width:1024px) {

    .intro,
    .details,
    .declaration,
    .content,
    .hof {
        flex-direction: column;
    }

    .scitech-navbar {
        width: 101vw;
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
        margin: 0%;
    }

    .text {
        background-color: beige;
        margin-top: 3vh;
        border-radius: 10px;
        height: auto;
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
        top: 24%;
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
        top: 36%;
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
        top:40%;
    }
}
</style>
