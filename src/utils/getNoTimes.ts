import getNoTime from './getNoTime';

const dayLists = ['월', '화', '수', '목', '금'];

function getNoTimes(noTimes: number[][]) {
  const timeRange: string[] = [];
  noTimes.map(
    (noTime, index) =>
      noTime.length >= 1 && getNoTime(noTime, timeRange, dayLists[index]),
  );

  return timeRange.join();
}

export default getNoTimes;
