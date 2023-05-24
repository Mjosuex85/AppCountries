[
  {
    "$group": {
      "_id": {
        "path": "$path",
        "date": { "$dateToString": { "format": "%Y-%m-%d", "date": "$date" } }
      },
      "count": { "$sum": 1 }
    }
  }
]

