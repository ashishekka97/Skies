import convert from 'convert-units';

export const localizeTemp = (temp, unit) => {
  switch (unit) {
    case 1:
      return (
        Math.round(
          convert(temp)
            .from('F')
            .to('C'),
        ) + '°C'
      );
    case 2:
      return (
        Math.round(
          convert(temp)
            .from('F')
            .to('K'),
        ) + '°K'
      );
    default:
      return Math.round(temp) + '°F';
  }
};

export const localizeTempWithoutSuffix = (temp, unit) => {
  switch (unit) {
    case 1:
      return Math.round(
        convert(temp)
          .from('F')
          .to('C'),
      );
    case 2:
      return Math.round(
        convert(temp)
          .from('F')
          .to('K'),
      );
    default:
      return Math.round(temp);
  }
};

export const localizeSpeed = (speed, unit) => {
  switch (unit) {
    case 1:
      return (
        Math.round(
          convert(speed)
            .from('m/s')
            .to('km/h'),
        ) + ' km/h'
      );
    case 2:
      return (
        Math.round(
          convert(speed)
            .from('m/s')
            .to('m/h'),
        ) + ' m/h'
      );
    default:
      return Math.round(speed) + ' m/s';
  }
};

export const localizeSpeedWithoutSuffix = (speed, unit) => {
  switch (unit) {
    case 1:
      return Math.round(
        convert(speed)
          .from('m/s')
          .to('km/h'),
      );
    case 2:
      return Math.round(
        convert(speed)
          .from('m/s')
          .to('m/h'),
      );
    default:
      return Math.round(speed);
  }
};

export const localizePressure = (pressure, unit) => {
  const inBars = parseFloat(pressure / 1000);
  switch (unit) {
    case 1:
      return (
        Math.round(
          convert(inBars)
            .from('bar')
            .to('hPa'),
        ) + ' hPa'
      );
    case 2:
      return (
        Math.round(
          convert(inBars)
            .from('bar')
            .to('psi'),
        ) + ' psi'
      );
    default:
      return Math.round(inBars) + ' bar';
  }
};

export const localizeDistance = (distance, unit) => {
  switch (unit) {
    case 1:
      return (
        Math.round(
          convert(distance)
            .from('mi')
            .to('km'),
        ) + ' km'
      );
    case 2:
      return (
        Math.round(
          convert(distance)
            .from('mi')
            .to('m'),
        ) + ' m'
      );
    default:
      return Math.round(distance) + ' mi';
  }
};

export const localizeTime = unit => {
  if (unit === 1) {
    return 'hh:mm A';
  }
  return 'HH:mm';
};
