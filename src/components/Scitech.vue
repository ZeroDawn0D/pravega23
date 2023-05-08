<script>
import Title from './Title.vue'
import Card from './Card.vue'
export default{
	components:{Title, Card}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "SCITECH" color = "#f72585"/>
		<div :class = "`content`">
			<div :class = "'links'">
				<router-link to = "/scitech/template">
					<Card link = "/img/scitech/Decoherence.jpg" size = "300px"/>
			    </router-link>

			    <router-link to = "/scitech/bioblitz">
				<Card link = "/img/scitech/BioBlitz.jpg" size = "300px"/>
			</router-link>
				<router-link to = "/scitech/chemenigma">
				<Card link = "/img/scitech/Chemenigma.jpg" size = "300px"/>
			</router-link>
				<router-link to = "/scitech/enumeration">
				<Card link = "/img/scitech/Enumeration.jpg" size = "300px"/>
			</router-link>
				<router-link to = "/scitech/quadsparks">
				<Card link = "/img/scitech/Quadsparks.jpg" size = "300px"/>
			</router-link>
				<router-link to = "/scitech/bah">
				<Card link = "/img/scitech/BAH.jpg" size = "300px"/>
			</router-link>
				<router-link to = "/scitech/pis">
				<Card link = "/img/scitech/PIS.jpg" size = "300px"/>
			</router-link>

				<router-link to = "/scitech/exhibitions">
					<Card link = "/img/scitech/Exhibitions.jpg" size = "300px"/>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.title-flex{
	display: flex;
	height: 90vh;
}
.content{
	background-color: #eeeeee;
	height: 90vh;
	top: 10vh;
	position: relative;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
}
.links{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	row-gap: 8px;
	padding-top: 8px;
}

</style>