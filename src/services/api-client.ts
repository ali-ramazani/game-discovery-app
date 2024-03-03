import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "82494ddd0a16460fbb706ad38f5bdf2d",
  },
});
