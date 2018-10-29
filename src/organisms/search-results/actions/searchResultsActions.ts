import { SEARCH_BEVERAGES } from "../constants/searchResultsContants"

const API_URL = "https://cloudplatform.coveo.com/rest/search?access_token="
const COVEO_KEY = "058c85fd-3c79-42a3-9236-b83d35588103"

export const fetchBeverages = (searchTerm: string) => {
  const bodyFormData = new FormData()
  bodyFormData.set("groupBy", "field")
  bodyFormData.set("sortField", "@tpprixnum")
  bodyFormData.set("numberOfResults", "24")

  return {
    type: SEARCH_BEVERAGES,
    request: {
      url: `${API_URL}${COVEO_KEY}&q=${encodeURIComponent(searchTerm)}`,
      method: "POST",
      data: bodyFormData,
    },
  }
}
