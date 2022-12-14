import axios from "axios"
import { app_id, app_key } from "./api.cofig";

const params = {
  app_key: app_key,
  app_id: app_id,
};


 export const loadRecipeApi = async (query) =>
   await axios.get(
     `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(
      query
     )}&app_id=${encodeURIComponent(
       params.app_id
     )}&app_key=${encodeURIComponent(params.app_key)}`
   );