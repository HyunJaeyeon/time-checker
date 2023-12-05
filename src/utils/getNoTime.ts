// const selectedTimes = [9, 11, 14, 10, 15, 18];
// [9,10,11, 14, 15, 18]
// [[9, 11], [9, 10], [9, 10, 11, 14, 15], [11, 12, 13, 15],[14, 15, 16]]

function getNoTime(selectedTimes: number[], timeRange: string[]) {
  selectedTimes.sort((a, b) => a - b);

  // const timeRange: string[] = [];

  let min = selectedTimes[0];
  let max: number;

  const formatTimeRange = () => {
    if (min === max) timeRange.push(`${min}`);
    if (min !== max) timeRange.push(`${min}-${max}`);
  };

  selectedTimes.reduce((pre, cur, index) => {
    if (cur !== pre + 1) {
      max = pre;
      formatTimeRange();
      min = cur;
    }
    if (index === selectedTimes.length - 1) {
      max = cur;
      formatTimeRange();
    }
    return cur;
  });

  console.log(timeRange);
}

export default getNoTime;
