import React, { memo } from "react";

const EventPricing = () => {
  return (
    <div className="flex flex-col gap-8 mt-10">
      <h3 className="font-bold text-5xl">Pricing</h3>
      <div className="flex flex-col gap-4">
        <p className="text-2xl">
          single room: <span className="font-bold">650$ per person</span>
        </p>
        <p className="text-2xl">
          shared room: <span className="font-bold">560$ per person</span>
        </p>
      </div>
    </div>
  );
};

export default memo(EventPricing);
