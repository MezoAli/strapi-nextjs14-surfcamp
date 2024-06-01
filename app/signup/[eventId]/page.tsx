import EventsGrid from "@/components/EventsGrid";
import LoginRegisterForm from "@/components/LoginRegisterForm";
import axios from "axios";

const EventDetails = async ({ params }: { params: { eventId: number } }) => {
  const response = await axios.get(
    "http://localhost:1337/api/events?populate=deep"
  );

  const eventDetails = response.data.data.find((event: any) => {
    return event.id === +params.eventId;
  });

  // const singlePrice = eventDetails.attributes.singlePrice
  // const sharedPrice = eventDetails.attributes.sharedPrice

  const otherEvents = response.data.data.filter(
    (event: any) => event.id !== +params.eventId
  );

  return (
    <>
      <div className="mt-[12rem] px-10 flex justify-center items-center gap-10">
        <div className="w-[50%]">{params.eventId}</div>
        <div className="w-[50%]">
          <LoginRegisterForm
            sharedPrice={eventDetails.attributes.sharedPrice}
            singlePrice={eventDetails.attributes.singlePrice}
          />
        </div>
      </div>
      <EventsGrid events={otherEvents} />
    </>
  );
};

export default EventDetails;
