[
  {
    "$group": {
      "_id": {
        "date": { "$dateToString": { "format": "%Y-%m-%d", "date": "$date" } },
        "paths": { "$addToSet": "$path" }
      }
    }
  }
]

