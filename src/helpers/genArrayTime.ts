export const genArrayTime = (
  startTime: string,
  endTime: string,
  // eslint-disable-next-line
  formatDay: any
) => {
  const start = formatDay(true, startTime);
  const end = formatDay(true, endTime);

  const intervalo = 30;
  // eslint-disable-next-line
  const hoursArray: any = [];

  let currentHour = start;

  while (currentHour.isBefore(end) || currentHour.isSame(end)) {
    const formattedHour = currentHour.format("hh:mm a");

    hoursArray.push({
      startTime: formattedHour,
      endTime: currentHour
        .add(intervalo, "minutes")
        .format("hh:mm a"),
      id: hoursArray.length + 1,
    });

    currentHour = currentHour.add(intervalo, "minutes");
  }

  hoursArray.pop();

  return hoursArray;
};
