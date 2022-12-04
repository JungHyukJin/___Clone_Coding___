import axios from "axios";

// api키 사용시 ' ' 와 ; 가 나오는 원인 해결 필요.
const HttpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY.replace(";", "").replaceAll("'",""),
    part: "snippet",
    maxResults: 25,
  },
});

export async function search(keyword) {
  let responseData = [];
  if (keyword) {
    // 키워드 검색
    responseData = HttpClient.get("search", {
      params: {
        q: keyword,
      },
    })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  } else {
    // 핫 트렌드
    responseData = HttpClient.get("videos", {
      params: {
        chart: "mostPopular",
      },
    }).then((res) => res.data.items);
  }

  return responseData;

  // return fetch(`/videos/${keyword ? "search" : "popular"}.json`)
  // .then((response) => response.json())
  // .then((data) => data.items);

  // fetch 단점 :
  // 1. 항상 response를 json으로 변환해줘야한다.
  // 2. 성공, 에러 전부 response로 들어와 throw로 따로 처리해줘야한다.
}

export async function channel(){
  
}