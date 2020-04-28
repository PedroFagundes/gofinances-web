import { parseISO, format } from 'date-fns';

const formatDate = (date: Date): string => {
  const parsedDate = parseISO(date.toString());
  const formattedDate = format(parsedDate, 'dd/MM/yyyy');

  return formattedDate;
};

export default formatDate;
