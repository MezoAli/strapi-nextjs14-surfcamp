import { SurfCamp } from "./EventCard";

const EventDetailsIntro = ({ event }: { event: SurfCamp }) => {
  console.log(event.description.replace(".", "\n"));

  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-5xl font-bold">{event.name}</h2>
      <p className="text-lg text-slate-500 leading-7">{event.description}</p>
    </div>
  );
};

export default EventDetailsIntro;
