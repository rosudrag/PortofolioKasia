import React from 'react';
import { Table } from 'react-bootstrap';

const Charges = () => {

    const chargeHead = () => {
        return (
                <thead>
                    <tr>
                        <th># Hours</th>
                        <th>Flute Hourly Rate</th>
                        <th>Flute and piano hourly rate</th>
                    </tr>
                </thead>
        );
    };
    const chargeRow = (hour, individual, couple) => {
        return (
                <tr>
                    <td>{hour}</td>
                    <td>{individual}</td>
                    <td>{couple}</td>
                </tr>
        );
    };
    return (
        <div className="col-xs-12 col-md-6" style={{ paddingRight: '0px', paddingLeft: '0px', paddingTop: '56px', paddingBottom: '32px' }}>
            <h2 style={{ marginTop: '0px' }}>Charges</h2>

            <Table striped bordered condensed hover>
                {chargeHead()}
                <tbody>
                    {chargeRow('1 hour', '75 £/h', '130 £/h')}
                    {chargeRow('2 hours', '70 £/h', '120 £/h')}
                    {chargeRow('3 hours', '65 £/h', '110 £/h')}
                    {chargeRow('4 hours', '55 £/h', '100 £/h')}
                </tbody>
            </Table>
        </div>

    );
};

export default Charges;
