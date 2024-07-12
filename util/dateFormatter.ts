const monthObject: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateFormatter = ({ date }: { date: Date }): string => {
  const getDate = date?.getDate();
  const getYear = date?.getFullYear();
  const getMonth = monthObject[date?.getMonth()];
  return `${getMonth} ${getDate}, ${getYear}`;
};

export default dateFormatter;
