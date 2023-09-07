<script>
export default{
  data(){
    return{
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownDate: Number,
      timer: Object
    }
  },
  methods: {
    countdown(){
    	var now = new Date().getTime();
    	var distance = this.countdownDate - now;
    	this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    	this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  },
  created(){
    this.countdownDate = new Date("Jan 26, 2024, 12:00:00").getTime();
    this.timer = setInterval(()=>{this.countdown()},1000)
  },
  beforeUnmount(){
    clearInterval(this.timer)
  }
}
</script>

<template>
  <div class = 'date-flex'>
	<div class = "date-part-1">
        <span class = "darker">
            {{this.days}}
        </span>
        
        <span class = "lighter">
            DAYS
        </span>
    </div>

    <div class = "date-part-2">
            <span class = "darker">
              {{this.hours}}
            </span>
            <span class = "lighter">
              HOURS
            </span>
    </div>
          <div class = "date-part">
            <span class = "darker">
              {{this.minutes}}
            </span>
            <span class = "lighter">
              MINUTES
            </span>
          </div>
          <div class = "date-part">
            <span class = "darker">
              {{this.seconds}}
            </span>
            <span class = "lighter">
              SECONDS
            </span>
          </div>
    </div>
</template>

<style scoped>

  .date-flex{
    display: flex;
    position: relative;
    top: -5%;
    left: 3%;
  }

  .date-part-1{
    display: grid;
    grid-template-columns: 90px 220px;
    margin-left: 40px;
  	gap: 0px;
    font-size: 50px;
    font-weight: bold;
    line-height: 40px;
    background-color: rgba(0,0,0,0);
  }

  .date-part-2{
    display: grid;
    grid-template-columns: 90px 230px;
    margin-left: 10px;
  	gap: 0px;
    font-size: 50px;
    font-weight: bold;
    line-height: 40px;
    background-color: rgba(0,0,0,0);
  }
  .date-part{
    
  	display: grid;
  	grid-template-columns: 90px 250px;
    margin-left: 30px;
  	gap: 0px;
    font-size: 50px;
    font-weight: bold;
    line-height: 40px;
    background-color: rgba(0,0,0,0);
  }

  .lighter{
  	position: relative;
  	animation: appearLighter 0.8s ease-out;
    
    background-image: -webkit-linear-gradient(45deg, #f72585, #a92fde 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .darker{
  	display: inline-block;
  	position: relative;
    color: #f72585;
    animation: appearDarker 2s ease-out;


  }
  @media screen and (max-width: 1024px){
    .date-flex{
      top:10%;
      left:10%;
    }
    .date-part-1,.date-part-2,.date-part{
      font-size: 13px;
      margin: 0%;
    }
    .date-part-1{
      grid-template-columns: 20px 43px;
    }
    .date-part-2{
      grid-template-columns: 20px 55px;
    }
    .date-part{
      grid-template-columns: 20px 65px;
    }
  }

  @keyframes appearLighter{
  	0%{
  		opacity: 0%;
  		left: 30px;
  	}
  	100%{
  		opacity: 100%;
  		left: 0px;
  	}
  }

  @keyframes appearDarker{
  	0%{
  		opacity: 0%;
  		left: 30px;
  	}
  	50%{
  		opacity: 0%;

  	}
  	100%{
  		opacity: 1;
  		left: 0px;
  	}
  }
</style>