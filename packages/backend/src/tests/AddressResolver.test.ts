import { graphqlTestCall } from "./utils/graphqlTestCall"

const findAddressQuery = `
  query Address($country: String!, $zipcode: String!) {
    findAddress(country: $country, zipcode : $zipcode) {
      countryAbbreviation,
      postcode,
      country,
      places {
        placeName,
        state,
        stateAbbreviation
      }
    }
  }
`

const EXPECTED_RESPONSE = {
  "data": {
    "findAddress": {
      "countryAbbreviation": "US",
      "postcode": "90210",
      "country": "United States",
      "places": {
        "placeName": "Beverly Hills",
        "state": "California",
        "stateAbbreviation": "CA"
      }
    }
  }
}

describe("resolvers", () => {
  it("should return the entire address from the given country code and zip code", async () => {
    const testData = {
      country: 'us',
      zipcode: "90210"
    }

    const response = await graphqlTestCall(findAddressQuery, testData)
    
    expect(response).toEqual(EXPECTED_RESPONSE);
  })

  it("should not return the entire address from the given country code and zip code", async () => {
    const testData = {
      country: 'xxx',
      zipcode: "00000"
    }

    const response = await graphqlTestCall(findAddressQuery, testData)
    
    expect(response).toHaveProperty("errors");
  })
})