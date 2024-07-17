import { createBrowserHistory } from 'history';


export const history = createBrowserHistory();

export const formatDateArray = (dateArray) => {
    const [year, month, day] = dateArray;
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  }

export const convertToISO = (dateArray) => {
  const [year, month, day] = dateArray;
  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');

  return `${year}-${formattedMonth}-${formattedDay}`;
}