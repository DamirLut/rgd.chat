export function classNames(...values: any[]) {
  return values.filter((value) => typeof value == 'string').join(' ');
}

export function getTimeInfo(t: number) {
  const hours = Math.floor(t / 3600);
  const minutes = Math.floor((t - hours * 3600) / 60);
  const seconds = Math.floor(t - (hours * 3600 + minutes * 60));

  return {
    hours,
    minutes,
    seconds,
  };
}

export function formatTime(t: number) {
  const time = getTimeInfo(t);
  return `${time.hours} ч ${time.minutes.toString().padStart(2, '0')} мин`;
}
