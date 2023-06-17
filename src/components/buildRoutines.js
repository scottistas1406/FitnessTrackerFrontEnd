import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../api";

const BuildRoutines = () => {
    const { routineId } = useParams();
    const [routines, setRoutines] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const fetchRoutines = async () => {
            try {
                const response = await callApi({
                    url: `routines/${routineId}/routines`
                });
                if (response) {
                    setRoutines(response);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchRoutines();
    }, [routineId]);

    // Rest of the component logic and JSX goes here

    return (
        // JSX code for the component's UI
    );
};

export default BuildRoutines;
