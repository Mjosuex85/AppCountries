[
  {
    "$group": {
      "_id": { "$dateToString": { "format": "%Y-%m-%d", "date": "$date" } },
      "count": { "$sum": 1 }
    }
  },
  {
    "$sort": { "_id": 1 }
  }
]


