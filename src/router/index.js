import {createRouter, createWebHistory} from 'vue-router'

import Home from "../components/Home.vue"
import Carvaan from "../components/Carvaan.vue"
import Scitech from "../components/Scitech.vue"
import Culturals from "../components/Culturals.vue"
import Workshop from "../components/Workshop.vue"
import Merchandise from "../components/Merchandise.vue"
import Sponsors from "../components/Sponsors.vue"
import Contact from "../components/Contact.vue"
import Register from "../components/carvaan/Register.vue"
import Uploadreels from "../components/carvaan/Uploadreels.vue"
import Register2 from "../components/aaghaz/aaghaaz_register.vue"
import Cities from "../components/carvaan/Cities.vue"
import Aaghaz from "../components/Aaghaz.vue"
import Sports from "../components/aaghaz/Sports.vue"
//SciTech
import scitech_template from "../components/scitech/template.vue"
import deco_register from "../components/scitech/deco_register.vue"
import chemenigma_register from "../components/scitech/chemenigma_register.vue"
import bioblitz_register from "../components/scitech/bioblitz_register.vue"
import quadsparks_register from "../components/scitech/quadsparks_register.vue"
import quadsparks_discount_register from "../components/scitech/quadsparks_discount_register.vue"
import bah_register from "../components/scitech/bah_register.vue"
import enumeration_register from "../components/scitech/enumeration_register.vue"
import exhibitions_register from "../components/scitech/exhibitions_register.vue"
import ideathon_register from "../components/scitech/ideathon_register.vue"
import pis_register from "../components/scitech/pis_register.vue"
import decoherence from "../components/scitech/decoherence.vue"
import chemenigma from "../components/scitech/chemenigma.vue"
import bioblitz from "../components/scitech/bioblitz.vue"
import bah from "../components/scitech/BAH.vue"
import enumeration from "../components/scitech/enumeration.vue"
import exhibitions from "../components/scitech/exhibitions.vue"
import pis from "../components/scitech/PIS.vue"
import quadsparks from "../components/scitech/quadsparks.vue"
import hoco from "../components/scitech/hoco.vue"
import stemposium from "../components/scitech/stemposium.vue"
//Culturals
import cultural_template from "../components/culturals/cultural_template.vue"
import recreationals from "../components/recreationals.vue"
import bob from "../components/culturals/bob.vue"
import crescendo from "../components/culturals/crescendo.vue"
import lasya from "../components/culturals/lasya.vue"
import shutterbugs from "../components/culturals/shutterbugs.vue"
import shutterbugs_register from "../components/culturals/shutterbugs_register.vue"
import dianoia from "../components/culturals/dianoia.vue"
import dianoia_register from "../components/culturals/dianoia_register.vue"
import pandf from "../components/culturals/pandf.vue"
import elegante from "../components/culturals/elegante.vue"
import cwf from "../components/culturals/cwf.vue"
import cwf_register from "../components/culturals/cwf_register.vue"
import mun from "../components/culturals/mun.vue"
import mun_register from "../components/culturals/mun_register.vue"
import alekhya from "../components/culturals/alekhya.vue"
import alekhya_register from "../components/culturals/alekhya_register.vue"
import merch from "../components/Merchandise-test.vue"
//Recreationals
import bgmi from "../components/recreationals/bgmi.vue"
import valorant from "../components/recreationals/valorant.vue"
import chess_register from "../components/recreationals/chess_register.vue"
import chess from "../components/recreationals/chess.vue"
import killer_instinct_register from "../components/recreationals/killer_instinct_register.vue"
/*import Delhi from "../components/carvaan/Delhi.vue"


import Mumbai from "../components/carvaan/Mumbai.vue"
import Ahmedabad from "../components/carvaan/Ahmedabad.vue"
import Kochi from "../components/carvaan/Kochi.vue"
import Bhubaneswar from "../components/carvaan/Bhubaneswar.vue"
import Bengaluru from "../components/carvaan/Bengaluru.vue"
import Chennai from "../components/carvaan/Chennai.vue"
import Hyderabad from "../components/carvaan/Hyderabad.vue"

import Kolkata from "../components/carvaan/Kolkata.vue"



import Kolkata from "../components/carvaan/Kolkata.vue"*/


const routes = [
	{path: "/", name: "Home", component: Home},
	{path: "/carvaan", name: "Carvaan", component: Carvaan},
	{path: "/scitech", name:"SciTech", component: Scitech},
	{path: "/cultural", name:"Culturals", component: Culturals},
	{path: "/workshop", name:"Workshop", component: Workshop},
	{path: "/merch", name:"Merchandise", component: Merchandise},
	{path: "/sponsors", name:"Sponsors", component: Sponsors},
	{path: "/contact", name: "Contact", component: Contact},
	{path: "/carvaan/cities", name:"Cities",component:Cities},
	{path: "/aaghaz", name:"Aaghaz", component: Aaghaz},
	{path: "/aaghaz/sports", name:"Sports", component: Sports},
	{path: "/carvaan/register", name:"Register",component:Register},
	{path: "/carvaan/upload_reels", name:"Uploadreels",component:Uploadreels},
	{path: "/aaghaz/aaghaaz_register", name:"Register2",component:Register2},
	{path: "/scitech/template", name:"scitech_template",component:scitech_template},
	{path: "/scitech/deco_register", name:"deco_register",component:deco_register},
	{path: "/scitech/chemenigma_register", name:"chemenigma_register",component:chemenigma_register},
	{path: "/scitech/bioblitz_register", name:"bioblitz_register",component:bioblitz_register},
	{path: "/scitech/quadsparks_register", name:"quadsparks_register",component:quadsparks_register},
	{path: "/scitech/quadsparks_discount_register", name:"quadsparks_discount_register",component:quadsparks_discount_register},
	{path: "/scitech/bah_register", name:"bah_register",component:bah_register},
	{path: "/scitech/enumeration_register", name:"enumeration_register",component:enumeration_register},
	{path: "/scitech/exhibitions_register", name:"exhibitions_register",component:exhibitions_register},
	{path: "/scitech/ideathon_register", name:"ideathon_register",component:ideathon_register},
	{path: "/scitech/pis_register", name:"pis_register",component:pis_register},
	{path: "/scitech/decoherence", name:"decoherence",component:decoherence},
	{path: "/scitech/chemenigma", name:"chemenigma",component:chemenigma},
	{path: "/scitech/bioblitz", name:"bioblitz",component:bioblitz},
	{path: "/scitech/bah", name:"bah",component:bah},
	{path: "/scitech/enumeration", name:"enumeration",component:enumeration},
	{path: "/scitech/exhibitions", name:"exhibitions",component:exhibitions},
	{path: "/scitech/pis", name:"pis",component:pis},
	{path: "/scitech/quadsparks", name:"quadsparks",component:quadsparks},
	{path: "/scitech/hoco", name:"hoco",component:hoco},
	{path: "/scitech/stemposium", name:"stemposium",component:stemposium},
	{path: "/culturals/cultural_template", name:"cultural_template",component:cultural_template},
	{path: "/recreationals", name:"recreationals",component:recreationals},
	{path: "/culturals/bob", name:"bob",component:bob},
	{path: "/culturals/crescendo", name:"crescendo",component:crescendo},
	{path: "/culturals/lasya", name:"lasya",component:lasya},
	{path: "/culturals/shutterbugs", name:"shutterbugs",component:shutterbugs},
	{path: "/culturals/shutterbugs_register", name:"shutterbugs_register",component:shutterbugs_register},
	{path: "/culturals/dianoia", name:"dianoia",component:dianoia},
	{path: "/culturals/dianoia_register", name:"dianoia_register",component:dianoia_register},
	{path: "/culturals/pandf", name:"pandf",component:pandf},
	{path: "/culturals/elegante", name:"elegante",component:elegante},
	{path: "/culturals/cwf", name:"cwf",component:cwf},
	{path: "/culturals/cwf_register", name:"cwf_register",component:cwf_register},
	{path: "/culturals/mun", name:"mun",component:mun},
	{path: "/culturals/mun_register", name:"mun_register",component:mun_register},
	{path: "/culturals/alekhya", name:"alekhya",component:alekhya},
	{path: "/culturals/alekhya_register", name:"alekhya_register",component:alekhya_register},
	{path: "/merch-test", name:"merch-test", component:merch},
	{path: "/recreationals/chess_register", name:"chess_register", component:chess_register},
	{path: "/recreationals/chess", name:"chess", component:chess},
	{path: "/recreationals/bgmi", name:"bgmi", component:bgmi},
	{path: "/recreationals/valorant", name:"valorant", component:valorant},
	{path: "/recreationals/killer_instinct_register", name:"killer_instinct_register", component:killer_instinct_register},


	/*{path:"/carvaan/mumbai",name:"Mumbai",component:Mumbai},
	{path:"/carvaan/ahmedabad",name:"Ahmedabad",component:Ahmedabad},
	{path:"/carvaan/kochi",name:"Kochi",component:Kochi},
	{path:"/carvaan/bhubaneswar",name:"Bhubaneswar",component:Bhubaneswar},
	{path:"/carvaan/bengaluru",name:"Bengaluru",component:Bengaluru},
	{path:"/carvaan/chennai",name:"Chennai",component:Chennai},
	{path:"/carvaan/hyderabad",name:"Hyderabad",component:Hyderabad},
	{path:"/carvaan/kolkata",name:"Kolkata",component:Kolkata},


	{path:"/carvaan/kolkata",name:"Kolkata",component:Kolkata}*/
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(async (to, from) => {
	if (to.name === 'quadsparks_discount_register' && from.name !== 'quadsparks') {
// redirect the user to the quadsparks page
return '/scitech/quadsparks'
}

//add conditionality here for further pages

})

export default router
