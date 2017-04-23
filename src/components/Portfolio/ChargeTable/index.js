import React from 'react';
import styles from "./index.css"

const Charges = () => {

    const chargeHead = () => {
        return (
                <tr>
                    <th className={styles.paddingRight}>Hours</th>
                    <th className={styles.paddingRight}>Flute Hourly Rate</th>
                    <th>Flute and piano hourly rate</th>
                </tr>
        );
    };
    const chargeRow = (hour, individual, couple) => {
        return (
                <tr>
                    <td>{hour}</td>
                    <td className={styles.alignCenter}>{individual}</td>
                    <td className={styles.alignCenter}>{couple}</td>
                </tr>
        )
    };
    return (
        <div>
            <h2>Charges</h2>

            <table className={styles.chargeTable}>
                {chargeHead()}
                {chargeRow("1 hour", "75 £/h", "130 £/h")}
                {chargeRow("2 hours", "70 £/h",  "120 £/h")}
                {chargeRow("3 hours", "65 £/h",  "110 £/h")}
                {chargeRow("4 hours",  "55 £/h",  "100 £/h")}
            </table>
        </div>
    )
}

export default Charges;