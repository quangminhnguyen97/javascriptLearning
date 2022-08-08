// Bai 2: Dem so tu trong cau. 
export function statisticsWords(str) {
  if ( str === '') return {}

  return str.split(' ').filter(i => i !== '').reduce((stats, i) => {
    stats[i] = stats[i] !== undefined ? stats[i]+=1 : 1
    return stats
  }, {})

}

console.log(statisticsWords('Nguyen Quang Minh'))