import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { callApi } from "../api";

const RoutineActions = () => {
    const {
        token,
        routines,
        user,
        publicRoutines
    } = useContext(UserContext);

}
export default RoutineActions;