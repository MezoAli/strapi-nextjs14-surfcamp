import Image from "next/image";
import Link from "next/link";

interface SurfCamp {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  singlePrice: number;
  sharedPrice: number;
  imageSrc: any;
}

const EventCard = ({ event, id }: { event: SurfCamp; id: number }) => {
  return (
    <Link href={`/signup/${id}`} className="flex flex-col h-full flex-grow">
      <div className="flex flex-col h-full">
        <Image
          src={`${process.env.BASE_URL}${event.imageSrc.data.attributes.url}`}
          alt="test-image"
          className="rounded-lg h-full"
          width={600}
          height={600}
        />
        <div className="bg-lightBrown p-6 rounded-xl">
          <p className="text-2xl font-semibold mb-8">{event.name}</p>
          <div className="flex flex-col gap-4 rounded-lg">
            <time className="font-semibold text-lg">
              {new Date(event.startDate).toLocaleDateString()} -{" "}
              {new Date(event.startDate).toLocaleTimeString()}
            </time>
            <p>price starting from {event.singlePrice} $</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
