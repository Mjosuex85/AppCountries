[
  {
    "$group": {
      "_id": {
        "date": { "$dateToString": { "format": "%Y-%m-%d", "date": "$date" } },
        "path": "$path"
      },
      "count": { "$sum": 1 }
    }
  },
  {
    "$group": {
      "_id": "$_id.date",
      "paths": {
        "$push": {
          "path": "$_id.path",
          "count": "$count"
        }
      }
    }
  },
  {
    "$sort": { "_id": 1 }
  },
  {
    "$project": {
      "_id": 0,
      "date": "$_id",
      "paths": 1
    }
  }
]



