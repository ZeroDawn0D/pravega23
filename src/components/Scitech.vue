<script>
import Title from './Title.vue'
import Card from './Card.vue'
export default {
	components: { Title, Card }
}
</script>
<template>
	<div :class="`title-flex`">
		<Title text="SCITECH" color="#f72585" />
		<div :class="`content`">
			<div :class="`description`">
				<!--To learn in detail about all the events, click
				<a :style="`color: inherit;`" class="grad underline" :href="`/pdf/Carvaan_rules.pdf`">here</a>.
				Below are the listed cities and dates for <span class="grad">CARVAAN 2023</span>.--> Hope to see you all during
				the prelims! For any queries, mail us at scitech.pravega@iisc.ac.in
			</div>
			<div :class="'links'">
				<router-link to="/scitech/decoherence">
					<Card link="/img/scitech/Decoherence.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/bioblitz">
					<Card link="/img/scitech/BioBlitz.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/chemenigma">
					<Card link="/img/scitech/Chemenigma.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/enumeration">
					<Card link="/img/scitech/Enumeration.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/quadsparks">
					<Card link="/img/scitech/Quadsparks.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/bah">
					<Card link="/img/scitech/BAH.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/pis">
					<Card link="/img/scitech/PIS.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/exhibitions">
					<Card link="/img/scitech/Exhibitions.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/hoco">
					<Card link="/img/scitech/HonourCode.jpg" size="300px" />
				</router-link>
				<router-link to="/scitech/stemposium">
					<Card link="/img/scitech/Stemposium.jpg" size="300px" />
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
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
.title-flex {
	display: flex;
	height: 100vh;
	overflow: hidden;
}

.content {
	background-color: #eeeeee;
	height: 85%;
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

.links {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	row-gap: 1.5rem;
	padding-top: 8px;
}
</style>
