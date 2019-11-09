import {
  SET_LOCATION_REQUEST,
  SET_LOCATION_SUCCESS,
  SET_LOCATION_ERROR,
  GET_LOCATION_ERROR,
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  REVERSE_GEOCODING_REQUEST,
  REVERSE_GEOCODING_SUCCESS,
  REVERSE_GEOCODING_ERROR
} from '../actions/types';

const geocode = {
  coords: {
    accuracy: 20,
    altitude: 5,
    heading: 0,
    latitude: 37.4219983,
    longitude: -122.084,
    speed: 0
  },
  mocked: false,
  timestamp: 1573149410000
}

const reverseGeocode = {
  "Relevance": 1.0,
  "Distance": 13.6,
  "MatchLevel": "houseNumber",
  "MatchQuality": {
    "Country": 1.0,
    "State": 1.0,
    "County": 1.0,
    "City": 1.0,
    "District": 1.0,
    "Street": [
      1.0
    ],
    "HouseNumber": 1.0,
    "PostalCode": 1.0
  },
  "MatchType": "pointAddress",
  "Location": {
    "LocationId": "NT_Opil2LPZVRLZjlWNLJQuWB_0ITN",
    "LocationType": "address",
    "DisplayPosition": {
      "Latitude": 41.88432,
      "Longitude": -87.63877
    },
    "NavigationPosition": [
      {
        "Latitude": 41.88449,
        "Longitude": -87.63877
      }
    ],
    "MapView": {
      "TopLeft": {
        "Latitude": 41.8854442,
        "Longitude": -87.64028
      },
      "BottomRight": {
        "Latitude": 41.8831958,
        "Longitude": -87.63726
      }
    },
    "Address": {
      "Label": "425 W Randolph St, Chicago, IL 60606, United States",
      "Country": "USA",
      "State": "IL",
      "County": "Cook",
      "City": "Chicago",
      "District": "West Loop",
      "Street": "W Randolph St",
      "HouseNumber": "425",
      "PostalCode": "60606",
      "AdditionalData": [
        {
          "value": "United States",
          "key": "CountryName"
        },
        {
          "value": "Illinois",
          "key": "StateName"
        },
        {
          "value": "Cook",
          "key": "CountyName"
        },
        {
          "value": "N",
          "key": "PostalCodeType"
        }
      ]
    },
    "MapReference": {
      "ReferenceId": "776372180",
      "MapId": "NAAM19134",
      "MapVersion": "Q1/2019",
      "MapReleaseDate": "2019-10-25",
      "Spot": 0.52,
      "SideOfStreet": "right",
      "CountryId": "21000001",
      "StateId": "21002247",
      "CountyId": "21002623",
      "CityId": "21002647",
      "BuildingId": "9000000000002726912",
      "AddressId": "79186508",
      "RoadLinkId": "170008450"
    }
  }
}

const initialState = {
  isDoingIO: false,
  geocode: geocode,
  reverseGeocode: reverseGeocode,
  error: null
}

const locationReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOCATION_REQUEST: return {
      ...state,
      isDoingIO: true
    }

    case SET_LOCATION_SUCCESS: return {
      ...state,
      isDoingIO: false
    }

    case SET_LOCATION_ERROR: return {
      ...state,
      error: action.error,
      isDoingIO: false
    }

    case GET_LOCATION_REQUEST: return {
      ...state,
      isDoingIO: true
    }

    case GET_LOCATION_SUCCESS: return {
      ...state,
      geocode: action.position,
      isDoingIO: false
    }

    case GET_LOCATION_ERROR: return {
      ...state,
      error: action.error,
      isDoingIO: false
    }

    case REVERSE_GEOCODING_REQUEST: return {
      ...state,
      isDoingIO: true
    }

    case REVERSE_GEOCODING_SUCCESS: return {
      ...state,
      reverseGeocode: action.reverseGeocode,
      isDoingIO: false
    }

    case REVERSE_GEOCODING_ERROR: return {
      ...state,
      error: action.error,
      isDoingIO: true
    }

    default: return {
      ...state
    }
  }
}

export default locationReducer;