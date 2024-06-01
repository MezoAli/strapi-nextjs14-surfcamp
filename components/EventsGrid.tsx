import EventCard from "./EventCard";

const EventsGrid = async ({ events }: { events: any }) => {
  return (
    <div className="flex flex-col gap-8 mt-20 px-8">
      <h2 className="text-5xl font-bold mb-12">Upcoming camps & events</h2>
      <div className="grid grid-cols-3 gap-6">
        {events.map((event: any) => {
          return (
            <EventCard event={event.attributes} id={event.id} key={event.id} />
          );
        })}
      </div>
    </div>
  );
};

export default EventsGrid;
