<script>
import Title from './Title.vue'
import Soon from './Soon.vue'
export default{
	components:{Title, Soon}
}

</script>

<template>
	<div :class = "`title-flex`">
		<Title text = "MERCH" color = "#7bff28"/>
		<div :class = "`content`">
			<iframe src="https://google.com/" style="top:0vh; height:100%; width:100%"></iframe>
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
	height: 90vh;
	position: relative;
	top: 10vh;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
	overflow-x: scroll;
	padding: 0rem 0rem;
	/* removes scrollbar */
	-ms-overflow-style: none;  /* IE and Edge */
	scrollbar-width: none;  /* Firefox */
}
.content::-webkit-scrollbar {
  display: none;
}
</style>
