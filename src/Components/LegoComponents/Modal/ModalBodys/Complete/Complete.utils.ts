export function getPlayersStatusCount(data) {
  const statusData = data.map((item) => item.Status);
  return statusData.reduce((statusCount, currentStatus) => {
    const currentStatusLowerCase = currentStatus.toLowerCase();
    if (typeof statusCount[currentStatusLowerCase] !== 'undefined') {
      statusCount[currentStatusLowerCase] += 1;
      return statusCount;
    }
    statusCount[currentStatusLowerCase] = 1;
    return statusCount;
  }, {});
}
