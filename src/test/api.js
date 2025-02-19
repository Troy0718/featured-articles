const url = "https://ec-course-api.hexschool.io/v2";
const path = "react_project";
import axios from "axios";

const getArticles = async function () {
  try {
    const response = await axios.get(`${url}/api/${path}/articles?page=${1}`);
    console.log(response.data.articles);
  } catch (error) {
    console.error(error.response.data.message);
  }
};

// const postArticles = async function () {
//   try {
//     const response = await axios.post(`${url}/api/${path}/admin/article`, {
//       data: {
//         title: "新大叔，快認識",
//         description:
//           "最近加入我們的大叔阿哲，他以豐富的經驗與服務熱誠著稱，無碖是陪伴還是解決難題都十分出色!",
//         image:
//           "https://raw.githubusercontent.com/Troy0718/git-img/refs/heads/main/article_02.png",
//         tag: ["新大叔"],
//         create_at: 1555459220,
//         author: "alice",
//         isPublic: true,
//         content: `最近，我們的團隊迎來了一位特別的夥伴——阿哲。他今年四十歲，帶著成熟穩重的氣質，卻又不失幽默風趣。無論是聊天、陪伴，還是幫忙解決生活中的難題，他總是能以最自然、最輕鬆的方式帶給人安心感。

//     阿哲並不是那種一開口就熱情過頭的人，他更像是一杯剛剛好的溫熱茶，既不燙口，也不冷淡，而是恰到好處的溫度，讓人願意慢慢品味。初次見面時，他沒有急著拉近距離，而是細細聆聽，讓人不會感到壓力。如果你願意分享，他會用最誠懇的態度回應；如果你只是想安靜待著，他也不會勉強，反而能夠用無聲的陪伴讓人感到自在。

//     有位客戶分享過一個故事——那天，她剛結束一場疲憊的會議，整個人像洩了氣的皮球，連說話的力氣都沒有。原本以為這次的見面會變得尷尬，但阿哲卻很自然地選了一家溫馨的咖啡廳，點了兩杯飲品，然後輕聲說：「沒關係，今天就讓我來講故事給你聽吧。」他不刻意勉強對方說話，而是用他自身的故事，讓氛圍變得輕鬆。就這樣，一場原本可能沉悶的相處，變成了一次愉快的放鬆時光。

//     除了陪伴，阿哲還特別擅長解決生活上的各種問題。從幫忙整理思緒，到協助規劃未來，他的建議總是務實又溫暖。有些人找他聊天是為了解悶，有些人則是希望獲得一點人生的方向，無論是哪一種，他都能用自己的方式讓人覺得：「原來這個世界上，還是有理解我的人存在。」

//     這樣的一位大叔，怎麼能不快點認識呢？如果你也在尋找一個能讓自己放鬆的人，不妨給阿哲一個機會，讓他用他的方式，為你的生活帶來一些不同的色彩！`,
//       },
//     });
//     console.log(response.data.articles);
//   } catch (error) {
//     console.error(error.response.data.message);
//   }
// };

getArticles();
