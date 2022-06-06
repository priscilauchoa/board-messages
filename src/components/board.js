import React, { useEffect, useState } from "react";
import InputText from "./inputText";
import Filter from "./filter.js";
import Announcement from "./announcement.js";

function useFetchAnnouncements(filter) {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/announcement/${filter}`)
            .then((resp) => resp.json())
            .then((response) => {
                console.log(response);
                setAnnouncements(response);
            });
    }, [filter]);

    return announcements;
}
export default function Board() {
    const [filter, setFilter] = useState("All");
    const announcements = useFetchAnnouncements(filter);

    const filterClickHandler = (filter) => {
        setFilter(filter);
    };
    return (
        <>
            <InputText />
            <div className="filter">
                <Filter filter="All" clickHandler={filterClickHandler} />
                <Filter filter="Today" clickHandler={filterClickHandler} />
                <Filter
                    filter="Last 7 Days"
                    clickHandler={filterClickHandler}
                />
                <Filter
                    filter="Last 30 Days"
                    clickHandler={filterClickHandler}
                />
            </div>
            <Announcement announcements={announcements} />
        </>
    );
}
