import React from "react";
import s from "./FraudHistory.module.css";
import { useHistory } from 'react-router-dom'
import { DashboardLayout } from "../../components/DashboardLayout";
import { Table, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';

export default function FraudTable(props) {
    const [isClicked, setIsClicked] = React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleRowClick = () => {
        const id = 
        setIsClicked(!(isClicked));
    }

    // const expandRow = {
    //     renderer: row => (
    //       <div>
    //         <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
    //         <p>You can render anything here, also you can add additional data on every row object</p>
    //         <p>expandRow.renderer callback will pass the origin row object to you</p>
    //       </div>
    //     )
    // }; 

    // const expandedRow = ()

    return(
        <React.Fragment>
            <Table bordered>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>URL</th>
                    <th>Date</th>
                    <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                    props.data.map((data, key) => {
                        return(
                            <tr key={props.data.id} onClick={handleRowClick}>
                                <td scope="row">{data.id}</td>
                                <td>{data.url}</td>
                                <td>{data.date}</td>
                                <td>{data.result}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </React.Fragment>
    )
}
