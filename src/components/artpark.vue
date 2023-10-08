<script >

/* export default{
     mounted(){
         this.$swal.fire({
icon: 'info',
title: 'Important',
text: 'Prelims Result is announced on the website.',
})
 },
 /*created: function(){
     this.loading()
 },
 methods:{
     loading: function(){
         swal("Alert","something something","info")
     }
 }
 }*/
</script>

<template>
    <div class="content-stuff">

        <div class="scitech-navbar">
            <ul>
                <li><a id="link" style="font-size: 1.2rem;" href="/pdf/Rules Document for the ARTPARK Event.docx">Rules</a>
                </li>
            </ul>
        </div>

        <div class="intro">
            <div class="intro-content">
                <br><br>
                <h2>ARTPARK-Pravega Robotics Challenge</h2><br>
                <p style="font-size:x-large">ARTPARK-Pravega Robotics Challenge: Pioneering Autonomous Navigation in
                    Dynamic, Unstructured Environments

                </p><br>
            </div>
            <div class="intro-image">
                <img src="/img/ROBOTICS CHALLENGE.png" alt="scitech">
            </div>
        </div>

        <div class="declaration">
            <div class="big-text" style="background-color: #ebf234;">
                <h1>Don't miss out on<br /> IISc's Premier Robotics Event<br /><br /><br /> Problem Statement</h1>
            </div>
            <div class="small-text" style="background-color: #ebf234;">
                <p>
                    Autonomous navigation has come a long way, from basic floor tape tracking to advanced sensors like
                    laser, sonar, and VSLAM. Today's Autonomous Mobile Robots (AMRs) are vital in manufacturing and
                    logistics, but a major challenge remains: creating reliable navigation for unmapped, dynamic spaces.
                    Join the ARTPARK-Pravega Robotics Challenge to innovate in autonomous navigation for such environments.
                    Redefine robotics' future and help shape the next-gen navigation systems. Calling all enthusiasts and
                    problem solvers!
                </p>
            </div>
        </div>

        <div class="details">
            <div class="img">
                <img src="/img/aph text.png" alt="scitech" style="width: 90%;">
            </div>
            <div class="text">
                <div class="timeline">
                    <h1>Timeline</h1><br>
                    <p> The event registration and prelims response submission form will be open till November 10th, 2023.
                        Participants are supposed to submit their code stack along with a video of their simulation on the
                        submission Google form by that date. The prelims results will be announced on 15th December 2023.
                        The finals will be held offline in the IISc campus on the days of Pravega.
                    </p>
                </div>
                <div class="eligibility">
                    <h1>Eligibility</h1><br>
                    <p> The event is open to all, with team sizes of up to 4 people.
                    </p>
                </div>
                <div class="rules">
                    <h1>Rules</h1>
                    <p>You can find the rules <a href="/pdf/Rules Document for the ARTPARK Event.docx">here</a></p>
                </div>
                <div class="prizes">
                    <h1>Prizes</h1>
                    <p> The event has a prize pool of up to 1.5 lakh rupees along with a travel and accommodation grant for
                        the finalists.
                    </p>
                </div>
                <div class="desc">
                    <h1>Prelims problem Statement</h1>
                    Design an efficient AMR fleet management algorithm and demonstrate it in a simulated environment (using
                    Gazebo etc.).
                </div>
                <div class="desc">
                    <h1>Finals Problem Statement</h1>
                    Demonstrate a ROS-compliant AMR fleet management algorithm with robots in environments with dynamic
                    obstacles (humans) and narrow corners.
                </div>
            </div>
        </div>




        <!--   <div class="quote">
            <div class="quote-text" style="font-family: 'Times New Roman', Times, serif;">
                <p> Stay tuned for further details and announcements as we gear up for this exciting event!"
                </p>
            </div>
        </div>-->



    </div>
</template>

<style scoped>
.reg_button {
    background-color: #5d83eb;
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

.intro-content h1,
.intro-content h2 {
    font-size: 5rem;
}

.intro-content h2 {
    font-size: 3.5rem;
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
    margin: 0 auto;
    background-color: #ffffff;
    align-items: center;
    text-align: center;
    z-index: 9999;
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
.rules,
.rules,
.eligibility,
.prizes,
.desc {
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

.coord-intro {
    font-size: larger;
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
        width: 100vw;
    }

    .intro-image img {
        width: 100%;
    }

    .intro-content {
        width: 90vw;
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
        font-size: 1.7rem;
    }

    .details img {
        width: 100vw;
        height: auto;

    }

    .text,
    .timeline,
    .rules,
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
}</style>
