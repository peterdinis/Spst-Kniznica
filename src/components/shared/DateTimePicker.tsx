import { useDate } from "../../hooks/useDate";

const DateTimePicker: React.FC = () => {
  const { date, time } = useDate();
  return (
    <span className="font-bold text-xl ml-8">
      Aktuálny čas: {date} {time}
    </span>
  );
}

export default DateTimePicker;
