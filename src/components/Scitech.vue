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
			<div :class="'links'">
				<router-link to="/scitech/decoherence">
					<Card link="/img/scitech/Decoherence.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/bioblitz">
					<Card link="/img/scitech/BioBlitz.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/chemenigma">
					<Card link="/img/scitech/Chemenigma.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/enumeration">
					<Card link="/img/scitech/Enumeration.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/quadsparks">
					<Card link="/img/scitech/Quadsparks.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/bah">
					<Card link="/img/scitech/BAH.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/pis">
					<Card link="/img/scitech/PIS.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/exhibitions">
					<Card link="/img/scitech/Exhibitions.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/hoco">
					<Card link="/img/scitech/HonourCode.webp" size="300px" />
				</router-link>
				<router-link to="/scitech/stemposium">
					<Card link="/img/scitech/Stemposium.webp" size="300px" />
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
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
