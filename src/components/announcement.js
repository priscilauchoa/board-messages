import react from "react";

export default function Announcements(props) {
 

    return (
        <>
            <div>
                {props.announcements && (
                    <div className="online-div">
                        {props.announcements.length > 0 &&
                            props.announcements.map((announcement) => {
                                return (
                                    <div
                                        className="item-list"
                                        key={announcement.id}
                                    >
                                        <p>{announcement.text}</p>

                                        <button
                                            name={announcement.id}
                                            onClick={(e) =>
                                                props.onDeleteClick(
                                                    announcement.id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })}
                    </div>
                )}
            </div>
        </>
    );
}
