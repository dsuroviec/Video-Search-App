import axios from "axios";

//reminder that there are only a limited number of requests allowed. if run out, need to make a new key at youtube v3
const KEY = "AIzaSyCb_rjiGy1moQWvlNFrPqnUQIzdpCSIDJ0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
