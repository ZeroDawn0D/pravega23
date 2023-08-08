<script>
import Title from '../Title.vue'
import Soon from '../Soon.vue'
import {useScriptTag} from '@vueuse/core'

useScriptTag('https://embed.typeform.com/next/embed.js')
export default{
	components:{Title, Soon},
	mounted(){
        let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '//embed.typeform.com/next/embed.js')
      document.head.appendChild(recaptchaScript)

    }
}
</script>

<template>
<div :class = "`title-flex`">
		<Title text = "UPLOAD" color = "#f72585"/>
		<div :class = "`content`">
			<div data-tf-live="01H7ATKX5J1XJYD6ZB61S8ZMVM"></div>
		</div>
	</div>
</template>

<style scoped>
.title-flex{
	display: flex;
	height: 90vh;
}
.content{
	position: relative;
	top: 10vh;
	height: 90vh;
	background-color: #eeeeee;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	overflow-y: hidden;
}
</style>