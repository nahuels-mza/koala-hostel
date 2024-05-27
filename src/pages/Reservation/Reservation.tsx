import { Box } from "@mui/material";

export default function Reserve() {
  const start = "";
  const end = "";
  const base_url =
    "https://bananadesk.com/booking-engine/panda-hostel-mendoza/";
  // eslint-disable-next-line
  const fetchUsersForPage = async () => {
    try {
      const response = await fetch(
        `${base_url}room-type-availability?date_from=${start}&date_to=${end}&room_type=both`,
        {
          method: "GET",
          // headers: new Headers({
          //     "Content-Type": "application/json",
          //     Authorization: `Bearer ${token}`,
          // }),
        },
      );

      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return <Box />;
}
