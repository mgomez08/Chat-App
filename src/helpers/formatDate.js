import * as dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
});
export const formatDate = (date) => {
  const hourMonth = dayjs(date);
  return hourMonth.format("HH:mm a | MMMM D", "es");
};
