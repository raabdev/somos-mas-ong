import React from "react";
import { CardActivity } from "./CardActivity";

export default function ActivitiesList({ activities }) {
  return (
    <>
      {activities &&
        activities.map(activity => {
          return <CardActivity activity={activity} key={activity.id} />;
        })}
    </>
  );
}
