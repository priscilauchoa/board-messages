import react from "react";
import { useState, useEffect } from "react";

export default function Announcements(props) {
    function deleteClickHandler() {
        props.deleteHandler(props.announcement);
    }

    return (
        <>
            <div>
                {props.announcements && (
                    <div className="online-div">
                        {props.announcements.length > 0 &&
                            props.announcements.map((announcement) => {
                                return (
                                    <>
                                        <div
                                            className="item-list"
                                            key={announcement.id}
                                        >
                                            <p>{announcement.text}</p>

                                            <button
                                                onClick={deleteClickHandler}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </>
                                );
                            })}
                    </div>
                )}
            </div>
        </>
    );
}
