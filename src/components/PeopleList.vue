<template>
  <div class="people-list">
    <PersonCard v-for="person in people" :key="person.id" :person="person" />
  </div>
</template>

<script>
// import { ref, onMounted } from 'vue';
// import axios from 'axios';
import PersonCard from '@/components/PersonCard.vue';
// import { people } from './data.js';

export default {
  components: {
    PersonCard
  },
  // setup() {
  //   const people = ref([]);

  //   // Fetch data when component mounts
  //   onMounted(async () => {
  //     try {
  //       const response = await axios.get('http://api-url/people');
  //       people.value = response.data;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   });

  //   return { people };
  // }
  setup() {
    // Stand-in variable with mock data
    const people = [
      { id: 1, name: "David Thomson & Family", photo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/David_Thomson.png", netWorth: "$69.6 billion", mediaInfluence: "Owners of Thomson Reuters", controversies: "Family disputes over succession" },
      { id: 2, name: "Changpeng Zhao", photo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Changpeng_Zhao_in_2022.jpg", netWorth: "$64.15 billion", mediaInfluence: "Crypto industry leader with Binance", controversies: "Regulatory scrutiny globally" },
      { id: 3, name: "Joseph Tsai", photo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Joseph_Tsai.png", netWorth: "$10.12 billion", mediaInfluence: "Owner of Brooklyn Nets", controversies: "Data privacy concerns with Alibaba" },
      { id: 4, name: "David Cheriton", photo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/David_Cheriton.png", netWorth: "$17.07 billion", mediaInfluence: "Early investor in Google", controversies: "Minimal" },
      { id: 5, name: "Tobi Lütke", photo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Tobi_Lutke.png", netWorth: "$9.54 billion", mediaInfluence: "Shopify’s impact on e-commerce", controversies: "Hosting controversial merchants" },
      { id: 6, name: "Jim Pattison", photo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Jim_Pattison.png", netWorth: "$8.67 billion", mediaInfluence: "Owns multiple media outlets", controversies: "Criticized for labor practices" },
      { id: 7, name: "Arthur Irving", photo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Arthur_Irving.png", netWorth: "$6.6 billion", mediaInfluence: "Family-owned newspapers in Atlantic Canada", controversies: "Environmental concerns" },
      { id: 8, name: "Galen Weston & Family", photo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Galen_Weston.png", netWorth: "$9 billion", mediaInfluence: "Retail advertising dominance", controversies: "Bread price-fixing scandal" },
      { id: 9, name: "Garrett Camp", photo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Garrett_Camp.png", netWorth: "$6.5 billion", mediaInfluence: "Co-founder of Uber", controversies: "Uber’s labor practices" },
      { id: 10, name: "Anthony von Mandl", photo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Anthony_von_Mandl.png", netWorth: "$6.56 billion", mediaInfluence: "Lifestyle brands like White Claw", controversies: "Minimal" },
      { id: 11, name: "Bruce Flatt", photo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Bruce_Flatt.png", netWorth: "$4 billion", mediaInfluence: "Real estate dominance through Brookfield", controversies: "Investment practices scrutiny" },
      { id: 12, name: "Lawrence Stroll", photo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Lawrence_Stroll.png", netWorth: "$3.9 billion", mediaInfluence: "Formula 1 team owner", controversies: "Criticized for management decisions" },
      { id: 13, name: "Alain Bouchard", photo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Alain_Bouchard.png", netWorth: "$7.31 billion", mediaInfluence: "Couche-Tard’s branding", controversies: "Labor disputes" },
      { id: 14, name: "Chip Wilson", photo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Chip_Wilson.png", netWorth: "$5.9 billion", mediaInfluence: "Lululemon marketing", controversies: "Remarks on product sizing" },
      { id: 15, name: "Emanuele Saputo", photo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Emanuele_Saputo.png", netWorth: "$5.24 billion", mediaInfluence: "Limited", controversies: "Allegations of past mob connections" },
      { id: 16, name: "James Irving", photo: "https://upload.wikimedia.org/wikipedia/commons/2/23/James_Irving.png", netWorth: "$6.4 billion", mediaInfluence: "Newspapers in New Brunswick", controversies: "Environmental issues" },
      { id: 17, name: "Richardson Family", photo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Richardson_Family.png", netWorth: "$4.45 billion", mediaInfluence: "Agricultural influence", controversies: "Minimal" },
      { id: 18, name: "Jeffrey Skoll", photo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Jeffrey_Skoll.png", netWorth: "$4.92 billion", mediaInfluence: "Participant Media", controversies: "Limited" },
      { id: 19, name: "Carlo Fidani", photo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Carlo_Fidani.png", netWorth: "$4.08 billion", mediaInfluence: "Limited", controversies: "Minimal" },
      { id: 20, name: "Victor Li", photo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Victor_Li.png", netWorth: "$10 billion", mediaInfluence: "Indirect through business interests", controversies: "Family disputes" },
      { id: 21, name: "Thomson Family", photo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/David_Thomson.png", netWorth: "$69.6 billion", mediaInfluence: "Thomson Reuters ownership", controversies: "Succession disputes" },
      { id: 22, name: "Peter Gilgan", photo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Peter_Gilgan.png", netWorth: "$4.12 billion", mediaInfluence: "Founder of Mattamy Homes", controversies: "Urban sprawl concerns" },
      { id: 23, name: "Seymour Schulich", photo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Seymour_Schulich.png", netWorth: "$1.7 billion", mediaInfluence: "Philanthropy", controversies: "Minimal" },
      { id: 24, name: "Hartley Richardson", photo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Hartley_Richardson.png", netWorth: "$1.8 billion", mediaInfluence: "Agribusiness impact", controversies: "Minimal" },
      { id: 25, name: "Michael Lee-Chin", photo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Michael_Lee-Chin.png", netWorth: "$1.9 billion", mediaInfluence: "Investor and philanthropist", controversies: "Minimal" },
      { id: 26, name: "Jim Balsillie", photo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Jim_Balsillie.png", netWorth: "$1.6 billion", mediaInfluence: "Research In Motion co-founder", controversies: "Patent disputes" },
      { id: 27, name: "Prem Watsa", photo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Prem_Watsa.png", netWorth: "$1.9 billion", mediaInfluence: "Fairfax Financial leader", controversies: "Minimal" },
      { id: 28, name: "Stephen Jarislowsky", photo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Stephen_Jarislowsky.png", netWorth: "$1.5 billion", mediaInfluence: "Investment leadership", controversies: "Minimal" },
      { id: 29, name: "Sherry Brydson", photo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Sherry_Brydson.png", netWorth: "$6.5 billion", mediaInfluence: "Woodbridge interests", controversies: "Minimal" },
      { id: 30, name: "Linda Hasenfratz", photo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Linda_Hasenfratz.png", netWorth: "$1.4 billion", mediaInfluence: "Linamar Corporation CEO", controversies: "Labor disputes" },
      { id: 31, name: "John Risley", photo: "https://upload.wikimedia.org/wikipedia/commons/5/59/John_Risley.png", netWorth: "$1.3 billion", mediaInfluence: "Ocean Nutrition ownership", controversies: "Environmental concerns" },
      { id: 32, name: "Eugene Melnyk", photo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Eugene_Melnyk.png", netWorth: "$1.2 billion", mediaInfluence: "Ottawa Senators ownership", controversies: "Management controversies" },
      { id: 33, name: "Jean Coutu", photo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Jean_Coutu.png", netWorth: "$1.8 billion", mediaInfluence: "Pharmacy empire", controversies: "Minimal" },
      { id: 34, name: "Aldo Bensadoun", photo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Aldo_Bensadoun.png", netWorth: "$1.1 billion", mediaInfluence: "Retail fashion", controversies: "Minimal" },
      { id: 35, name: "Murray Edwards", photo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Murray_Edwards.png", netWorth: "$2 billion", mediaInfluence: "Energy sector leader", controversies: "Environmental practices" },
      { id: 36, name: "Clayton Riddell", photo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Clayton_Riddell.png", netWorth: "$1.6 billion", mediaInfluence: "Resource investments", controversies: "Minimal" },
      { id: 37, name: "Daryl Katz", photo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Daryl_Katz.png", netWorth: "$2 billion", mediaInfluence: "Edmonton Oilers ownership", controversies: "Stadium funding issues" },
      { id: 38, name: "Irving Family", photo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Irving_Family.png", netWorth: "$10 billion", mediaInfluence: "Energy and forestry", controversies: "Environmental issues" },
      { id: 39, name: "Joel Silver", photo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Joel_Silver.png", netWorth: "$1.5 billion", mediaInfluence: "Film production", controversies: "Financial disputes" },
      { id: 40, name: "Barry Sherman", photo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Barry_Sherman.png", netWorth: "$3 billion", mediaInfluence: "Pharmaceuticals", controversies: "Legal battles" },
      { id: 41, name: "Paul Desmarais Jr.", photo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Paul_Desmarais_Jr.png", netWorth: "$4 billion", mediaInfluence: "Power Corporation leadership", controversies: "Minimal" },
      { id: 42, name: "James Balsillie", photo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Jim_Balsillie.png", netWorth: "$1.6 billion", mediaInfluence: "BlackBerry co-founder", controversies: "Minimal" },
      { id: 43, name: "Stephen Bronfman", photo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Stephen_Bronfman.png", netWorth: "$2 billion", mediaInfluence: "Claridge leadership", controversies: "Political donations" },
      { id: 44, name: "Pierre Karl Péladeau", photo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Pierre_Karl_P%C3%A9ladeau.png", netWorth: "$1.3 billion", mediaInfluence: "Media ownership", controversies: "Union disputes" },
      { id: 45, name: "Eric Sprott", photo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Eric_Sprott.png", netWorth: "$1.2 billion", mediaInfluence: "Sprott Asset Management", controversies: "Minimal" },
      { id: 46, name: "Paul Sun", photo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Paul_Sun.png", netWorth: "$1.1 billion", mediaInfluence: "Investment expertise", controversies: "Minimal" },
      { id: 47, name: "Andre Desmarais", photo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Andre_Desmarais.png", netWorth: "$4 billion", mediaInfluence: "Power Corporation", controversies: "Minimal" },
      { id: 48, name: "Serge Godin", photo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Serge_Godin.png", netWorth: "$1.8 billion", mediaInfluence: "IT consulting", controversies: "Minimal" },
      { id: 49, name: "Terry Matthews", photo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Terry_Matthews.png", netWorth: "$1.9 billion", mediaInfluence: "Telecommunications", controversies: "Minimal" },
      { id: 50, name: "Charles Bronfman", photo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Charles_Bronfman.png", netWorth: "$2 billion", mediaInfluence: "Philanthropy", controversies: "Minimal" }
    ];


    return { people };
  }
}
</script>

<style scoped>
.people-list {
  padding: 20px;
}
</style>
