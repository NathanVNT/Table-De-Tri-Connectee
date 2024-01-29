import {Card, CardContent, Stack, Typography} from "@mui/material";
import Pie_Chart from "../components/Pie_Chart";
import Bar_Chart from "../components/Bar_Chart";
import Line_Chart from "../components/Line_Chart";
import Stats_Brut from "../components/Stats_Brut";
import React, {useEffect} from "react";

export const UserDashboard = () => {
    let user = "Victor"
    useEffect(() => {
        document.title = `Dashboard ${user} - Table de Tri`
    }, [])
  return(
      <>
          <Stack padding={5} spacing={4} direction={'row'} useFlexGap flexWrap={'wrap'}
                 justifyContent="center"
                 alignItems="center">
              <Card sx={{ width: "90%"}}>

                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          Bienvenue {user}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Ci-dessous, vous pourrez trouvez toutes vos données concernant la table de tri.
                      </Typography>
                  </CardContent>
              </Card>
          </Stack>          <Stack
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