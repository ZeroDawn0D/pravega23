<script>
</script>

<template>
    <div class="content-stuff">

        <div class="scitech-navbar">
            <ul>
                <li><a href="/pdf/BAH_Rules & Regulations.docx">Rules</a></li>
                <li><a href="#coords">Contact</a></li>
                <li><a href="#hof">Hall of Fame</a></li>
            </ul>
        </div>

        <div class="intro">
            <div class="intro-content">
                <br><br>
                <h1>Bad Ad Hoc Hypothesis</h1><br>
                <p>Science: Logical but quirky</p><br>
                <router-link to = "/scitech/bah_register">
                    <button type="button" class="reg_button">Register</button>
                </router-link>
            </div>
            <div class="intro-image">
                <img src="/img/scitech/BAH.jpg" alt="scitech">
            </div>
        </div>

        <div class="declaration">
            <div class="big-text" style="background-color: #ebf234;">
                <h1>Don't miss out on <br> one of Pravega's most quirky and fun events!</h1>
            </div>
            <div class="small-text" style="background-color: #ebf234;">
                <p>
                    Bad Ad Hoc Hypotheses is a celebration of clear logical thinking and creativity. Join us for a fun, refreshing event and present your whacky ideas and stand a chance to win
exciting prizes.<br>
In the prelims, contestants have to submit a concise alpha presentation, a rough sketch of their concept as well as a teaser trailer via email. Participants are encouraged to have a look at the BAH Youtube channel for an idea.
 The finals will involve some out-of-the-box, funky presentations at the IISc Campus. See ya there!

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
                    <p> 20days window for prelims submissions - end date is 27th August (last weekend of August)
                    </p>
                </div>
                <div class="eligibility">
                    <h1>Eligibility</h1><br>
                    <p> Anyone (with proper mention of it, if option not present in the registration forms)
                    </p>
                </div>
                <div class="rules">
                <h1>Rules</h1>
                <p>You can find the rules <a href = "/pdf/BAH_Rules & Regulations.docx">here</a></p>
                </div>
                <div class="prizes">
                    <h1>Prizes</h1><br>
                    <p> The event will have Prizes of up to 15k.
                    </p>
                </div>

            </div>
        </div>
        <div class="coord-intro" id ="coords">
            <h1>Our Coordinators</h1><br>

            <p> Meet our amazing coordinators. For any query regarding the event, they are your first point of contact!
                Don't hesistate to mail them at any time of the day, and they will try to reply as soon as possible. For any general 
                queries, mail us at scitech[dot]pravega[at]iisc[dot]ac[dot]in.
            </p><br>
        </div>


        <div class="coords">



            <div class="coord">
                <div class="coord-img">
                    <img src="\img\scitech\Parvathy.jpg" alt="scitech">
                </div><br>
                <div class="coord-text">
                    <h1>Paravathy S Kumplayil</h1>
                    <p>Mail: bah[dot]pravega[at]gmail[dot]com</p>
                </div>
            </div>
            <div class="coord">
                <div class="coord-img">
                    <img src="\img\scitech\Diya.jpg" alt="scitech">
                </div><br>
                <div class="coord-text">
                    <h1>Diya Sarkar</h1>
                    <p>Mail: bah[dot]pravega[at]gmail[dot]com</p>
                </div>
            </div>
        </div>
        <div class="quote">
            <div class="quote-text" style="font-family: 'Times New Roman', Times, serif;">
                <p> 'Take a step back from the seriousness of science and engage in some light-hearted logical
discussions'

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
                        <td>Winner</td>
                        <td>Pravar Kataria</td>
                        <td>IIT Delhi</td>
                    </tr>
                    <tr>
                        <td>Runner Up</td>
                        <td>Mani Gupta</td>
                        <td>Modern Vidya Niketan, Sector 17, Faridabad</td>
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

.timeline,
.eligibility,
.prizes,
.rules {
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
        width: 90vw;
    }

    .intro-image img {
        width: 90%;
    }

    .intro{
        height: 120vh;
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
    .timeline,
    .eligibility,
    .prizes,
    .rules {
        padding: 30px;
        text-align: center;
        margin: -1%;
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
