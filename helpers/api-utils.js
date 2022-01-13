export async function getFeaturedEvents() {
  const allEvents = await getAllEventsFetch();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getAllEventsFetch() {
  const result = await fetch(`https://dummymoviesreact-default-rtdb.firebaseio.com/events.json`);
  const data = await result.json();

  const allEvents = [];

  for (const dataKey in data) {
    allEvents.push(data[dataKey]);
  }

  return allEvents;

}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEventsFetch();

  return allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
}

export async function getEventById(id) {
  const allEvents = await getAllEventsFetch();

  return allEvents.find((event) => event.id === id);
}