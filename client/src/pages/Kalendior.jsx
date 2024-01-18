import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/lt";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Wrapper from "../assets/wrappers/ZemelapisObjektu";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");

    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const KalendiorContext = createContext();
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = dayjsLocalizer(dayjs); // or globalizeLocalizer

const Kalendior = () => {
  const { data } = useLoaderData();
  dayjs.locale("lt");
  const myEvents = [
    {
      id: 0,
      title: "CBB",
      allDay: true,
      start: new Date(2024, 0, 15),
      end: new Date(2024, 0, 16),
    },
    {
      id: 1,
      title: "BBD",
      allDay: true,
      start: new Date(2024, 3, 1),
      end: new Date(2024, 3, 1),
    },
  ];
  return (
    <KalendiorContext.Provider value={{ data }}>
      <Wrapper className="kalendorius-box">
        <Calendar
          style={{ height: 500, width: "95%", textTransform: "uppercase" }}
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
        />
      </Wrapper>
    </KalendiorContext.Provider>
  );
};
export const useKalendiorContext = () => useContext(KalendiorContext);
export default Kalendior;
