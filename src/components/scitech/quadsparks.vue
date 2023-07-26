<script>
import router from '../../router';
export default {
    data() {
        return { code: "" }
    },
    /*mounted(){
            this.$swal.fire({
  icon: 'info',
  title: 'Important',
  text: 'The online prelims for Quadsparks 2023 will be held from 6.30 PM to 7 PM on 22nd July, 2023. Please watch this page.',
})
    },*/
    methods: {
        enter: function () {
            this.code = prompt("Enter the code: ");
            if(this.code!="")this.check();
        },
        check: function () {
            const DOMAIN = "https://api.pravega.org";
            fetch(`${DOMAIN}/api/sci_tech/quad/checkcode`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                body: JSON.stringify({ number: this.code })
            })
                .then((res) => {
                    if (res.status == 200) {
                     alert("You are getting discount in registration fee!!!");
                        router.push("/scitech/quadsparks_discount_register");
                    }//to be updated by Umang
                    else if (res.status == 401) { alert("Didnt work :(...maybe check the code again?") }// to be updated by Umang
                    else { alert("Server issue, try later!") }
                })
                .catch((e) => alert(e.message))
        }
        
    },
    /*mounted(){
            swal("Alert", "Due to queries raised by few participants, we clarify that in Oct 2023, if you're a class 11 to 2nd year UG student, you are ELIGIBLE", "info");
        }*/

}
</script>

<template>
    <div class="content-stuff">

        <div class="scitech-navbar">
            <ul>
                <li><a href="\pdf\Quadsparks_rules and regulations.pdf">Rules</a></li>
                <li><a href="\pdf\sample questions.pdf">Sample Questions</a></li>
                <li><a href="#hof">Hall of Fame</a></li>
            </ul>
        </div>

        <div class="intro">
            <div class="intro-content">
                <br><br>
                <h1>Quadsparks</h1><br>
                <p>Quizzical musings, and a dash of science</p><br>
                <br />
                <br />
                <p style="font-size: 1.7rem;font-weight: 600;">Registrations Closed</p>
                <br/>
                <div class="float">
                    <p> </p>
                    <!--<div class="float1">
                        <button type="button" onclick = "window.location.href = 'https://www.autoproctor.co/tests/start-test/dCGZCeSRwa';" class="reg_button_1">Click here for the exam</button>
                    </div>-->
                    <div class="float2">
                        <a href = "/public/pdf/QS_answerkey.pdf" class = "reg_button">Updated answer key and rubric</a>
                    </div>
                </div>
            </div>
            <div class="intro-image">
                <img src="/img/scitech/Quadsparks.jpg" alt="scitech">
            </div>
        </div>

        <div class="declaration">
            <div class="big-text" style="background-color: #ebf234;">
                <h1>Don't miss out on <br> IISc's Premier Quizzing Event</h1>
            </div>
            <div class="small-text" style="background-color: #ebf234;">
                <p>
                    The premier high school quiz contest of Pravega, Quadsparks, calls upon young, bright minds of the
                    country to compete in a clash of wits. Covering a broad base of science-related themes, ranging from
                    basic science and contemporary research, to pop culture and technology, Quadsparks promises to test your
                    prowess in critical thinking, aptitude and quizzing simultaneously.

                </p>
            </div>
        </div>

        <div class="details">
            <div class="img">
                <img src="/img/scitech/sample2.png" alt="scitech">
            </div>
            <div class="text">
                <div class="timeline">
                    <h1>The Event</h1><br>
                    <p style="text-align=left;"> Quadsparks '23 consists of three levels of contests:<br>
                        1. An online preliminary round: for students from all over India.<br>
                        2. An interview/discussion round: for 15 teams selected from prelims.<br>
                        3. The Grand Finale: for 5 teams selected from interview round.
                    </p>
                    <p> For students from Bengaluru, Quadsparks hosts an offline prelims. 3 teams will be selected for the
                        Grand Finale from this round.<br> A total of 8 teams will participate in the stage finale.</p>
                    <br>
                </div>
                <div class="eligibility">
                    <h1>Eligibility</h1><br>
                    <p> High school students: Classes 9 to 12<br>
                        Participation is allowed as individual or teams of two
                    </p><br>
                </div>
                <div class="prizes">
                    <h1>Prizes</h1><br>
                    <p> The event will have Prizes of up to 1 lakh.
                    </p>
                </div>
            </div>
        </div>
        <div class="coord-intro" id="coords">
            <h1>Our Coordinators</h1><br>

            <p> Meet our amazing coordinators. For any query regarding the event, they are your first point of contact!
                Don't hesistate to mail them at any time of the day, and they will try to reply as soon as possible. For any
                general
                queries, mail us at scitech[dot]pravega[at]iisc[dot]ac[dot]in.
            </p><br>
        </div>


        <div class="coords">



            <div class="coord">
                <div class="coord-img">
                    <img src="\img\scitech\chethana.jpg" alt="scitech">
                </div><br>
                <div class="coord-text">
                    <h1>Chethana Nair</h1>
                    <p>Mail: pravega[dot]quadsparks[at]gmail[dot]com</p>
                </div>
            </div>
            <div class="coord">
                <div class="coord-img">
                    <img src="\img\scitech\amrit.jpg" alt="scitech">
                </div><br>
                <div class="coord-text">
                    <h1>Amrit M Joseph</h1>
                    <p>Mail: pravega[dot]quadsparks[at]gmail[dot]com</p>
                </div>
            </div>
        </div>
        <div class="quote">
            <div class="quote-text" style="font-family: 'Times New Roman', Times, serif;">
                <p>
                    Engage you brain cells like never before!
                </p>
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
                        <td>Winner</td>
                        <td>Shruto Kalyan Dey, Siddhartha Bondopadhyay </td>
                        <td>The Heritage School, Kolkata</td>
                    </tr>
                    <tr>
                        <td>1st Runner Up</td>
                        <td>Varun Sinha, Soham Pednekar </td>
                        <td>Pewar Public School, Mumbai</td>
                    </tr>
                    <tr>
                        <td>2nd Runner Up</td>
                        <td>Nidhish Palanikumar, Darshana Ambulkar </td>
                        <td>St. Paul’s English School, Bengaluru</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.float{
    display: flex;
    flex-direction: row;

}
.float1,.float2{
    width: 50%;
}
.float2{
    position: relative;
    left: 25%;
}
input[type=text] {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 30%;
    background-color: #037706;
    color: white;
    padding: 14px 13px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
}

input[type=submit]:hover {
    background-color: #015105;
}

.reg_button {
    background-color: #3e8ed0;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    border-radius: 30px;
}

.reg_button_1 {
    background-color: #48c78e;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    border-radius: 30px;
}

.reg_button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #3488ce;
}

.reg_button_1:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #3ec487;
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

.intro-content h1 {
    font-size: 5rem;
}

.intro-content p {
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

.coord-img img {
    width: 250px;
    height: 300px;
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
    .reg_button_1, .reg_button{
        padding: 15px;
    }

    .intro,
    .details,
    .declaration,
    .content,
    .hof {
        flex-direction: column;
    }

    .scitech-navbar {
        width: 100vw;
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

    .intro {
        height: 130vh;
    }

    .intro-content {
        height: 100vh;
    }

    .intro-image {
        top: 3vh;
    }

    .intro-image img {
        width: 100%;
    }

    .intro-content h1 {
        font-size: 3rem;
    }

    .intro-content p {
        font-size: 2rem;
    }

    .big-text {
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
    .prizes {
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

    .quote {
        position: relative;
        top: 40%;
        height: auto;
        margin: auto;
    }
}
</style>
