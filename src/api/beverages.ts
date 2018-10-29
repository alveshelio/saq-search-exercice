import axios from "axios"

export const fetchBeverages = async (searchTerm: string): Promise<any> => {
  console.warn("process.env.COVEO_KEY", process.env.COVEO_KEY)
  return axios.get(
    `https://cloudplatform.coveo.com/rest/search?access_token=${
      process.env.COVEO_KEY
    }&q=${searchTerm}`
  )
}
