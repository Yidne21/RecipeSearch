import axios from "axios"
import { app_id, app_key } from "./api.cofig";
const params = {
  app_key: app_key,
  app_id: app_id,
  q: "doro",
};

const config = {
  method: "GET",
  url: `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(params.q)}&app_id=${encodeURIComponent(params.app_id)}&app_key=${encodeURIComponent(params.app_key)}`,
};

 export const loadRecipeApi = async() => await axios
    .request(config)