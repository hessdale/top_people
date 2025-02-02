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
      {
        id: 1, name: "David Thomson & Family", image: {
          url: undefined,
          title: "David Thomson & Family",
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$69.6 billion", mediaInfluence: "Owners of Thomson Reuters", controversies: "Family disputes over succession"
      },
      {
        id: 2, name: "Changpeng Zhao", image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Changpeng_Zhao_in_2022.jpg",
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$64.15 billion", mediaInfluence: "Crypto industry leader with Binance", controversies: "Regulatory scrutiny globally"
      },
      {
        id: 3, name: "Joseph Tsai", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$10.12 billion", mediaInfluence: "Owner of Brooklyn Nets", controversies: "Data privacy concerns with Alibaba"
      },
      {
        id: 4, name: "David Cheriton", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$17.07 billion", mediaInfluence: "Early investor in Google", controversies: "Minimal"
      },
      {
        id: 5, name: "Tobi Lütke", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$9.54 billion", mediaInfluence: "Shopify’s impact on e-commerce", controversies: "Hosting controversial merchants"
      },
      {
        id: 6, name: "Jim Pattison", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$8.67 billion", mediaInfluence: "Owns multiple media outlets", controversies: "Criticized for labor practices"
      },
      {
        id: 7, name: "Arthur Irving", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$6.6 billion", mediaInfluence: "Family-owned newspapers in Atlantic Canada", controversies: "Environmental concerns"
      },
      {
        id: 8, name: "Galen Weston & Family", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$9 billion", mediaInfluence: "Retail advertising dominance", controversies: "Bread price-fixing scandal"
      },
      {
        id: 9, name: "Garrett Camp", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$6.5 billion", mediaInfluence: "Co-founder of Uber", controversies: "Uber’s labor practices"
      },
      {
        id: 10, name: "Anthony von Mandl", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$6.56 billion", mediaInfluence: "Lifestyle brands like White Claw", controversies: "Minimal"
      },
      {
        id: 11, name: "Bruce Flatt", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$4 billion", mediaInfluence: "Real estate dominance through Brookfield", controversies: "Investment practices scrutiny"
      },
      {
        id: 12, name: "Lawrence Stroll", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$3.9 billion", mediaInfluence: "Formula 1 team owner", controversies: "Criticized for management decisions"
      },
      {
        id: 13, name: "Alain Bouchard", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$7.31 billion", mediaInfluence: "Couche-Tard’s branding", controversies: "Labor disputes"
      },
      {
        id: 14, name: "Chip Wilson", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$5.9 billion", mediaInfluence: "Lululemon marketing", controversies: "Remarks on product sizing"
      },
      {
        id: 15, name: "Emanuele Saputo", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$5.24 billion", mediaInfluence: "Limited", controversies: "Allegations of past mob connections"
      },
      {
        id: 16, name: "James Irving", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$6.4 billion", mediaInfluence: "Newspapers in New Brunswick", controversies: "Environmental issues"
      },
      {
        id: 17, name: "Richardson Family", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$4.45 billion", mediaInfluence: "Agricultural influence", controversies: "Minimal"
      },
      {
        id: 18, name: "Jeffrey Skoll", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$4.92 billion", mediaInfluence: "Participant Media", controversies: "Limited"
      },
      {
        id: 19, name: "Carlo Fidani", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$4.08 billion", mediaInfluence: "Limited", controversies: "Minimal"
      },
      {
        id: 20, name: "Victor Li", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$10 billion", mediaInfluence: "Indirect through business interests", controversies: "Family disputes"
      },
      {
        id: 21, name: "Thomson Family", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$69.6 billion", mediaInfluence: "Thomson Reuters ownership", controversies: "Succession disputes"
      },
      {
        id: 22, name: "Peter Gilgan", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$4.12 billion", mediaInfluence: "Founder of Mattamy Homes", controversies: "Urban sprawl concerns"
      },
      {
        id: 23, name: "Seymour Schulich", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.7 billion", mediaInfluence: "Philanthropy", controversies: "Minimal"
      },
      {
        id: 24, name: "Hartley Richardson", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.8 billion", mediaInfluence: "Agribusiness impact", controversies: "Minimal"
      },
      {
        id: 25, name: "Michael Lee-Chin", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.9 billion", mediaInfluence: "Investor and philanthropist", controversies: "Minimal"
      },
      {
        id: 26, name: "Jim Balsillie", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.6 billion", mediaInfluence: "Research In Motion co-founder", controversies: "Patent disputes"
      },
      {
        id: 27, name: "Prem Watsa", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.9 billion", mediaInfluence: "Fairfax Financial leader", controversies: "Minimal"
      },
      {
        id: 28, name: "Stephen Jarislowsky", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.5 billion", mediaInfluence: "Investment leadership", controversies: "Minimal"
      },
      {
        id: 29, name: "Sherry Brydson", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$6.5 billion", mediaInfluence: "Woodbridge interests", controversies: "Minimal"
      },
      {
        id: 30, name: "Linda Hasenfratz", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.4 billion", mediaInfluence: "Linamar Corporation CEO", controversies: "Labor disputes"
      },
      {
        id: 31, name: "John Risley", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.3 billion", mediaInfluence: "Ocean Nutrition ownership", controversies: "Environmental concerns"
      },
      {
        id: 32, name: "Eugene Melnyk", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.2 billion", mediaInfluence: "Ottawa Senators ownership", controversies: "Management controversies"
      },
      {
        id: 33, name: "Jean Coutu", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.8 billion", mediaInfluence: "Pharmacy empire", controversies: "Minimal"
      },
      {
        id: 34, name: "Aldo Bensadoun", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.1 billion", mediaInfluence: "Retail fashion", controversies: "Minimal"
      },
      {
        id: 35, name: "Murray Edwards", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$2 billion", mediaInfluence: "Energy sector leader", controversies: "Environmental practices"
      },
      {
        id: 36, name: "Clayton Riddell", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.6 billion", mediaInfluence: "Resource investments", controversies: "Minimal"
      },
      {
        id: 37, name: "Daryl Katz", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$2 billion", mediaInfluence: "Edmonton Oilers ownership", controversies: "Stadium funding issues"
      },
      {
        id: 38, name: "Irving Family", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$10 billion", mediaInfluence: "Energy and forestry", controversies: "Environmental issues"
      },
      {
        id: 39, name: "Joel Silver", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.5 billion", mediaInfluence: "Film production", controversies: "Financial disputes"
      },
      {
        id: 40, name: "Barry Sherman", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$3 billion", mediaInfluence: "Pharmaceuticals", controversies: "Legal battles"
      },
      {
        id: 41, name: "Paul Desmarais Jr.", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$4 billion", mediaInfluence: "Power Corporation leadership", controversies: "Minimal"
      },
      {
        id: 42, name: "James Balsillie", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.6 billion", mediaInfluence: "BlackBerry co-founder", controversies: "Minimal"
      },
      {
        id: 43, name: "Stephen Bronfman", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$2 billion", mediaInfluence: "Claridge leadership", controversies: "Political donations"
      },
      {
        id: 44, name: "Pierre Karl Péladeau", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.3 billion", mediaInfluence: "Media ownership", controversies: "Union disputes"
      },
      {
        id: 45, name: "Eric Sprott", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.2 billion", mediaInfluence: "Sprott Asset Management", controversies: "Minimal"
      },
      {
        id: 46, name: "Paul Sun", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.1 billion", mediaInfluence: "Investment expertise", controversies: "Minimal"
      },
      {
        id: 47, name: "Andre Desmarais", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$4 billion", mediaInfluence: "Power Corporation", controversies: "Minimal"
      },
      {
        id: 48, name: "Serge Godin", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.8 billion", mediaInfluence: "IT consulting", controversies: "Minimal"
      },
      {
        id: 49, name: "Terry Matthews", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$1.9 billion", mediaInfluence: "Telecommunications", controversies: "Minimal"
      },
      {
        id: 50, name: "Charles Bronfman", image: {
          url: undefined,
          title: undefined,
          author: undefined,
          source: undefined,
          license: {
            name: undefined,
            url: undefined,
          },
        }, netWorth: "$2 billion", mediaInfluence: "Philanthropy", controversies: "Minimal"
      }
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
