import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      //在首頁的HomePageBox會用到
      {
        blogTitle: "年節狂吃「這類食物」身體爆警訊！",
        blogCoverPhoto: "News1",
        blogDate:
          "過年期間，很多民眾擋不助美食誘惑，吃進大魚大肉，不管煎的、滷的，尤其油炸食物更是許多人最愛，該怎麼適量攝取又能維持健康，對很多人來說很難...",
        NewsLink: "https://health.tvbs.com.tw/medical/337608",
      },
      {
        blogTitle: "便祕、腹瀉反覆發作，中年後才「腸躁症」小心癌症！",
        blogCoverPhoto: "News2",
        blogDate:
          "腸躁症在台灣盛行率約為5～20％，症狀包括腹部不適、腹痛、便祕、腹瀉等，因為機轉不明，治療效果有限，很多人深受其擾，調查發現...",
        NewsLink: "https://health.tvbs.com.tw/medical/338043",
      },
      {
        blogTitle: "長新冠後遺症喘、咳、累嚴重影響生活！",
        blogCoverPhoto: "News3",
        blogDate:
          "許多新冠肺炎患者康復後，會出現各種不同的後遺症，像是咳嗽或倦怠、頭痛、腦霧、掉髮、微燒、食慾不振、胃食道逆流、嗅覺...",
        NewsLink: "https://health.tvbs.com.tw/medical/338035",
      },
      {
        blogTitle: "布魯斯威利罹患無法治癒的「額顳葉失智症」！",
        blogCoverPhoto: "News4",
        blogDate:
          "好萊塢動作巨星布魯斯威利（Bruce Willis）因失語症息影不到1年，最近被診斷出罹患無法治癒的「額顳葉失智症」。醫師表示...",
        NewsLink: "https://health.tvbs.com.tw/medical/338030",
      },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  getters: {},
  mutations: {
    //字面意思:"突變"，用來改變頁面狀態用
    toggleEditPost(state, payload) {
      //此mutation是用來練習用，不用理這個
      state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().userName;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      console.log(dbResults);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUsername,
      });
      commit("setProfileInitials");
    },
  },
  modules: {},
});
