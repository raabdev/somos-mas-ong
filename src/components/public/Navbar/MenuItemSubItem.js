import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiGetActivities } from "reducers/activitiesReducer";
import styles from "./MenuItemSubItem.module.css";

export function MenuItemSubItem() {
  const { push } = useHistory();

  const location = useLocation();
  const pathMatch = location.pathname === "/activities" ? true : false;
  const classMatch = pathMatch ? styles.isMatch : "";

  const dispatch = useDispatch();

  const activities = useSelector(state => state.activities.activities);  

  useEffect(() => {
    dispatch(apiGetActivities());
  }, [dispatch]);


  return (
    <div className={styles.dropdown}>
      <button
        className={`${styles.dropbtn} ${classMatch}`}
        onClick={() => push("/activities")}
        style={{color:'black', fontSize:'15px', margin:'0px'} }
      >
        Actividades
      </button>
      <div className={styles.dropdown_content} >
        {activities.map(activity => {
          return (
            <Link to={`/activities/${activity.id}`} key={activity.id}>
              {activity.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}