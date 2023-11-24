export function canMakeReservation(
  // eslint-disable-next-line
  formatWithUserTimeZone: any,
  // eslint-disable-next-line
  existingReservations: any[],
  // eslint-disable-next-line
  newReservation: any
): boolean {
  const {
    startTime: newStartTime,
    endTime: newEndTime,
    boats: newBoats,
  } = newReservation;

  const newStart = formatWithUserTimeZone(true, newStartTime);
  const newEnd = formatWithUserTimeZone(true, newEndTime);

  for (const reservation of existingReservations) {
    const { startTime, endTime, boats } = reservation;

    const existingStart = formatWithUserTimeZone(true, startTime);
    const existingEnd = formatWithUserTimeZone(true, endTime);

    const dateOverlap =
      (newStart.isSameOrAfter(existingStart) &&
        newStart.isBefore(existingEnd)) ||
      (newEnd.isAfter(existingStart) &&
        newEnd.isSameOrBefore(existingEnd)) ||
      (newStart.isSameOrBefore(existingStart) &&
        newEnd.isSameOrAfter(existingEnd));

    const boatOverlap = newBoats
      ? newBoats.some((newBoat: number) =>
          boats?.some(
            // eslint-disable-next-line
            (existingBoat: any) => existingBoat.id === newBoat
          )
        )
      : false;

    if (dateOverlap && boatOverlap) {
      return true;
    }
  }

  return false;
}

export function statusReservation(
  // eslint-disable-next-line
  formatWithUserTimeZone: any,
  // eslint-disable-next-line
  existingReservations: any[],
  // eslint-disable-next-line
  newReservation: any
): boolean {
  const { startTime: newStartTime, endTime: newEndTime } =
    newReservation;

  const newStart = formatWithUserTimeZone(true, newStartTime);
  const newEnd = formatWithUserTimeZone(true, newEndTime);

  for (const reservation of existingReservations) {
    const { startTime, endTime } = reservation;
    const existingStart = formatWithUserTimeZone(true, startTime);
    const existingEnd = formatWithUserTimeZone(true, endTime);

    const dateOverlap =
      (newStart.isSameOrAfter(existingStart) &&
        newStart.isBefore(existingEnd)) ||
      (newEnd.isAfter(existingStart) &&
        newEnd.isSameOrBefore(existingEnd)) ||
      (newStart.isSameOrBefore(existingStart) &&
        newEnd.isSameOrAfter(existingEnd));

    if (dateOverlap) {
      return true;
    }
  }

  return false;
}

export function boatsReserved(
  // eslint-disable-next-line
  formatWithUserTimeZone: any,
  // eslint-disable-next-line
  existingReservations: any[],
  // eslint-disable-next-line
  newReservation: any
  // eslint-disable-next-line
) {
  const {
    startTime: newStartTime,
    endTime: newEndTime,
    boats: newBoats,
  } = newReservation;

  const newStart = formatWithUserTimeZone(true, newStartTime);
  const newEnd = formatWithUserTimeZone(true, newEndTime);

  // eslint-disable-next-line
  let boatsExistingReservation: any[] = [];

  for (const reservation of existingReservations) {
    const { startTime, endTime, boats } = reservation;
    const existingStart = formatWithUserTimeZone(true, startTime);
    const existingEnd = formatWithUserTimeZone(true, endTime);

    const dateOverlap =
      (newStart.isSameOrAfter(existingStart) &&
        newStart.isBefore(existingEnd)) ||
      (newEnd.isAfter(existingStart) &&
        newEnd.isSameOrBefore(existingEnd)) ||
      (newStart.isSameOrBefore(existingStart) &&
        newEnd.isSameOrAfter(existingEnd));

    const boatOverlap = boats.filter((newBoat: number) => {
      // eslint-disable-next-line
      return newBoats.map((boat: any) => newBoat === boat.id);
    });

    if (dateOverlap && boatOverlap.length > 0) {
      boatsExistingReservation = [
        ...boatsExistingReservation,
        ...boatOverlap,
      ];
    }
  }

  return boatsExistingReservation;
}
