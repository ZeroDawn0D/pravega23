<script>
import Title from './Title.vue'
import Soon from './Soon.vue'
export default{
	components:{Title, Soon}
}
</script>
<template>
	<div :class = "`title-flex`">
		<Title text = "SPONSORS" color = "#dd6e42"/>
		<div :class = "`content`">
			
			<div class = "big-text">
				CURRENT <span class = "grad">SPONSORS</span>
			</div><br>
			<div class = "links">
				<!--<a href = "https://www.airbus.com/"><img src = "/img/sponsors/airbus2.png" class = "wide"></a>

				<a href = "https://www.ibm.com/"><img src = "/img/sponsors/ibm.png" class = "wide"></a>

				<a href = "https://www.mercedes-benz.com/"><img src = "/img/sponsors/mercedezbenz.png" class = "wide"></a>-->
			</div>
			<div class = "links">
				
				<!--<a href = "https://www.redbull.com/"><img src = "/img/sponsors/redbull.png" class = "normal"></a>
				<a href = "https://www.shell.com/"><img src = "/img/sponsors/shell.png" class = "normal"></a>
				<a href = "https://www.pizzahut.co.in/"><img src = "/img/sponsors/pizzahut.png" class = "normal"></a>
				<a href = "https://www.monsterenergy.com/"><img src = "/img/sponsors/monster.png" class = "normal"></a>-->

			</div>
			
			<br/>
			<div class="big-text">Tech Partner</div>
			<div class = "links">
				
				<a href = "https://www.cognavi.com/"><img src = "/img/sponsors/cognavi.png" class = "normal"></a>
				
			</div>

			<div class="big-text">Digital Partner</div>
			<div class = "links">
				
				<a href = "https://apralabs.com/"><img src = "/img/sponsors/apralabs.png" class = "normal"></a>
				
			</div>
			<hr><br>
			<div class = "links">
				
				<a href = "https://www.artpark.in/"><img src = "/img/sponsors/artpark.png" class = "normal"></a>
				
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
	position: relative;
	top: 10vh;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: scroll;
}


.big-text{
	font-weight: bold;
	font-size: 50px;
	text-align: center;
	padding: 10px;
}
.grad{
  	background: -webkit-linear-gradient(45deg, #dd6e42, #3a0ca6);
	background-clip: text;
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
}

.links{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-top: 8px;
	align-items: center;
	gap: 8px;
}

.normal{
	height: 70px;
	width: auto;
}

.wide{
	width: 200px;
	height: auto;
}

@media screen and (max-width: 1024px){
	.normal{
		height: 70px;
	}
	.wide{
		width: 140px;
	}
}
</style>