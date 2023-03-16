<template>
  <div class="all">
    <div id="map"></div>

    <div class="container">
      <div class="distance">
        <details close>
          <summary><font>依距離</font></summary>
        </details>
        <dl id="loc">
          <input
            type="checkbox"
            name="loc"
            @click="getloc()"
            @change="Changerad()"
          />
          <label>定位</label>
        </dl>
      </div>
      <div class="rate">
        <details close>
          <summary><font>依評價</font></summary>
        </details>
        <dl>
          <div>
            <input
              type="checkbox"
              name="filter"
              value="1"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>★</label>
            <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="filter"
              value="2"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>★★</label>
            <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="filter"
              value="3"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>★★★</label>
            <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="filter"
              value="4"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>★★★★</label>
            <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="filter"
              value="5"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>★★★★★</label>
          </div>
        </dl>
      </div>
      <div class="class">
        <details close>
          <summary><font>依分類</font></summary>
        </details>
        <dl>
          <div>
            <input
              type="checkbox"
              name="arrow"
              value="Metro"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>區域醫院</label>
            <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="arrow"
              value="Local"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>地區醫院</label>
            <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="arrow"
              value="Ordinary"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>一般診所</label>
          </div>
        </dl>
      </div>
      <div class="department">
        <details close>
          <summary><font>依科別</font></summary>
        </details>
        <dl>
          <details id="det" close>
            <summary><f>內科</f></summary>
          </details>
          <div id="detdl">
            <input
              type="checkbox"
              name="class"
              value="一般內科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>一般內科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="家醫科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>家醫科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="高齡醫學科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>高齡醫學科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="神經內科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>神經內科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="腎臟內科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>腎臟內科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="肝膽腸胃科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>肝膽腸胃科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="胸腔內科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>胸腔內科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="心臟內科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>心臟內科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="新陳代謝科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>新陳代謝科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="免疫風濕科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>免疫風濕科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="感染科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>感染科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="血液腫瘤科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>血液腫瘤科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="放射腫瘤科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>放射腫瘤科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="職業醫學科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>職業醫學科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="睡眠醫學科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>睡眠醫學科</label>
          </div>
          <details id="det" close>
            <summary><f>外科</f></summary>
          </details>
          <div id="detdl">
            <input
              type="checkbox"
              name="class"
              value="一般外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>一般外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="直腸外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>直腸外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="神經外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>神經外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="胸腔外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>胸腔外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="移植外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>移植外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="心臟外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>心臟外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="關節中心"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>關節中心</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="麻醉科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>麻醉科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="疼痛科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>疼痛科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="乳房外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>乳房外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="減重外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>減重外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="外傷科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>外傷科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="重症外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>重症外科</label>
          </div>
          <details id="det" close>
            <summary><f>其他</f></summary>
          </details>
          <div id="detdl">
            <input
              type="checkbox"
              name="class"
              value="骨科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>骨科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="婦產科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>婦產科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="小兒科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>小兒科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="耳鼻喉科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>耳鼻喉科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="眼科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>眼科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="中醫科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>中醫科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="復健科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>復健科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="牙科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>牙科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="身心科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>身心科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="泌尿外科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>泌尿外科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="皮膚科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>皮膚科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="急診科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>急診科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="營養治療科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>營養治療科</label>
          </div>
          <details id="det" close>
            <summary><f>檢查檢驗</f></summary>
          </details>
          <div id="detdl">
            <input
              type="checkbox"
              name="class"
              value="影像醫學科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>影像醫學科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="核子醫學科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>核子醫學科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="臨床病理科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>臨床病理科</label>
            <br />
            <input
              type="checkbox"
              name="class"
              value="解剖病理科"
              class="chk-btn"
              @click="selectAllChecked()"
            />
            <label>解剖病理科</label>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      markerArray: [],
      gmarkers: [],
      destinations: [],
      originPosition: null,
      locmarker: null,
      circle: null,
      markerCluster: null,
      lat: 23.4931286,
      lng: 120.4475668,
      markers: [
        {
          coords: { lat: 23.4644535, lng: 120.2345233 },
          Name: "衛生福利部朴子醫院",
          Address: "嘉義縣朴子市42之50號",
          Star: 3.2,
          Distance: null,
          Type: "Local",
          markpng: "",
          image: "../../projecthospital/衛生福利部朴子醫院.jpg",
          phone: "05 -3790600",
          Department:
            "一般內科,家醫科,高齡醫學科,神經內科,腎臟內科,肝膽腸胃科,胸腔內科,心臟內科,感染科,一般外科,直腸外科,骨科,婦產科,眼科,中醫科,復健科,牙科,身心科,泌尿外科,皮膚科,急診科",
        },
        {
          coords: { lat: 23.4872352, lng: 120.5067382 },
          Name: "臺中榮民總醫院灣橋分院",
          Address: "嘉義縣竹崎鄉38號",
          Star: 3.5,
          Distance: null,
          Type: "Local",
          markpng: "",
          image: "../../projecthospital/臺中榮民總醫院灣橋分院.jpg",
          phone: "05 -2791072",
          Department:
            "一般內科,高齡醫學科,新陳代謝科,免疫風濕科,胸腔內科,心臟內科,神經內科,肝膽腸胃科,腎臟內科,血液腫瘤科,家醫科,感染科,一般外科,直腸外科,神經外科,整型外科,胸腔外科,骨科,泌尿外科,婦產科,小兒科,中醫科,身心科,復健科,耳鼻喉科,麻醉科",
        },
        {
          coords: { lat: 23.5960073, lng: 120.4572011 },
          Name: "佛教慈濟醫療財團法人大林慈濟醫院",
          Address: "嘉義縣大林鎮民生路二號",
          Star: 3.4,
          Distance: null,
          Type: "Local",
          markpng: "",
          image: "../../projecthospital/佛教慈濟醫療財團法人大林慈濟醫院.jpg",
          phone: "05 -2648000",
          Department:
            "心臟內科,神經內科,胸腔內科,腎臟內科,肝膽腸胃科,免疫風濕科,家醫科,新陳代謝科,血液腫瘤科,感染科,高齡醫學科,放射腫瘤科,職業醫學科,一般內科,一般外科,直腸外科,神經外科,整形外科,移植外科,心臟外科,胸腔外科,關節中心,身心科,骨科,耳鼻喉科,泌尿外科,皮膚科,急診科,中醫科,小兒科,婦產科,牙科,眼科,復健科,營養治療科,影像醫學科,核子醫學科,臨床病理科,解剖病理科",
        },
        {
          coords: { lat: 23.4625513, lng: 120.286094 },
          Name: "長庚醫療財團法人嘉義長庚醫院",
          Address: "嘉義縣朴子市嘉朴路西段8號",
          Star: 3.0,
          Distance: null,
          Type: "Local",
          markpng: "",
          image: "../../projecthospital/長庚醫療財團法人嘉義長庚醫院.jpg",
          phone: "05 -3621000",
          Department:
            "肝膽腸胃科,睡眠醫學科,胸腔內科,血液腫瘤科,腎臟內科,新陳代謝科,心臟內科,免疫風濕科,感染科,家醫科,重症外科,一般外科,胸腔外科,心臟外科,神經外科,整形外科,直腸外科,泌尿外科,骨科,耳鼻喉科,婦產科,小兒科,牙科,中醫科,眼科,身心科,皮膚科,復健科,麻醉科,急診科,解剖病理科,核子醫學科,影像醫學科",
        },
        {
          coords: { lat: 23.4814532, lng: 120.4294616 },
          Name: "衛生福利部嘉義醫院",
          Address: "嘉義市西區北港路312號",
          Star: 2.9,
          Type: "Metro",
          markpng: "",
          image: "../../projecthospital/衛生福利部嘉義醫院.jpg",
          phone: "05 -2319090",
          Department:
            "一般內科,家醫科,神經內科,腎臟內科,肝膽腸胃科,胸腔內科,心臟內科,感染科,新陳代謝科,血液腫瘤科,一般外科,直腸外科,心臟外科,神經外科,疼痛科,麻醉科,骨科,泌尿外科,婦產科,小兒科,眼科,耳鼻喉科,牙科,皮膚科,婦產科,中醫科,身心科,急診科",
        },
        {
          coords: { lat: 23.4996476, lng: 120.4490458 },
          Name: "嘉義基督教醫院",
          Address: "嘉義市東區忠孝路539號",
          Star: 3.6,
          Type: "Local",
          markpng: "",
          image: "../../projecthospital/嘉義基督教醫院.jpg",
          phone: "05 -2765041",
          Department:
            "一般內科,肝膽腸胃科,腎臟內科,感染科,新陳代謝科,胸腔內科,心臟內科,免疫風濕科,血液腫瘤科,神經內科,家醫科,放射腫瘤科,高齡醫學科,一般外科,心臟外科,胸腔外科,乳房外科,神經外科,減重外科,整形外科,直腸外科,外傷科,重症外科,麻醉科,疼痛科,泌尿外科,兒科,骨科,婦產科,中醫科,牙科,急診科,眼科,復健科,皮膚科,耳鼻喉科,身心科,核子醫學科,影像醫學科",
        },
        {
          coords: { lat: 23.557626, lng: 120.4312845 },
          Name: "安馨民雄診所",
          Address: "嘉義縣民雄鄉民生路51號1-4樓",
          Star: 4.1,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/安馨民雄診所.jpg",
          phone: "05 -2269300",
          Department: "一般內科,復健科",
        },
        {
          coords: { lat: 23.5564059, lng: 120.4254492 },
          Name: "民和中醫診所",
          Address: "嘉義縣民雄鄉保生街261-6號1樓",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/民和中醫診所.jpg",
          phone: "05 -2067711",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.5515657, lng: 120.4283138 },
          Name: "嘉義縣民雄鄉衛生所",
          Address: "嘉義縣民雄鄉文化路7之2號",
          Star: 2.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/嘉義縣民雄鄉衛生所.jpg",
          phone: "05 -2262018",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.5269681, lng: 120.448152 },
          Name: "祐賢中醫診所",
          Address: "嘉義縣民雄鄉埤角2-72號一樓",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/祐賢中醫診所.jpg",
          phone: "05 -2201662",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.553038, lng: 120.4276498 },
          Name: "傳承中醫診所",
          Address: "嘉義縣民雄鄉保生街79號1樓",
          Star: 3.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/傳承中醫診所.jpg",
          phone: "05 -2266151",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.5577591, lng: 120.4228334 },
          Name: "仁惠中醫診所",
          Address: "嘉義縣民雄鄉西安路82之3號1樓",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/仁惠中醫診所.jpg",
          phone: "05 -2263370",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.556287, lng: 120.431376 },
          Name: "原世安中醫診所",
          Address: "嘉義縣民雄鄉中樂路7號",
          Star: 0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/原世安中醫診所.jpg",
          phone: "05 -2265730",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.5552444, lng: 120.4262564 },
          Name: "信昌中醫診所",
          Address: "嘉義縣民雄鄉安和路55號",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/信昌中醫診所.jpg",
          phone: "05 -2265736",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.52435, lng: 120.4217306 },
          Name: "慈音中醫診所",
          Address: "嘉義縣民雄鄉江厝店54-12號",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/慈音中醫診所.jpg",
          phone: "05 -2214389",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.556141, lng: 120.4308801 },
          Name: "太和中醫診所",
          Address: "嘉義縣民雄鄉中樂路２９號",
          Star: 0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/太和中醫診所.jpg",
          phone: "05-22626310",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.5561452, lng: 120.4293764 },
          Name: "鄭滄海中醫診所",
          Address: "嘉義縣民雄鄉中樂路75號",
          Star: 3.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/鄭滄海中醫診所.jpg",
          phone: "05 -2261028",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.5585186, lng: 120.4242176 },
          Name: "慈安診所",
          Address: "嘉義縣民雄鄉民溪路46號",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/慈安診所.jpg",
          phone: "05 -2061555",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.5565602, lng: 120.4276273 },
          Name: "徐鴻傑身心診所",
          Address: "嘉義縣民雄鄉20鄰西安路23-2號",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/徐鴻傑身心診所.jpg",
          phone: "05 -2265969",
          Department: "身心科",
        },
        {
          coords: { lat: 23.5575309, lng: 120.4250616 },
          Name: "懷仁耳鼻喉科診所",
          Address: "嘉義縣民雄鄉西安路46-21號",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/懷仁耳鼻喉科診所.jpg",
          phone: "05 -2265000",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.5583994, lng: 120.4334788 },
          Name: "安聯診所",
          Address: "嘉義縣民雄鄉建國路一段211號1、2、3樓",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/安聯診所.jpg",
          phone: "05 -2265104",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.5563333, lng: 120.4272222 },
          Name: "天佑診所",
          Address: "嘉義縣民雄鄉西安路21-1號1樓",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/天佑診所.jpg",
          phone: "05 -2061926",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.5241464, lng: 120.4390617 },
          Name: "黃威雄耳鼻喉科診所",
          Address: "嘉義縣民雄鄉4鄰建國路三段191號1樓",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/黃威雄耳鼻喉科診所.jpg",
          phone: "05 -2133556",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.5526471, lng: 120.4298183 },
          Name: "賴旗真診所",
          Address: "嘉義縣民雄鄉文化路31之2號",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/賴旗真診所.jpg",
          phone: "05 -2265650",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.557815, lng: 120.4302661 },
          Name: "黃俊瑋診所",
          Address: "嘉義縣民雄鄉4鄰昇平路62號",
          Star: 4.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/黃俊瑋診所.jpg",
          phone: "05 -2267801",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.5562742, lng: 120.4280422 },
          Name: "恩凱爾外科診所",
          Address: "嘉義縣民雄鄉6鄰西安路36-3號1樓",
          Star: 4.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/恩凱爾外科診所.jpg",
          phone: "05 -2268611",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.5560593, lng: 120.4307332 },
          Name: "吳蕙霓診所",
          Address: "嘉義縣民雄鄉中樂路37號",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/吳蕙霓診所.jpg",
          phone: "05 -2261356",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.5569642, lng: 120.426626 },
          Name: "田金佩皮膚科診所",
          Address: "嘉義縣民雄鄉006鄰西安路36之2號1F、2F",
          Star: 3.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/田金佩皮膚科診所.jpg",
          phone: "05 -2063300",
          Department: "皮膚科",
        },
        {
          coords: { lat: 23.5252782, lng: 120.4401341 },
          Name: "國泰診所",
          Address: "嘉義縣民雄鄉埤角519號1樓",
          Star: 1.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/國泰診所.jpg",
          phone: "05 -2215260",
          Department: "一般外科",
        },
        {
          coords: { lat: 23.5569599, lng: 120.4750226 },
          Name: "惠德診所",
          Address: "嘉義縣民雄鄉大學路一段281號",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/惠德診所.jpg",
          phone: "05 -2721665",
          Department: "婦產科",
        },
        {
          coords: { lat: 23.5245582, lng: 120.4219364 },
          Name: "吉田診所",
          Address: "嘉義縣民雄鄉5鄰江厝店1號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/吉田診所.jpg",
          phone: "05 -2206698",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.555537, lng: 120.4285388 },
          Name: "和順興診所",
          Address: "嘉義縣民雄鄉民族路47、47-2、49號",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/和順興診所.jpg",
          phone: "05 -2268517",
          Department: "骨科,一般內科",
        },
        {
          coords: { lat: 23.5270789, lng: 120.4448433 },
          Name: "佳恩診所",
          Address: "嘉義縣民雄鄉埤角551號",
          Star: 3.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/佳恩診所.jpg",
          phone: "05 -2212389",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.5246494, lng: 120.4400701 },
          Name: "得安診所",
          Address: "嘉義縣民雄鄉埤角524號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/得安診所.jpg",
          phone: "05 -2212033",
          Department: "婦產科",
        },
        {
          coords: { lat: 23.5553527, lng: 120.4305899 },
          Name: "張介山診所",
          Address: "嘉義縣民雄鄉民族路22之3號",
          Star: 3.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/張介山診所.jpg",
          phone: "05 -2261302",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.5525967, lng: 120.4284595 },
          Name: "張鐸寶診所",
          Address: "嘉義縣民雄鄉保生街31號",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/張鐸寶診所.jpg",
          phone: "05 -2061997",
          Department: "神經內科",
        },
        {
          coords: { lat: 23.523826, lng: 120.4394145 },
          Name: "奕安診所",
          Address: "嘉義縣民雄鄉頭橋557之31號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/奕安診所.jpg",
          phone: "05 -2204885",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.5556193, lng: 120.4293057 },
          Name: "何振庚耳鼻喉科診所",
          Address: "嘉義縣民雄鄉民族路40-2號",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/何振庚耳鼻喉科診所.jpg",
          phone: "05 -2269307",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.557141, lng: 120.4312806 },
          Name: "仁德診所",
          Address: "嘉義縣民雄鄉民生路36號",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/仁德診所.jpg",
          phone: "05 -2260567",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.5571964, lng: 120.425631 },
          Name: "何慶堂診所",
          Address: "嘉義縣民雄鄉西安路35-19號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/何慶堂診所.jpg",
          phone: "05 -2260728",
          Department: "一般內科,家醫科",
        },
        {
          coords: { lat: 23.5585655, lng: 120.43005 },
          Name: "輝安診所",
          Address: "嘉義縣民雄鄉民權路3號",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/輝安診所.jpg",
          phone: "05 -2269263",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.526156, lng: 120.43912 },
          Name: "蕭賜彥診所",
          Address: "嘉義縣民雄鄉建國路三段252號",
          Star: 3.3,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/蕭賜彥診所.jpg",
          phone: "05 -2200858",
          Department: "一般內科,家醫科",
        },
        {
          coords: { lat: 23.5567265, lng: 120.427034 },
          Name: "林恒文診所",
          Address: "嘉義縣民雄鄉西安路30-1號",
          Star: 3.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/林恒文診所.jpg",
          phone: "05 -2266555",
          Department: "家醫科,小兒科,復健科",
        },
        {
          coords: { lat: 23.5518793, lng: 120.4293378 },
          Name: "何外婦產科診所",
          Address: "嘉義縣民雄鄉文化路26-31號",
          Star: 3.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/何外婦產科診所.jpg",
          phone: "05 -2268577",
          Department: "婦產科",
        },
        {
          coords: { lat: 23.5554842, lng: 120.4311906 },
          Name: "賴政友診所",
          Address: "嘉義縣民雄鄉和平路9號",
          Star: 2.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/賴政友診所.jpg",
          phone: "05 -2262624",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.5572767, lng: 120.4261428 },
          Name: "張眼科診所",
          Address: "嘉義縣民雄鄉西安路42-1號",
          Star: 1.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/張眼科診所.jpg",
          phone: "05 -2062188",
          Department: "眼科",
        },
        {
          coords: { lat: 23.5563367, lng: 120.4279372 },
          Name: "李眼科診所",
          Address: "嘉義縣民雄鄉西安路8號",
          Star: 2.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/李眼科診所.jpg",
          phone: "05 -2061888",
          Department: "眼科",
        },
        {
          coords: { lat: 23.5254203, lng: 120.4398814 },
          Name: "老林眼科診所",
          Address: "嘉義縣民雄鄉埤角368號",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/老林眼科診所.jpg",
          phone: "05 -2130327",
          Department: "眼科",
        },
        {
          coords: { lat: 23.4952492, lng: 120.4552395 },
          Name: "杏嘉耳鼻喉科診所",
          Address: "嘉義市東區新生路707號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/杏嘉耳鼻喉科診所.jpg",
          phone: "05 -2782366",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4566409, lng: 120.4585921 },
          Name: "喬安皮膚科診所",
          Address: "嘉義市東區吳鳳南路296號",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/喬安皮膚科診所.jpg",
          phone: "05 -2306600",
          Department: "皮膚科",
        },
        {
          coords: { lat: 23.4587182, lng: 120.4511676 },
          Name: "天祿中醫診所",
          Address: "嘉義市東區興美六路206號1樓",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/天祿中醫診所.jpg",
          phone: "05 -2270086",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4555641, lng: 120.4571183 },
          Name: "儒佑中醫診所",
          Address: "嘉義市東區溪興街24號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/儒佑中醫診所.jpg",
          phone: "05 -2399314",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4747774, lng: 120.4624702 },
          Name: "首嘉中醫診所",
          Address: "嘉義市東區彌陀路290號1樓",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/首嘉中醫診所.jpg",
          phone: "05 -2710282",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.455081, lng: 120.4590134 },
          Name: "全人中醫診所",
          Address: "嘉義市東區軍輝路218號1、2樓",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/全人中醫診所.jpg",
          phone: "05 -2399013",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4767756, lng: 120.4663434 },
          Name: "嘉義市東區衛生所",
          Address: "嘉義市東區大雅路二段625號",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/嘉義市東區衛生所.jpg",
          phone: "05 -2390302",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.490482, lng: 120.4571492 },
          Name: "安美中醫診所",
          Address: "嘉義市東區博東路303號1樓",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/安美中醫診所.jpg",
          phone: "05 -2750423",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4777797, lng: 120.4721414 },
          Name: "慈護誠品中醫診所",
          Address: "嘉義市東區大雅路二段432號1樓",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/慈護誠品中醫診所.jpg",
          phone: "05 -2774599",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4824693, lng: 120.4607375 },
          Name: "人禾中醫診所",
          Address: "嘉義市東區中山路48號1樓",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/人禾中醫診所.jpg",
          phone: "05 -2771772",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4984134, lng: 120.4531448 },
          Name: "高銘中醫診所",
          Address: "嘉義市東區義教街755號1樓",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/高銘中醫診所.jpg",
          phone: "05 -2712717",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4796963, lng: 120.4518188 },
          Name: "洪揚中醫診所",
          Address: "嘉義市東區公明路279、281號1樓",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/洪揚中醫診所.jpg",
          phone: "05 -2160638",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4836142, lng: 120.4576135 },
          Name: "林臻瑋中醫診所",
          Address: "嘉義市東區民權路120-6號1樓",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/林臻瑋中醫診所.jpg",
          phone: "05 -2779867",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4908729, lng: 120.4688746 },
          Name: "慶瑞堂中醫診所",
          Address: "嘉義市東區林森東路428號1樓",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/慶瑞堂中醫診所.jpg",
          phone: "05 -2782785",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4623945, lng: 120.4569785 },
          Name: "立仁中醫診所",
          Address: "嘉義市東區安寮里立仁路331、333號1樓",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/立仁中醫診所.jpg",
          phone: "05 -2232188",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4697193, lng: 120.4565153 },
          Name: "吉祥中醫診所",
          Address: "嘉義市東區興業東路317號",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/吉祥中醫診所.jpg",
          phone: "05 -2230229",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4851971, lng: 120.4523464 },
          Name: "金陵中醫診所",
          Address: "嘉義市東區吳鳳北路360號1樓",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/金陵中醫診所.jpg",
          phone: "05 -2759014",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.456543, lng: 120.458913 },
          Name: "天仁堂中醫診所",
          Address: "嘉義市東區興仁里吳鳳南路579號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/天仁堂中醫診所.jpg",
          phone: "05 -2301900",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4789168, lng: 120.4529218 },
          Name: "建生中醫診所",
          Address: "嘉義市東區吳鳳北路213號1樓",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/建生中醫診所.jpg",
          phone: "05 -2225015",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4924976, lng: 120.4789688 },
          Name: "濟世中醫診所",
          Address: "嘉義市東區林森東路800號、802號1樓",
          Star: 3.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/濟世中醫診所.jpg",
          phone: "05 -2740868",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.486762, lng: 120.457217 },
          Name: "兆春中醫診所",
          Address: "嘉義市東區太平里林森東路82號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/兆春中醫診所.jpg",
          phone: "05 -2752282",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4793673, lng: 120.4568924 },
          Name: "文德中醫診所",
          Address: "嘉義市東區崇文里和平路261號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/文德中醫診所.jpg",
          phone: "05 -2251827",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4833985, lng: 120.4554286 },
          Name: "誠泰中醫診所",
          Address: "嘉義市東區民權路188號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/誠泰中醫診所.jpg",
          phone: "05 -2713969",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.468453, lng: 120.4631297 },
          Name: "芳安中醫診所",
          Address: "嘉義市東區芳草里芳安路103號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/芳安中醫診所.jpg",
          phone: "05 -2289916",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4794996, lng: 120.4534731 },
          Name: "嘉德中醫診所",
          Address: "嘉義市東區吳鳳北路214、216號",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/嘉德中醫診所.jpg",
          phone: "05 -2270112",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4785482, lng: 120.4722227 },
          Name: "曾志能中醫診所",
          Address: "嘉義市東區金龍街26-1號1樓",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/曾志能中醫診所.jpg",
          phone: "05 -2755540",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4651162, lng: 120.4547633 },
          Name: "濟生中醫診所",
          Address: "嘉義市東區吳鳳南路138號",
          Star: 4.3,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/濟生中醫診所.jpg",
          phone: "05 -2257713",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4821476, lng: 120.4593808 },
          Name: "大安中醫診所",
          Address: "嘉義市東區東噴里中山路53號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/大安中醫診所.jpg",
          phone: "05 -2785861",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.478361, lng: 120.462633 },
          Name: "仰德中醫診所",
          Address: "嘉義市東區啟明路108號",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/仰德中醫診所.jpg",
          phone: "05 -2753848",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4777176, lng: 120.4540034 },
          Name: "南山中醫診所",
          Address: "嘉義市東區光華路56號",
          Star: 0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/南山中醫診所.jpg",
          phone: "05 -2223658",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4780986, lng: 120.4535631 },
          Name: "龍德中醫診所",
          Address: "嘉義市東區吳鳳北路158號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/龍德中醫診所.jpg",
          phone: "05 -2282883",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4771049, lng: 120.454632 },
          Name: "斌德中醫診所",
          Address: "嘉義市東區忠孝路5號",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/斌德中醫診所.jpg",
          phone: "05 -2224123",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.476305, lng: 120.453017 },
          Name: "德義堂中醫診所",
          Address: "嘉義市東區民族路316號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/德義堂中醫診所.jpg",
          phone: "05 -2224807",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4797041, lng: 120.4533494 },
          Name: "亞產中醫診所",
          Address: "嘉義市東區大街里吳鳳北路226號",
          Star: 0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/亞產中醫診所.jpg",
          phone: "05 -2229612",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.4763202, lng: 120.4519604 },
          Name: "詹輝次中醫診所",
          Address: "嘉義市東區民族路362號",
          Star: 4.3,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/詹輝次中醫診所.jpg",
          phone: "05 -2271177",
          Department: "中醫科",
        },
        {
          coords: { lat: 23.479704, lng: 120.451288 },
          Name: "侯耳鼻喉科診所",
          Address: "嘉義市東區公明路301號",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/侯耳鼻喉科診所.jpg",
          phone: "05 -2222893",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4773138, lng: 120.4535896 },
          Name: "大心診所",
          Address: "嘉義市東區吳鳳北路116號",
          Star: 3.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/大心診所.jpg",
          phone: "05 -2279237",
          Department: "一般內科,小兒科",
        },
        {
          coords: { lat: 23.4798943, lng: 120.458019 },
          Name: "和威診所",
          Address: "嘉義市東區中正路112-2號",
          Star: 4.3,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/和威診所.jpg",
          phone: "05 -2712511",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.490125, lng: 120.4664426 },
          Name: "昆德診所",
          Address: "嘉義市東區林森東路287號",
          Star: 4.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/昆德診所.jpg",
          phone: "05 -2788750",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.4765609, lng: 120.4540228 },
          Name: "祐健診所",
          Address: "嘉義市東區民族路268巷7號3樓",
          Star: 1.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/祐健診所.jpg",
          phone: "05 -2233438",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4809818, lng: 120.4610432 },
          Name: "蕭正誠診所",
          Address: "嘉義市東區公明路34號之4",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/蕭正誠診所.jpg",
          phone: "05 -2778187",
          Department: "精神科",
        },
        {
          coords: { lat: 23.4917674, lng: 120.4707982 },
          Name: "怡康診所",
          Address: "嘉義市東區林森東路496號",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/怡康診所.jpg",
          phone: "05 -2770236",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.48237, lng: 120.459625 },
          Name: "廖學儒耳鼻喉科診所",
          Address: "嘉義市東區中山路84號",
          Star: 4.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/廖學儒耳鼻喉科診所.jpg",
          phone: "05 -2779070",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4845377, lng: 120.449789 },
          Name: "禾宜婦幼診所",
          Address: "嘉義市東區林森西路95號1、2、3樓",
          Star: 3.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/禾宜婦幼診所.jpg",
          phone: "05 -2769166",
          Department: "婦產科,小兒科",
        },
        {
          coords: { lat: 23.4805816, lng: 120.4539907 },
          Name: "周裕軒身心醫學診所",
          Address: "嘉義市東區民樂街141號",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/周裕軒身心醫學診所.jpg",
          phone: "05 -2229823",
          Department: "身心科",
        },
        {
          coords: { lat: 23.4939934, lng: 120.4565745 },
          Name: "福康診所",
          Address: "嘉義市東區頂庄里新生路667-1、667-2號1、2樓",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/福康診所.jpg",
          phone: "05 -2715688",
          Department: "心臟內科",
        },
        {
          coords: { lat: 23.4770012, lng: 120.4533672 },
          Name: "林育興耳鼻喉科診所",
          Address: "嘉義市東區吳鳳北路133號",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/林育興耳鼻喉科診所.jpg",
          phone: "05 -2288568",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4842545, lng: 120.4520916 },
          Name: "黃靖修內科診所",
          Address: "嘉義市東區吳鳳北路389號1樓",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/黃靖修內科診所.jpg",
          phone: "05 -2776108",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4832016, lng: 120.4608422 },
          Name: "賴瑪莉診所",
          Address: "嘉義市東區新生路313號1樓",
          Star: 1.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/賴瑪莉診所.jpg",
          phone: "05 -2741234",
          Department: "急診科,小兒科",
        },
        {
          coords: { lat: 23.4556472, lng: 120.4597955 },
          Name: "軍輝耳鼻喉科診所",
          Address: "嘉義市東區軍輝路198號1樓",
          Star: 3.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/軍輝耳鼻喉科診所.jpg",
          phone: "05 -2301616",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4747227, lng: 120.4584778 },
          Name: "滿溢小兒科診所",
          Address: "嘉義市東區垂楊路104號1樓",
          Star: 3.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/滿溢小兒科診所.jpg",
          phone: "05 -2767757",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.491858, lng: 120.4581036 },
          Name: "新恩診所",
          Address: "嘉義市東區新生路545號1樓",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/新恩診所.jpg",
          phone: "05 -2777937",
          Department: "神經內科",
        },
        {
          coords: { lat: 23.4836822, lng: 120.4580881 },
          Name: "楊澍青診所",
          Address: "嘉義市東區民權路110號1樓",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/楊澍青診所.jpg",
          phone: "05 -2776001",
          Department: "一般內科,家醫科",
        },
        {
          coords: { lat: 23.4769006, lng: 120.4590115 },
          Name: "向光眼科診所",
          Address: "嘉義市東區民族路114號1樓",
          Star: 3.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/向光眼科診所.jpg",
          phone: "05 -2788358",
          Department: "眼科",
        },
        {
          coords: { lat: 23.4806285, lng: 120.4509357 },
          Name: "嘉亮眼科診所",
          Address: "嘉義市東區中山路236號1-3樓",
          Star: 3.3,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/嘉亮眼科診所.jpg",
          phone: "05 -2276969",
          Department: "眼科",
        },
        {
          coords: { lat: 23.492494, lng: 120.457918 },
          Name: "羅大德診所",
          Address: "嘉義市東區新生路588號1、2樓",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/羅大德診所.jpg",
          phone: "05 -2788297",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4832525, lng: 120.4525088 },
          Name: "邱晉陽診所",
          Address: "嘉義市東區吳鳳北路280號",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/邱晉陽診所.jpg",
          phone: "05 -2751973",
          Department: "小兒科,家醫科",
        },
        {
          coords: { lat: 23.4808292, lng: 120.4518974 },
          Name: "丁效曾整形外科診所",
          Address: "嘉義市東區中山路229號、231號1、2樓",
          Star: 3.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/丁效曾整形外科診所.jpg",
          phone: "05 -2222188",
          Department: "整形外科",
        },
        {
          coords: { lat: 23.4823959, lng: 120.4559967 },
          Name: "和平眼科診所",
          Address: "嘉義市東區和平路325號",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/和平眼科診所.jpg",
          phone: "05 -2255561",
          Department: "眼科",
        },
        {
          coords: { lat: 23.4930744, lng: 120.4575714 },
          Name: "台大風尚皮膚科診所",
          Address: "嘉義市東區新生路612號1樓",
          Star: 3.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/台大風尚皮膚科診所.jpg",
          phone: "05 -2711711",
          Department: "皮膚科",
        },
        {
          coords: { lat: 23.4780426, lng: 120.4723281 },
          Name: "傅林診所",
          Address: "嘉義市東區長竹里金龍街8號1樓",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/傅林診所.jpg",
          phone: "05 -2781900",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4954599, lng: 120.4554493 },
          Name: "立文小兒科診所",
          Address: "嘉義市東區新生路782號1、2樓",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/立文小兒科診所.jpg",
          phone: "05 -2779463",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.480162, lng: 120.4562847 },
          Name: "東門王耳鼻喉科診所",
          Address: "嘉義市東區公明路131號1樓",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/東門王耳鼻喉科診所.jpg",
          phone: "05 -2276563",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4823957, lng: 120.4505352 },
          Name: "聖心診所",
          Address: "嘉義市東區仁武里民權路367號1樓",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/聖心診所.jpg",
          phone: "05 -2224800",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.474819, lng: 120.4624502 },
          Name: "郭俊鋐診所",
          Address: "嘉義市東區彌陀路292號、292-1號、292-2號1樓",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/郭俊鋐診所.jpg",
          phone: "05 -2771893",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4773196, lng: 120.4670747 },
          Name: "林仙明診所",
          Address: "嘉義市東區大雅路二段599號",
          Star: 3.3,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/林仙明診所.jpg",
          phone: "05 -2770233",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4742869, lng: 120.4575006 },
          Name: "許小兒科診所",
          Address: "嘉義市東區垂楊路139號1樓",
          Star: 4.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/許小兒科診所.jpg",
          phone: "05 -2280858",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.490509, lng: 120.4576621 },
          Name: "欣升診所",
          Address: "嘉義市東區博東路283號1F",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/欣升診所.jpg",
          phone: "05 -2765538",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4868004, lng: 120.4551442 },
          Name: "黃傳益婦產科診所",
          Address: "嘉義市東區林森東路45號",
          Star: 3.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/黃傳益婦產科診所.jpg",
          phone: "05 -2776306",
          Department: "婦產科",
        },
        {
          coords: { lat: 23.4816479, lng: 120.4556895 },
          Name: "李培源聯合診所",
          Address: "嘉義市東區東仁里中山路175號",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/李培源聯合診所.jpg",
          phone: "05 -2222075",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4853256, lng: 120.4520313 },
          Name: "吳國君診所",
          Address: "嘉義市東區泰安里吳鳳北路433號1樓、林森西路11號2樓",
          Star: 3.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/吳國君診所.jpg",
          phone: "05 -2757885",
          Department: "一般內科,骨科",
        },
        {
          coords: { lat: 23.4825119, lng: 120.4501969 },
          Name: "長鴻診所",
          Address: "嘉義市東區社口里民權路322號",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/長鴻診所.jpg",
          phone: "05 -2782113",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.480162, lng: 120.4562847 },
          Name: "王診所",
          Address: "嘉義市東區公明路131號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/王診所.jpg",
          phone: "05 -2276563",
          Department: "家醫科",
        },
        {
          coords: { lat: 23.4903924, lng: 120.4616185 },
          Name: "黃世斌小兒科診所",
          Address: "嘉義市東區博東路47號",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/黃世斌小兒科診所.jpg",
          phone: "05 -2710271",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.48288, lng: 120.4518454 },
          Name: "信安診所",
          Address: "嘉義市東區北城里民權路278號",
          Star: 3.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/信安診所.jpg",
          phone: "05 -2785681",
          Department: "一般內科,家醫科",
        },
        {
          coords: { lat: 23.474159, lng: 120.455941 },
          Name: "趙祥凱皮膚科診所",
          Address: "嘉義市東區興南里垂楊路209號",
          Star: 3.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/趙祥凱皮膚科診所.jpg",
          phone: "05 -2246236",
          Department: "皮膚科",
        },
        {
          coords: { lat: 23.4803609, lng: 120.4501971 },
          Name: "宏醫診所",
          Address: "嘉義市東區中山路262號1-3樓",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/宏醫診所.jpg",
          phone: "05 -2254868",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4695782, lng: 120.4548305 },
          Name: "嘉恩診所",
          Address: "嘉義市東區興業東路237號1樓、2樓",
          Star: 3.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/嘉恩診所.jpg",
          phone: "05 -2288092",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4829907, lng: 120.4608439 },
          Name: "何光哲小兒科診所",
          Address: "嘉義市東區東平里新生路309號",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/何光哲小兒科診所.jpg",
          phone: "05 -2766878",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4802139, lng: 120.449758 },
          Name: "郭健軍皮膚科診所",
          Address: "嘉義市東區中山路284號",
          Star: 4.3,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/郭健軍皮膚科診所.jpg",
          phone: "05 -2273836",
          Department: "皮膚科",
        },
        {
          coords: { lat: 23.4787095, lng: 120.4531119 },
          Name: "郭文吉神經科診所",
          Address: "嘉義市東區祐民里吳鳳北路199號",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/郭文吉神經科診所.jpg",
          phone: "05 -2239365",
          Department: "神經內科",
        },
        {
          coords: { lat: 23.4768956, lng: 120.4555166 },
          Name: "吳長宗診所",
          Address: "嘉義市東區光華路2-1號",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/吳長宗診所.jpg",
          phone: "05 -2239036",
          Department: "一般內科,家醫科",
        },
        {
          coords: { lat: 23.4954599, lng: 120.4554493 },
          Name: "良如診所",
          Address: "嘉義市東區新生路782號1、2樓",
          Star: 3.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/良如診所.jpg",
          phone: "05 -2779463",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4832337, lng: 120.4522699 },
          Name: "德珍婦產科診所",
          Address: "嘉義市東區北城里吳鳳北路339號",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/德珍婦產科診所.jpg",
          phone: "05 -2755339",
          Department: "婦產科",
        },
        {
          coords: { lat: 23.4846017, lng: 120.4606328 },
          Name: "黃崇銘診所",
          Address: "嘉義市東區新生路361號",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/黃崇銘診所.jpg",
          phone: "05 -2777686",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4841394, lng: 120.4609297 },
          Name: "趙善楷耳鼻喉科診所",
          Address: "嘉義市東區新生路230號",
          Star: 2.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/趙善楷耳鼻喉科診所.jpg",
          phone: "05 -2759955",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4782242, lng: 120.4529912 },
          Name: "張耿源診所",
          Address: "嘉義市東區光華路80號",
          Star: 4.1,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/張耿源診所.jpg",
          phone: "05 -2279969",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.489464, lng: 120.4534731 },
          Name: "活石診所",
          Address: "嘉義市東區忠孝路362之1號",
          Star: 4.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/活石診所.jpg",
          phone: "05 -2761596",
          Department: "一般內科,家醫科",
        },
        {
          coords: { lat: 23.4770055, lng: 120.448707 },
          Name: "文山診所",
          Address: "嘉義市東區府路里國華街171號",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/文山診所.jpg",
          phone: "05 -2293119",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4816702, lng: 120.4559508 },
          Name: "彭診所",
          Address: "嘉義市東區仁武里中山路165號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/彭診所.jpg",
          phone: "05 -2233406",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4774902, lng: 120.4562172 },
          Name: "張森榮診所",
          Address: "嘉義市東區延平街102號",
          Star: 4.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/張森榮診所.jpg",
          phone: "05 -2275086",
          Department: "一般內科,小兒科",
        },
        {
          coords: { lat: 23.4802074, lng: 120.4529984 },
          Name: "安男診所",
          Address: "嘉義市東區吳鳳北路251號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/安男診所.jpg",
          phone: "05 -2224707",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4742811, lng: 120.4566387 },
          Name: "蘇耳鼻喉科診所",
          Address: "嘉義市東區垂楊路171號",
          Star: 3.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/蘇耳鼻喉科診所.jpg",
          phone: "05 -2237078",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4857939, lng: 120.4538044 },
          Name: "華陽診所",
          Address: "嘉義市東區忠孝路284之2號",
          Star: 4.3,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/華陽診所.jpg",
          phone: "05 -2754038",
          Department: "小兒科,家醫科",
        },
        {
          coords: { lat: 23.4844078, lng: 120.4657472 },
          Name: "莊凱全小兒科診所",
          Address: "嘉義市東區民權路10-1號",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/莊凱全小兒科診所.jpg",
          phone: "05 -2769658",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.482164, lng: 120.45252 },
          Name: "宋思權診所",
          Address: "嘉義市東區吳鳳北路309號",
          Star: 3.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/宋思權診所.jpg",
          phone: "05 -2286698",
          Department: "神經內科,家醫科",
        },
        {
          coords: { lat: 23.4564649, lng: 120.4589644 },
          Name: "旭豐診所",
          Address: "嘉義市東區吳鳳南路583號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/旭豐診所.jpg",
          phone: "05 -2302108",
          Department: "一般內科",
        },
        {
          coords: { lat: 23.4808636, lng: 120.4528672 },
          Name: "孫小兒科診所",
          Address: "嘉義市東區吳鳳北路289號",
          Star: 4.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/孫小兒科診所.jpg",
          phone: "05 -2222829",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4804661, lng: 120.4513129 },
          Name: "葉弘貴小兒科診所",
          Address: "嘉義市東區中山路253號",
          Star: 3.6,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/葉弘貴小兒科診所.jpg",
          phone: "05 -2253863",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4773854, lng: 120.4533324 },
          Name: "華山診所",
          Address: "嘉義市東區吳鳳北路151號",
          Star: 4.7,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/華山診所.jpg",
          phone: "05 -2248777",
          Department: "小兒科,一般內科",
        },
        {
          coords: { lat: 23.4827624, lng: 120.451538 },
          Name: "文祥小兒科診所",
          Address: "嘉義市東區民權路300號之4",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/文祥小兒科診所.jpg",
          phone: "05 -2770777",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4797152, lng: 120.4530597 },
          Name: "鄭眼科診所",
          Address: "嘉義市東區吳鳳北路239號",
          Star: 3.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/鄭眼科診所.jpg",
          phone: "05 -2226086",
          Department: "眼科",
        },
        {
          coords: { lat: 23.4846699, lng: 120.452395 },
          Name: "福音聯合診所",
          Address: "嘉義市東區吳鳳北路340號1-3樓",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/福音聯合診所.jpg",
          phone: "05 -2782036",
          Department: "復健科,家醫科",
        },
        {
          coords: { lat: 23.480223, lng: 120.4510717 },
          Name: "懷恩診所",
          Address: "嘉義市東區興中街137號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/懷恩診所.jpg",
          phone: "05 -2277711",
          Department: "神經內科,身心科",
        },
        {
          coords: { lat: 23.4765881, lng: 120.4546742 },
          Name: "陳俊雄婦產科外科診所",
          Address: "嘉義市東區民族路248號",
          Star: 1.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/陳俊雄婦產科外科診所.jpg",
          phone: "05 -2221506",
          Department: "婦產科,一般外科",
        },
        {
          coords: { lat: 23.4790717, lng: 120.4507833 },
          Name: "黃銘模診所",
          Address: "嘉義市東區中正路374號",
          Star: 4.9,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/黃銘模診所.jpg",
          phone: "05 -2247873",
          Department: "一般內科,家醫科",
        },
        {
          coords: { lat: 23.4560634, lng: 120.4591053 },
          Name: "明生內兒科診所",
          Address: "嘉義市東區興仁里吳鳳南路605號",
          Star: 4.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/明生內兒科診所.jpg",
          phone: "05 -2398542",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4789431, lng: 120.4517202 },
          Name: "林信義內兒科診所",
          Address: "嘉義市東區中正路313號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/林信義內兒科診所.jpg",
          phone: "05 -2251025",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4850607, lng: 120.4520429 },
          Name: "仁和診所",
          Address: "嘉義市東區吳鳳北路423號",
          Star: 4.8,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/仁和診所.jpg",
          phone: "05 -2782762",
          Department: "一般內科,家醫科",
        },
        {
          coords: { lat: 23.480269, lng: 120.4500239 },
          Name: "蔡耳鼻喉科診所",
          Address: "嘉義市東區中山路270號",
          Star: 4.2,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/蔡耳鼻喉科診所.jpg",
          phone: "05 -2222602",
          Department: "耳鼻喉科",
        },
        {
          coords: { lat: 23.4799539, lng: 120.452528 },
          Name: "陳顯章骨科診所",
          Address: "嘉義市東區公明路342號",
          Star: 3.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/陳顯章骨科診所.jpg",
          phone: "05 -2253669",
          Department: "骨科",
        },
        {
          coords: { lat: 23.4799145, lng: 120.4522391 },
          Name: "潘內兒科診所",
          Address: "嘉義市東區公明路352號",
          Star: 4.4,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/潘內兒科診所.jpg",
          phone: "05 -2284757",
          Department: "小兒科",
        },
        {
          coords: { lat: 23.4833614, lng: 120.4554153 },
          Name: "德洋診所",
          Address: "嘉義市東區民權路190-1號",
          Star: 4.5,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/德洋診所.jpg",
          phone: "05 -2784903",
          Department: "婦產科,一般外科",
        },
        {
          coords: { lat: 23.4831496, lng: 120.4558245 },
          Name: "江昇洸診所",
          Address: "嘉義市東區民權路279-1號",
          Star: 5.0,
          Type: "Ordinary",
          markpng: "",
          image: "../../projecthospital/江昇洸診所.jpg",
          phone: "05 -2258717",
          Department: "小兒科",
        },
      ],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap: function () {
      let markers = this.markers;
      var LocalArrow = {
        url: "../../projecthospital/LocalArrow.png",
        scaledSize: new google.maps.Size(35, 35),
      };
      var MetroArrow = {
        url: "../../projecthospital/MetroArrow.png",
        scaledSize: new google.maps.Size(35, 35),
      };
      var OrdinaryArrow = {
        url: "../../projecthospital/OrdinaryArrow.png",
        scaledSize: new google.maps.Size(35, 35),
      };
      var ChangeArrow = {
        url: "../../projecthospital/ChangeArrow.png",
        scaledSize: new google.maps.Size(35, 35),
      };
      var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 12,
      });
      this.map = map;
      for (let i = 0; i < markers.length; i++) {
        if ((markers[i].Star >= 4.5) & (markers[i].Star <= 5)) {
          markers[i].StarImage = "★★★★★";
        } else if ((markers[i].Star >= 3.5) & (markers[i].Star < 4.5)) {
          markers[i].StarImage = "★★★★☆";
        } else if ((markers[i].Star >= 2.5) & (markers[i].Star < 3.5)) {
          markers[i].StarImage = "★★★☆☆";
        } else if ((markers[i].Star >= 1.5) & (markers[i].Star < 2.5)) {
          markers[i].StarImage = "★★☆☆☆";
        } else if ((markers[i].Star >= 0.5) & (markers[i].Star < 1.5)) {
          markers[i].StarImage = "★☆☆☆☆";
        } else {
          markers[i].StarImage = "☆☆☆☆☆";
        }
      }
      for (let i = 0; i < markers.length; i++) {
        let arrow = markers[i].Type;
        switch (arrow) {
          case "Metro":
            markers[i].markpng = MetroArrow;
            break;
          case "Local":
            markers[i].markpng = LocalArrow;
            break;
          case "Ordinary":
            markers[i].markpng = OrdinaryArrow;
        }
      }
      for (let i = 0; i < markers.length; i++) {
        var markerArray = this.markerArray;
        let marker = new google.maps.Marker({
          position: markers[i].coords,
          map: map,
          title: markers[i].Name + ", " + markers[i].Address,
          icon: markers[i].markpng,
          star: markers[i].Star,
          type: markers[i].Type,
          department: markers[i].Department,
        });
        this.gmarkers.push(marker);
        marker.addListener("mouseover", function () {
          marker.setIcon(ChangeArrow);
        });
        marker.addListener("mouseout", function () {
          marker.setIcon(markers[i].markpng);
        });
        marker["infoWindow"] = new google.maps.InfoWindow({
          content:
            '<div class="infoWindow" style="line-height:1.35; overflow:hidden; white-space:nowrap; width:480px;">' +
            '<div class="background" style="position:relative; background-color:darkslategray; background-position:100% 100%; background-repeat:no-repeat;">' +
            '<div style="clear: both;"></div>' +
            '<div class="image" style="position:relative; top:20px; float:center; width:15px; position:relative ;left:20px;">' +
            "<img src=" +
            markers[i].image +
            ">" +
            "</div>" +
            "</div>" +
            '<div style="text-align:center; margin-top:20px;">' +
            "<h1>" +
            markers[i].Name +
            "</h1>" +
            "</div>" +
            '<div style="clear: both;"></div>' +
            '<div class="content">' +
            '<font style="font-size:20px; position:relative; left:20px;"> 地址: ' +
            markers[i].Address +
            "</font>" +
            "</div>" +
            '<div style="clear: both;"></div>' +
            '<div class="phone">' +
            '<font style="font-size:20px; position:relative; left:20px;"> 連絡電話: ' +
            markers[i].phone +
            "</font>" +
            "</div>" +
            '<div style="clear: both;"></div>' +
            '<div class="star">' +
            '<font style="font-size:20px; position:relative; left:20px;"> 評價: ' +
            markers[i].Star +
            " " +
            markers[i].StarImage +
            "</font>" +
            "</div>" +
            '<div style="clear: both;"></div>' +
            '<div style="text-align:center;">' +
            "<a href=" +
            "../ReviewAnalysis" +
            ">" +
            "<button id='btn-click'>更多資訊</button></a>" +
            "<div>" +
            "</div>",
        });
        google.maps.event.addListener(
          marker["infoWindow"],
          "domready",
          function () {
            document
              .getElementById("btn-click")
              .addEventListener("click", session);
            function session() {
              sessionStorage.setItem("key", markers[i].Name);
            }
          }
        );
        marker.addListener("click", function () {
          for (var i = 0; i < markerArray.length; i++) {
            var currentMarker = markerArray[i];
            currentMarker["infoWindow"].close();
          }
          this["infoWindow"].open(map, this);
        });
        markerArray.push(marker);
      }
      this.markerCluster = new MarkerClusterer(map, this.gmarkers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
      var CheckedElem = document.getElementsByName("loc");
      var locmarker;
      var circle;
      this.location = {
        getloc: function () {
          if (CheckedElem[0].checked == true) {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                locmarker = new google.maps.Marker({
                  position: pos,
                  icon: {
                    url: "https://cdn-icons-png.flaticon.com/512/727/727618.png",
                    scaledSize: new google.maps.Size(35, 35),
                  },
                  title: "你的位置",
                  map: map,
                });
                circle = new google.maps.Circle({
                  center: pos,
                  radius: 6000,
                  strokeColor: "#0000ff",
                  strokeOpacity: 1,
                  strokeWeight: 2,
                  fillColor: "#7fc3ff",
                  fillOpacity: 0.3,
                  map: map,
                });
                map.setZoom(12);
                map.setCenter(pos);
              });
            } else {
              alert("無法取得你的位置或你的裝置不支援地理位置功能");
            }
          } else {
            circle.setVisible(false);
            locmarker.setVisible(false);
          }
        },
      };
    },
    getloc() {
      this.location.getloc();
    },
    selectAllChecked: function () {
      var checkedPlace = [];
      var checkArrow = [];
      var checkClass = [];
      var allCheckedPlaceElem = document.getElementsByName("filter");
      var allCheckedArrowElem = document.getElementsByName("arrow");
      var allCheckedClassElem = document.getElementsByName("class");
      var markerCluster = this.markerCluster;
      var gmarkers = this.gmarkers;
      for (var i = 0; i < allCheckedPlaceElem.length; i++) {
        if (allCheckedPlaceElem[i].checked == true) {
          checkedPlace.push(allCheckedPlaceElem[i].value);
        }
      }
      for (var c = 0; c < allCheckedArrowElem.length; c++) {
        if (allCheckedArrowElem[c].checked == true) {
          checkArrow.push(allCheckedArrowElem[c].value);
        }
      }
      for (var b = 0; b < allCheckedClassElem.length; b++) {
        if (allCheckedClassElem[b].checked == true) {
          checkClass.push(allCheckedClassElem[b].value);
        }
      }
      markerCluster.clearMarkers();
      for (let i = 0; i < gmarkers.length; i++) {
        var marker = gmarkers[i];
        var a;
        checkedPlace = checkedPlace.map(function (x) {
          return parseInt(x, 10);
        });
        if (
          checkedPlace.length == 0 &&
          checkArrow.length == 0 &&
          checkClass.length == 0
        ) {
          a = 10;
        } else if (
          checkedPlace.length != 0 &&
          checkArrow.length == 0 &&
          checkClass.length == 0 &&
          parseInt(marker.star) >= Math.min.apply(null, checkedPlace)
        ) {
          a = 10;
        } else if (
          checkedPlace.length == 0 &&
          checkArrow.length != 0 &&
          checkClass.length == 0 &&
          this.in_array(marker.type, checkArrow) != -1
        ) {
          a = 10;
        } else if (
          checkedPlace.length == 0 &&
          checkArrow.length == 0 &&
          checkClass.length != 0 &&
          this.class_in_string(marker.department, checkClass) != -1
        ) {
          a = 10;
        } else if (
          checkedPlace.length != 0 &&
          checkArrow.length != 0 &&
          checkClass.length == 0 &&
          parseInt(marker.star) >= Math.min.apply(null, checkedPlace) &&
          this.in_array(marker.type, checkArrow) != -1
        ) {
          a = 10;
        } else if (
          checkedPlace.length != 0 &&
          checkArrow.length == 0 &&
          checkClass.length != 0 &&
          parseInt(marker.star) >= Math.min.apply(null, checkedPlace) &&
          this.class_in_string(marker.department, checkClass) != -1
        ) {
          a = 10;
        } else if (
          checkedPlace.length == 0 &&
          checkArrow.length != 0 &&
          checkClass.length != 0 &&
          this.in_array(marker.type, checkArrow) != -1 &&
          this.class_in_string(marker.department, checkClass) != -1
        ) {
          a = 10;
        } else if (
          checkedPlace.length != 0 &&
          checkArrow.length != 0 &&
          checkClass.length != 0 &&
          parseInt(marker.star) >= Math.min.apply(null, checkedPlace) &&
          this.in_array(marker.type, checkArrow) != -1 &&
          this.class_in_string(marker.department, checkClass) != -1
        ) {
          a = 10;
        } else a = -1;
        if (a == 10) {
          marker.setVisible(true);
          markerCluster.addMarker(marker);
        } else if (a != -1) {
          marker.setVisible(true);
          markerCluster.addMarker(marker);
        } else {
          marker.setVisible(false);
        }
      }
    },
    in_array(needle, haystack) {
      for (var i = 0, len = haystack.length; i < len; i++) {
        if (haystack[i] == needle) return i;
      }
      return -1;
    },
    class_in_string(string, array) {
      for (var i = 0; i < array.length; i++) {
        if (string.includes(array[i])) return i;
      }
      return -1;
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  background: #aaa;
  height: 700px;
  width: 86%;
  float: right;
  margin-left: auto;
  margin-top: 15px;
  margin-bottom: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  width: 12%;
  position: relative;
  overflow-y: auto;
  height: 700px;
  margin-top: 15px;
}

.container::-webkit-scrollbar {
  width: 0px;
}
.container::-webkit-scrollbar-thumb {
  background: #aaa;
}
.container input {
  width: 20px;
  height: 15px;
}
summary {
  user-select: none;
  outline: 0;
  margin-left: 10px;
  margin-top: 2px;
  font-size: 18px;
}
summary::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  margin: 4px 0 0 0.5ch;
  background-size: 100% 100%;
  transition: transform 0.2s;
}
[open] summary::after {
  transform: rotate(90deg);
}
summary font {
  font-size: 24px;
}
summary f {
  font-size: 22px;
}
dl label {
  font-size: 20px;
}
dl input {
  margin-left: 30px;
}
details + dl {
  max-height: 0px;
  transition: max-height 0.15s;
  margin: 0 0 2px;
  overflow: hidden;
}
[open] + dl {
  max-height: 1500px;
}
details + div {
  max-height: 0px;
  transition: max-height 0.15s;
  margin: 0 0 2px;
  overflow: hidden;
}
[open] + div {
  max-height: 400px;
}
.all {
  background-color: #f9f9f9;
}
.distance {
  background-color: #ffffff;
  border-style: solid;
  border-color: #e7e7e7;
  border-width: 0.1px;
}
.rate {
  background-color: #ffffff;
  border-style: solid;
  border-color: #e7e7e7;
  border-width: 0.1px;
}
.class {
  background-color: #ffffff;
  border-style: solid;
  border-color: #e7e7e7;
  border-width: 0.1px;
}
.department {
  background-color: #ffffff;
  border-style: solid;
  border-color: #e7e7e7;
  border-width: 0.1px;
  overflow: auto;
}
.department::-webkit-scrollbar {
  width: 5px;
}
.department::-webkit-scrollbar-thumb {
  background: #aaa;
}

#det {
  margin-left: 10px;
}
#detdl {
  margin-left: 10px;
}
</style>
