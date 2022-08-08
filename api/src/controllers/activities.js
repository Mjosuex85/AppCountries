const { Activities } = require('../db')

export function allActivities() {
    const activities = await Activities.findAll()
    const allActs = activities.map()

}