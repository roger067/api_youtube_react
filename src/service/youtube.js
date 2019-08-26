import axios from "axios";

const KEY = "AIzaSyAus_atU26w0SMQCJuPOxJgW-hzysdZNUU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
