import React, { useState } from "react";
import Info from "./Info";
import Header from "./Header";
import Footer from "./Footer";
import FilteredList from "./FilteredList";
import { applyFilter, search } from "../../services/filter";

export default function TodoList(props) {
  const [onlineStatus, setOnlineStatus] = useState("");
  const { list, filter, mode, query } = props.data;
  const {
    addNew,
    changeFilter,
    changeStatus,
    changeMode,
    setSearchQuery,
  } = props.actions;
  const count = list.length;
  const items = search(applyFilter(list, filter), query);

  const { onLine } = navigator;
  function updateOnlineStatus(event) {
    console.log(event);
    if (onLine) {
      setOnlineStatus("");
      console.log("It is online");
    } else {
      setOnlineStatus("offline");
      console.log("It is offline");
    }
  }
  // Check for online / offline
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);

  return (
    <div className={`container ${onlineStatus}`}>
      <div className="row">
        <div className="todolist">
          <Header {...{ addNew, mode, query, setSearchQuery }} />
          <FilteredList {...{ items, changeStatus }} />
          <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
          <Info {...{ mode }} />
        </div>
      </div>
    </div>
  );
}
