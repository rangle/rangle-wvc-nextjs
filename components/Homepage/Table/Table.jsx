import styles from './Table.module.scss'

import React from 'react'

const Table = ({ introText }) => {
  return (
    <div className={styles['table']}>
      <p>{introText}</p>

      <table>
        <tr>
          <td></td>
          <th scope='col'>2020</th>
          <th scope='col'>2021</th>
        </tr>
        <tr>
          <th className={styles['table__main-th']} scope='rowgoup' colSpan={3}>
            Revenue
          </th>
        </tr>
        <tr>
          <td>Cash Donations</td>
          <td>$226,267</td>
          <td>$217,606</td>
        </tr>
        <tr>
          <td>Gifts-in-Kind</td>
          <td>$140,951</td>
          <td>$116,222</td>
        </tr>
        <tr className={styles['table__td-highlight']}>
          <td>Total Revenue</td>
          <td>$226,267</td>
          <td>$217,606</td>
        </tr>
        <tr>
          <th className={styles['table__main-th']} scope='rowgoup' colSpan={3}>
            Expenditures
          </th>
        </tr>
        <tr>
          <th className={styles['table__sub-th']} colSpan={3}>
            Programs
          </th>
        </tr>
        <tr className={styles['table__sub-th-data']}>
          <td>International Relief, Development & Advocacy</td>
          <td>$382,455</td>
          <td>$324,182</td>
        </tr>
        <tr className={styles['table__sub-th-data']}>
          <td>Public Awareness & Education</td>
          <td>$2,026</td>
          <td>$2,809</td>
        </tr>
        <tr>
          <th className={styles['table__sub-th']}>Fundraising</th>
          <td>$2,026</td>
          <td>$2,809</td>
        </tr>
        <tr>
          <th className={styles['table__sub-th']} colSpan={3}>
            Administration
          </th>
        </tr>
        <tr className={styles['table__sub-th-data']}>
          <td>Domestic</td>
          <td>$15,517</td>
          <td>$19,636</td>
        </tr>
        <tr className={styles['table__sub-th-data']}>
          <td>International</td>
          <td>$4,212</td>
          <td>$4,560</td>
        </tr>
        <tr>
          <th className={styles['table__main-th']} scope='rowgoup'>
            Excess (Deficiency) of Revenue over Expenditures
          </th>
          <td className={styles['table__main-th-highlight']}>$1,279</td>
          <td className={styles['table__main-th-highlight']}>($488)</td>
        </tr>
      </table>
    </div>
  )
}

export default Table
