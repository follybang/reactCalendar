const baseUrl =
  "https://62dc66a957ac3c3f3c5aaf2f.mockapi.io/api/v1/calendarData";

export const getEvents = () =>
  fetch(baseUrl).then((response) => response.json());

export const createEvent = (newEvent) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newEvent),
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
