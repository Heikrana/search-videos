import axios from "axios";

const KEY = "AIzaSyDpt-6llO3y2HHQOox6usEu5Uofm8rmhYc";

export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
      part: "snippet",
      maxResults: 8,
      key: KEY
   }
});