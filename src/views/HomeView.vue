<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>醫療新聞</h3>
        <div class="IntroduceHealthNews">
          想知道最近有甚麼醫療新聞嗎 ?<br />有些醫療迷思還傻傻搞不清嗎 ?<br />歡迎點擊<strong>『更多新聞』</strong>來了解更多最新新聞及破解錯誤迷思
          !!
        </div>
        <div class="blog-cards">
          <HomePageBox
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
        <button class="ButtonDesign">
          <router-link class="link" :to="{ name: 'news' }"
            >更多新聞</router-link
          >
        </button>
      </div>
    </div>
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>獲取更多進階功能及優惠商品，快來註冊成為用戶吧!!</h2>
        <router-link class="router-button" to="{ name: 'Register' }"
          >Register for H.I.P<Arrow class="arrow arrow-light"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import HomePageBox from "@/components/HomePageBox.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "HomeView",
  components: { BlogPost, HomePageBox, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "醫療資訊整合平台",
        subtitle: "Healthy Information Integrated Platform",
        blogPost: "為您提供最快速方便的醫療服務，就診更方便",
        welcomeScreen: true,
        photo: "hsop",
      },
      sampleBlogPost: [
        {
          title: "症狀分析",
          blogHTML: "針對當前病情，",
          blogHTML2: "提供最即時且適合的科別給您，",
          blogHTML3: "讓看病能夠更有效率 !!",
          blogCoverPhoto: "analysis",
          link: "AnalysisIllness",
        },
        {
          title: "附近院所",
          blogHTML: "為您尋找附近醫院及診所",
          blogHTML2: "讓看病不再需要遠行千里 ~",
          blogCoverPhoto: "map",
          link: "NearbyHospital",
        },
        {
          title: "評價系統",
          blogHTML: "各醫院及醫師的風評如何 ?",
          blogHTML2: "想留下寶貴意見給其他人參考 ?",
          blogHTML3: "都歡迎來評價系統查詢及留言喔 !",
          blogCoverPhoto: "review",
          link: "ReviewAnalysis",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 500;
    font-size: 50px;
    margin-bottom: 24px;
    margin-top: 0px;
    padding: 5px;
    text-align: center;
    letter-spacing: 3px;
    border-style: solid;
    border-radius: 10px;
    background-color: #e3e3e3;
  }

  .IntroduceHealthNews {
    text-align: center;
    font-size: 25px;
    margin-top: 5px;
    margin-bottom: 40px;
    font-weight: 500;
    line-height: 30px;
  }

  .ButtonDesign {
    width: 150px;
    height: 40px;
    display: block;
    text-align: center;
    cursor: pointer;
    line-height: 15px;
    color: #fff;
    font-weight: 900;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid #fff;
    transition: all 0.3s linear;
    border-radius: 10px;
    background-color: #009999;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;

    &:hover {
      background-color: #1c1cff;
      color: #fff;
    }

    .link {
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
    }
  }
}

.updates {
  background-color: #cfcfcf;
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 20px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 50px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
