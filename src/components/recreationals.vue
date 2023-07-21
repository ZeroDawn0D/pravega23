<script>
import Title from './Title.vue'
import Card from './Card.vue'
export default{
	components:{Title, Card}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "RECREATIONALS" color =  "#3fd8a4"/>
		<div :class = "`content`">
			<div :class = "'links'">
				<router-link to = "/recreationals/chess_register">
					<Card link = "img/recreationals/chess.jpg" size = "350px"/>
				</router-link>
				<router-link to = "/recreationals/bgmi_register">
					<Card link = "img/recreationals/pubg.jpg" size = "350px"/>
				</router-link>
				<router-link to = "/recreationals/valorant_register">
					<Card link = "img/recreationals/valorant.jpg" size = "350px"/>
				</router-link>
				<router-link to = "/recreationals/killer_instinct_register">
					<Card link = "img/recreationals/killer instinct registration post page 2_1_2.jpg" size = "350px"/>
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
