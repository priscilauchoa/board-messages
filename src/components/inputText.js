import react from "react";
import { useState } from "react";

export default function InputText() {
    const [newText, setNewText] = useState("");

    const handleChange = (event) => {
        setNewText(event.target.value);
    };

    function createAnnouncement(e) {
        e.preventDefault();
        let currentDate = new Date();
        console.log("newText \n -->", newText);
        console.log("current date \n -->", currentDate);

        fetch("http://localhost:3000/api/announcement", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newText, currentDate }),
        })
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp);
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
        </>
    );
}
