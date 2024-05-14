import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen gap-4">
      <h2 className="text-3xl text-red-700 font-bold capitalize">
        Page you are looking for is not found
      </h2>
      <Link
        href="/"
        className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-300 duration-100 transition"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
