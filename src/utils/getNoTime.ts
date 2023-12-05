interface NoTimeProps {
  (selectedTimes: number[], timeRange: string[], day: string): void;
}

const getNoTime: NoTimeProps = (selectedTimes, timeRange, day) => {
  selectedTimes.sort((a, b) => a - b);

  let min = selectedTimes[0];
  let max: number;

  const formatTimeRange = () => {
    if (min === max) timeRange.push(`${day}/${min}`);
    if (min !== max) timeRange.push(`${day}/${min}-${max}`);
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
};

export default getNoTime;
