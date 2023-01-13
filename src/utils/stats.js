exports.fetchPlayerStats = (data, id) => {
  const players = data.filter(item => item.PlayerId === id)
  if (players.length === 0) return {}

  return {
    PlayerId: id,
    Class: players[0].Class,
    Games: players.map(item => ({
      'Game Date': item['Game Date'],
      'Opponent': item.Opponent,
      'BA (Batting avg)': item['BA (Batting avg)'],
      'PA (Plate appereances)': item['PA (Plate appereances)'],
      'R (Runs)': item['R (Runs)'],
      'H (Hits)': item['H (Hits)'],
      'RBI (Runs Batted In)': item['RBI (Runs Batted In)'],
      '2B (Doubles)': item['2B (Doubles)'],
      '3B (Triples)': item['3B (Triples)'],
      'HR (Homerun)': item['HR (Homerun)']
    }))
  }
}
