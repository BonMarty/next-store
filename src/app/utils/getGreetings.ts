export const getGreetings = () => {
  const date = new Date();

  const hours = date.getHours();

  if (hours >= 21 || (hours >= 0 && hours < 5)) {
    return 'Good night';
  } else if (hours >= 5 && hours <= 12) {
    return 'Good morning';
  } else if (hours > 12 && hours < 17) {
    return 'Good afternoon';
  } else if (hours >= 17 && hours < 21) {
    return 'Good evening';
  }
};
