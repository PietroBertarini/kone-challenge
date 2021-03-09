/**
 * Get the data from csv and t, returning a object different status with their sum.
 * ex: [player1.status = "Injured", player2.status = "Active", player3.status = "Active"] => { injured : 1, active: 2}
 * @param status: Data from csv
 */
export function getPlayersStatusCount(status) {
  const statusData = status.map((item) => item.Status);
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
