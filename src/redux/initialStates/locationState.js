export const geocode = {
  Latitude: 21.15707,
  Longitude: 79.08218,
};

export const reverseGeocode = {
  Relevance: 1.0,
  Distance: 13.6,
  MatchLevel: 'houseNumber',
  MatchQuality: {
    Country: 1.0,
    State: 1.0,
    County: 1.0,
    City: 1.0,
    District: 1.0,
    Street: [1.0],
    HouseNumber: 1.0,
    PostalCode: 1.0,
  },
  MatchType: 'pointAddress',
  Location: {
    LocationId: 'NT_Opil2LPZVRLZjlWNLJQuWB_0ITN',
    LocationType: 'address',
    DisplayPosition: {
      Latitude: 41.88432,
      Longitude: -87.63877,
    },
    NavigationPosition: [
      {
        Latitude: 41.88449,
        Longitude: -87.63877,
      },
    ],
    MapView: {
      TopLeft: {
        Latitude: 41.8854442,
        Longitude: -87.64028,
      },
      BottomRight: {
        Latitude: 41.8831958,
        Longitude: -87.63726,
      },
    },
    Address: {
      Label: '425 W Randolph St, Chicago, IL 60606, United States',
      Country: 'USA',
      State: 'IL',
      County: 'Cook',
      City: 'Chicago',
      District: 'West Loop',
      Street: 'W Randolph St',
      HouseNumber: '425',
      PostalCode: '60606',
      AdditionalData: [
        {
          value: 'United States',
          key: 'CountryName',
        },
        {
          value: 'Illinois',
          key: 'StateName',
        },
        {
          value: 'Cook',
          key: 'CountyName',
        },
        {
          value: 'N',
          key: 'PostalCodeType',
        },
      ],
    },
    MapReference: {
      ReferenceId: '776372180',
      MapId: 'NAAM19134',
      MapVersion: 'Q1/2019',
      MapReleaseDate: '2019-10-25',
      Spot: 0.52,
      SideOfStreet: 'right',
      CountryId: '21000001',
      StateId: '21002247',
      CountyId: '21002623',
      CityId: '21002647',
      BuildingId: '9000000000002726912',
      AddressId: '79186508',
      RoadLinkId: '170008450',
    },
  },
};

export const suggestions = [
  {
    label: 'India, <b>Nag</b>pur',
    language: 'en',
    countryCode: 'IND',
    locationId: 'NT_z2nC7t3W5n5Bri3-9osJxC',
    address: {
      country: 'India',
      state: 'MH',
      county: '<b>Nag</b>pur',
    },
    matchLevel: 'county',
  },
];

export const savedLocations = [
  {
    label: 'Current Location',
    latitude: 41.88449,
    longitude: -87.63877,
    usingGPS: true,
  },
]
