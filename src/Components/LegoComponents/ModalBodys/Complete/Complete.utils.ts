export function getPlayersStatusCount(data) {
  const statusData = data.map((item) => item.Status);
  const allPlayersStatus = statusData.reduce((statusCount, currentStatus) => {
    if (typeof statusCount[currentStatus] !== 'undefined') {
      statusCount[currentStatus] += 1;
      return statusCount;
    }
    statusCount[currentStatus] = 1;
    return statusCount;
  }, {});
  return allPlayersStatus;
}
