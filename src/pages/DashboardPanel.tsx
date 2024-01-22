import Pie_Chart from "../components/Pie_Chart";
import React from "react";
import {Stack} from "@mui/material";
import Line_Chart from "../components/Line_Chart";
import Bar_Chart from "../components/Bar_Chart";
import Stats_Brut from "../components/Stats_Brut";

export const DashboardPanel = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                width={"fit-content"}
                useFlexGap
                flexWrap={"wrap"}
            >
                <Pie_Chart/>
                <Bar_Chart/>
                <Line_Chart/>

                <Stats_Brut/>
            </Stack>
        </>
    )
}