<script>
	export default {
    data(){
    	return{
        choice: 0
      }
    },
    methods:{
      updateNav(choice){
        this.choice = choice
      }
    },
    emits: ['navUpdate'],
    watch: {
			choice(newChoice){
        this.$emit('navUpdate',newChoice)
      }
    }
  }
</script>

<template>
  <nav :id="`navbar`">
    <div :class="`left-pravega`" @click="updateNav(0)">
      <router-link :style = "`text-decoration: none; color: inherit`" to="/">
      	Pravega
      </router-link>
    </div>
    <div :class="`right-nav`">
    	<div @click="updateNav(1)" :class="`scitech-button`">
      		<router-link :style = "`text-decoration: none; color: inherit; `" to="/scitech">
      		SciTech
      		</router-link>
    	</div>
    	<div  @click="updateNav(2)" :class="`cult-button`">
    		<router-link :style = "`text-decoration: none; color: inherit`" to="/cultural">
      		Culturals
      		</router-link>
    	</div>
    	<div  @click="updateNav(3)" :class="`workshop-button`">
      		<router-link :style = "`text-decoration: none; color: inherit`" to="/workshop">
      		Workshop
      		</router-link>
    	</div>
    	<div  @click="updateNav(4)" :class="`merch-button`">
      		<router-link :style = "`text-decoration: none; color: inherit`" to="/merch">
      		Merchandise
      		</router-link>
    	</div>
    	<div  @click="updateNav(5)" :class="`spon-button`">
      		<router-link :style = "`text-decoration: none; color: inherit`" to="/sponsors">
      		Sponsors
      		</router-link>
    	</div>
    	<div  @click="updateNav(6)" :class="`cont-button`">
    		<router-link :style = "`text-decoration: none; color: inherit`" to="/contact">
      		Contact
      		</router-link>
    	</div>
    </div>
  </nav>
</template>

<style scoped>
  	
  #navbar{
    position: sticky;
    top: 0px;
    height: 10vh;
    width: 100vw;
    box-sizing: border-box;
    gap: 20vw;
    display:flex;
    align-items: center;
    background-color: #3a0ca3;
    color: #eeeeee;
    padding-left: 5vw;
    z-index: 2;
  }
  .left-pravega{
  	cursor: pointer;
  }
  .right-nav{
  	font-size: 1.5em;
    display:flex;
    gap: 40px;
    justify-content: space-evenly;
    align-items: center;
  }
  .right-nav div{
    padding: 8px;
    cursor:pointer;
    transition: color 600ms, background-color 600ms, background-position 500ms;

    background-size: 200% 200%;
    background-position: 50% 0%;
    border-radius: 18px;
  }
  .right-nav div:hover{

    background-position: 50% 60%;
  }

  .scitech-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #f72585 100%);
  }
  .scitech-button:hover{
    color: #f72585;
  }

  .cult-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #fff12d 100%);
  }
  .cult-button:hover{
    color: #fff12d;
  }
  .workshop-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #3fd8a4 100%);
  }
  .workshop-button:hover{
    color: #3fd8a4;
  }  
  .merch-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #7bff28 100%);
  }
  .merch-button:hover{
    color: #7bff28;
  }  
  .spon-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #dd6e42 100%);
  }
  .spon-button:hover{
    color: #dd6e42;
  }  
  .cont-button{
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 50%, #3fd8a4 100%);
  }
  .cont-button:hover{
    color: #3fd8a4;
  }  
</style>
