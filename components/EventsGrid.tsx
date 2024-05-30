import axios from "axios";
import EventCard from "./EventCard";

const EventsGrid = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/events?populate=deep"
  );
  return (
    <div className="flex flex-col gap-8 mt-20 px-8">
      <h2 className="text-5xl font-bold mb-12">Upcoming camps & events</h2>
      <div className="grid grid-cols-3 gap-6">
        {response.data.data.map((event: any) => {
          return <EventCard event={event.attributes} key={event.id} />;
        })}
      </div>
    </div>
  );
};

export default EventsGrid;
