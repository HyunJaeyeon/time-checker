interface NoTimeProps {
  (selectedTimes: number[], timeRange: string[], day: string): void;
}

const dayLists = ['월', '화', '수', '목', '금'];

const getNoTime: NoTimeProps = (selectedTimes, timeRange, day) => {
  selectedTimes.sort((a, b) => a - b);

  let min = selectedTimes[0];
  let max: number;

  const formatTimeRange = () => {
    if (min === max) timeRange.push(`${day}/${min}`);
    if (min !== max) timeRange.push(`${day}/${min}-${max}`);
  };

  if (selectedTimes.length === 1) timeRange.push(`${day}/${min}`);

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
};

function formatter(noTimes: number[][]) {
  const timeRange: string[] = [];
  noTimes.map(
    (noTime, index) =>
      noTime.length >= 1 && getNoTime(noTime, timeRange, dayLists[index]),
  );

  return timeRange;
}

export default formatter;
