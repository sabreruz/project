<template>
  <div class="news">
    <HeaderBox @updateSource="reloadFeed" :providers="providers" />
    <HelloWorld msg="Welcome" :newsSources="getPrettyNewsSources()" />
    <div v-for="item of items" :key="item.title">
      <InfoCard :mdata="item" />
    </div>
  </div>
</template>

<script>
import InfoCard from "../components/NewsList/InfoCard.vue";
import HeaderBox from "../components/NewsList/HeaderBox.vue";
import HelloWorld from "../components/NewsList/HelloWorld.vue";
export default {
  name: "BlogsView",
  components: { InfoCard, HeaderBox, HelloWorld },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
      providers: [
        {
          id: "franceinfo",
          name: "最新新聞",
          url: "https://news.ltn.com.tw/rss/sports.xml",
          icon: "",
        },
        {
          id: "lemonde",
          name: "假新聞迷思",
          url: "https://news.ltn.com.tw/rss/society.xml",
          icon: "",
        },
      ],
      items: [],
      newsSources: ["franceinfo"],
    };
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    getPrettyNewsSources() {
      let prettyNews = [];
      this.newsSources.forEach((element) => {
        this.providers.forEach((newsProvider) => {
          if (newsProvider.id === element) {
            prettyNews.push(newsProvider.name);
          }
        });
      });
      return prettyNews;
    },
    reloadFeed(updatedSources) {
      if (JSON.stringify(this.newsSources) != JSON.stringify(updatedSources)) {
        this.newsSources = updatedSources;
        this.items = [];
        updatedSources.forEach((element) => {
          this.providers.forEach((newsProvider) => {
            if (element === newsProvider.id) {
              this.getRss(newsProvider.url, newsProvider.name);
            }
          });
        });
      }
    },
    async getRss(url, source) {
      if (!url) {
        url = this.providers[0].url;
      }
      if (!source) {
        source = this.providers[0].name;
      }
      const res = await fetch(`https://api.allorigins.win/get?url=${url}`);
      const { contents } = await res.json();
      const feed = new window.DOMParser().parseFromString(contents, "text/xml");
      const items = feed.querySelectorAll("item");
      let newitems = [...items].map((el) => ({
        title: this.cleanNews(this.safegetXML(el, "title")),
        news: this.cleanNews(this.safegetXML(el, "description")),
        date: this.safegetXML(el, "pubDate"),
        link: this.safegetXML(el, "link"),
        photoUrl: this.photoParserXML(el),
        source: source,
      }));
      this.items = [...this.items, ...newitems];
    },
    photoParserXML(el) {
      if (
        el &&
        el.querySelector("enclosure") &&
        el.querySelector("enclosure").getAttribute
      ) {
        return el.querySelector("enclosure").getAttribute("url");
      }
      if (el && el.lastElementChild && el.lastElementChild.getAttribute) {
        return el.lastElementChild.getAttribute("url");
      }
      return "";
    },
    safegetXML(el, selectMe) {
      if (!el) return "";
      let selected = el.querySelector(selectMe);
      if (!selected) {
        return "";
      }
      return selected.innerHTML;
    },
    cleanNews(dirty) {
      let clean = dirty
        .replace("<![CDATA[", "")
        .replace("]]>", "")
        .replace("&quot;", "'")
        .replace("&#039;", "'")
        .replace("&nbsp;", " ")
        .replace(".&nbsp;", " ");
      return clean;
    },
  },
  created: function () {
    this.getRss();
  },
};
</script>

<style scoped>
:root {
  --primary-color: #4fb2b2;
  --primary-shade-color: #20605d;
  --background-color: #303030;
  --background-shade-color: #f2efe2;
  --black-color: #2c3e50;
  --blackdrop-color: #2c3e5033;
}
.news {
  background-color: #f0f0f0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary-shade-color);
  margin-top: 10px;
}
h3 {
  font-size: 18px;
}
</style>
