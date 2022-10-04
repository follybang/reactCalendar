const baseUrl =
  "https://62dc66a957ac3c3f3c5aaf2f.mockapi.io/api/v1/calendarData";

export const getEvents = () =>
  fetch(baseUrl)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
      alert("Internal Server Error. Can't display events");
    });

export const createEvent = (newEvent) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newEvent),
  }).catch((err) => {
    console.log(err);
    alert("Internal Server Error. Can't create event");
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).catch((err) => {
    console.log(err);
    alert("Internal Server Error. Can't remove event");
  });
