import React from "react";
import {Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import PropTypes from 'prop-types';
export default function Results(props) {
    return (
        <Grid container spacing={3} justify ="center">
            <Grid item>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>HTML/URL Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Probability Ok</TableCell>
                                <TableCell align="right">{props.phishingResults.html_score.prob_ok}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Probability Phish</TableCell>
                                <TableCell align="right">{props.phishingResults.html_score.prob_phish}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item>
            <Grid item>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Image Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Probability Found Logo</TableCell>
                                <TableCell align="right">{props.phishingResults.image_score.prob_ok}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Probability Images Pixelated</TableCell>
                                <TableCell align="right">{props.phishingResults.image_score.prob_phish}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item></Grid>
            </Grid>
            <Grid item>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Whois Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Date Registered</TableCell>
                                <TableCell align="right">{props.phishingResults.html_score.prob_ok}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Registrar</TableCell>
                                <TableCell align="right">{props.phishingResults.html_score.prob_ok}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Expiration Date</TableCell>
                                <TableCell align="right">{props.phishingResults.html_score.prob_ok}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>State</TableCell>
                                <TableCell align="right">{props.phishingResults.html_score.prob_ok}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell align="right">{props.phishingResults.html_score.prob_ok}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item></Grid>
        </Grid>
    );
}
Results.propTypes={
    phishingResults: PropTypes.object.isRequired
}