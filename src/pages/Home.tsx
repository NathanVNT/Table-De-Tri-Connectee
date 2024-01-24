import {useNavigate} from "react-router-dom";
import {MuiLayout} from "../components/MuiLayout";
import React from "react";
import {Stack} from "@mui/material";
import Pie_Chart from "../components/Pie_Chart";
import Bar_Chart from "../components/Bar_Chart";
import Line_Chart from "../components/Line_Chart";
import Stats_Brut from "../components/Stats_Brut";

export const Home = () => {
    //const navigate = useNavigate()
    return(
        <>
            <>
                <MuiLayout/>
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
            </>        </>
    )
}