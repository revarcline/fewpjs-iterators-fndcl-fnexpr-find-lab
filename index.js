function superbowlWin(record) {
  // record looks like array of objects, values are strings:
  // [ {year: '2018', result: 'L'} ]
  let result = record.find((season) => season.result === "W");
  return result ? result.year : undefined;
}
