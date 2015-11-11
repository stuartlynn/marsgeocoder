# Mars Geocoder

This is a quick and dirty geocoder for Mars using data from [http://planetarynames.wr.usgs.gov/](http://planetarynames.wr.usgs.gov/):
You can check it out [here](https://geocodemars.herokuapp.com/olympus)

## Usage

Simply append the name of the place you are trying to geocode to the end of the URL. For example :

    curl https://geocodemars.herokuapp.com/olympus  

This will return the following geojson

```geojson
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        226.2,
        18.65
      ]
    },
    "properties": {
      "Feature_Name": "Olympus Mons",
      "Target": "Mars",
      "Diameter": "610.13",
      "Coordinate_System": "Planetocentric +East 0 - 360",
      "Approval_Status": "Approved",
      "Approval_Date": "1973",
      "Origin": "Classical albedo feature name."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        226.44,
        18.4
      ]
    },
    "properties": {
      "Feature_Name": "Olympus Rupes",
      "Target": "Mars",
      "Diameter": "1914.77",
      "Coordinate_System": "Planetocentric +East 0 - 360",
      "Approval_Status": "Approved",
      "Approval_Date": "1976",
      "Origin": "Classical albedo feature name."
    }
  },
  {
    "type"": ""Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          174.16,
          86.04
        ]
      },
      "properties": {
        "Feature_Name": "Olympia Rupēs",
        "Target": "Mars",
        "Diameter": "1197.04",
        "Coordinate_System": "Planetocentric +East 0 - 360",
        "Approval_Status": "Approved",
        "Approval_Date": "Jul 25, 2007",
        "Origin": "Classical albedo feature name."
      }
    }
  ]
}

```

Which is a ranked list of matches to your query.

## Running the geocoder

Simply run

    npm install
    node index.js

Then navigate to [http://localhost:2298/mount](http://localhost:2298/mount) to see the geocoder in action

## To Do

- [ ] Include a proper map projection
- [ ] Add a reverse geocoder
- [ ] Extend beyond Mars to other planetary bodies
