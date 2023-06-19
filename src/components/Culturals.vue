<script>
import Title from './Title.vue'
import Card from './Card.vue'
export default{
	components:{Title, Card}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "CULTURALS" color =  "#fff12d"/>
		<div :class = "`content`">
			<div :class="`description`">
				<!--To learn in detail about all the events, click
				<a :style="`color: inherit;`" class="grad underline" :href="`/pdf/Carvaan_rules.pdf`">here</a>.
				Below are the listed cities and dates for <span class="grad">CARVAAN 2023</span>.--> Hope to see you all during
				the prelims! For any queries, mail us at culturals.pravega@iisc.ac.in
			</div>
			<div :class = "'links'">
				<router-link to = "/culturals/bob">
					<Card link = "img/culturals/BOB V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/crescendo">
					<Card link = "/img/culturals/Crescendo V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/elegante">
					<Card link = "/img/culturals/Elegante V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/lasya">
					<Card link = "/img/culturals/Lasya V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/alekhya">
					<Card link = "/img/culturals/Alekhya V2.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/pandf">
					<Card link = "/img/culturals/Proscencium V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/carvaan/upload_reels">
					<Card link = "img/culturals/reelmaking.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/cwf">
					<Card link = "img/culturals/Cooking V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/dianoia">
					<Card link = "img/culturals/Dianoia V2.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/mun">
					<Card link = "img/culturals/MUN V1.jpg" size = "300px"/>
				</router-link>
				<router-link to = "/culturals/shutterbugs">
					<Card link = "img/culturals/Shutterbugs V2.jpg" size = "300px"/>
				</router-link>
				


			</div>
		</div>
	</div>
</template>

<style scoped>


.title-flex{
	display: flex;
	height: 100vh;
	overflow: hidden;
}
.content{
	background-color: #eeeeee;
	height: 85vh;
	top: 10vh;
	position: relative;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
	padding: 2rem 0rem;
	/* removes scrollbar */
	-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.description {
	padding: 20px;
	color: black;
	font-size: 25px;
	font-family: 'Roboto', sans-serif;
	text-align: center;
}

.grad {
	font-weight: bold;
	background-image: -webkit-linear-gradient(0deg, #f72585, #a92fde 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.content::-webkit-scrollbar {
  display: none;
}

.links{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	row-gap: 1.5rem;
	padding: 8px;
}

</style>
