const SubscripeCard = () => {
  return (
    <div className=" bg-lightBrown rounded-lg flex gap-4 justify-center items-center mx-6 px-4 py-8 my-16">
      <div className="flex flex-col gap-6 w-[60%]">
        <h3 className="text-4xl font-bold">subscribe to our newsletter</h3>
        <p>
          Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
          Newsletter Today to always stay in touch
        </p>
      </div>
      <div className="flex justify-center items-center w-[40%]">
        <input
          type="text"
          className="p-4 border"
          placeholder="Enter your E-mail address"
        />
        <button className="px-6 py-4 text-white font-semibold rounded-3xl bg-turquoise">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default SubscripeCard;
