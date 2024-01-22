import * as React from 'react';
import {Card, CardContent, CardHeader, colors, Stack} from "@mui/material";
import {LineChart} from "@mui/x-charts";
export default function Line_Chart() {
    return (
        <Stack>
            <Card sx={{ width: 500,height: 350, margin: 2 }}>
                <CardContent>
                    <h2>Évolution des déchets jetés</h2>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2.432423432, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={500}
                        height={200}
                    />
                </CardContent>
            </Card>
        </Stack>
    );
}
