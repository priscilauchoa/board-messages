import React, { useEffect, useState } from "react";
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
    const [newText, setNewText] = useState("");

    const handleChange = (event) => {
        setNewText(event.target.value);
    };
    const filterClickHandler = (filter) => {
        setFilter(filter);
    };

    function createAnnouncement(e) {
        e.preventDefault();
        console.log("newText \n -->", newText);

        fetch("http://localhost:8000/api/announcement", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newText }),
        })
            .then((resp) => resp.json())
            .then((resp) => {
                setFilter(filter);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <form>
                <label>
                    Text:{" "}
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <input
                    id="inputBtn"
                    type="text"
                    value="Create"
                    onClick={createAnnouncement}
                />
            </form>
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
