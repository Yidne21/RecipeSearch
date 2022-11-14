import axios from "axios"

export const loadRecipeApi = async (query) =>
  await axios.get(`https://api.edamam.com/api/recipes/v2/${query}`);