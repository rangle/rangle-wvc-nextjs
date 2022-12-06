import styles from './Table.module.scss'

import React from 'react'

const Table = ({ introText }) => {
  return (
    <div className={styles['table']}>
      <p className={styles['table__intro']}>{introText}</p>

      <table>
        <thead>
          <tr>
            <td colSpan={1}></td>
            <th className={styles['table__year']} scope='col'>
              2021
            </th>
            <th className={styles['table__year']} scope='col'>
              2020
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              className={styles['table__main-th']}
              scope='rowgoup'
              colSpan={3}
            >
              Revenue
            </th>
          </tr>
          <tr>
            <th className={styles['table__data-th']}>Cash Donations</th>
            <td className={styles['table__amount']}>$226,267</td>
            <td className={styles['table__amount']}>$217,606</td>
          </tr>
          <tr>
            <th className={styles['table__data-th']}>Gifts-in-Kind</th>
            <td className={styles['table__amount']}>$140,951</td>
            <td className={styles['table__amount']}>$116,222</td>
          </tr>
          <tr className={styles['table__td-highlight']}>
            <th>Total Revenue</th>
            <td className={styles['table__amount']}>$226,267</td>
            <td className={styles['table__amount']}>$217,606</td>
          </tr>
          <tr>
            <th
              className={styles['table__main-th']}
              scope='rowgoup'
              colSpan={3}
            >
              Expenditures
            </th>
          </tr>
          <tr>
            <th className={styles['table__sub-th']} colSpan={3}>
              Programs
            </th>
          </tr>
          <tr className={styles['table__sub-th-data']}>
            <th className={styles['table__data-th']}>
              International Relief, Development & Advocacy
            </th>
            <td className={styles['table__amount']}>$382,455</td>
            <td className={styles['table__amount']}>$324,182</td>
          </tr>
          <tr className={styles['table__sub-th-data']}>
            <th className={styles['table__data-th']}>
              Public Awareness & Education
            </th>
            <td className={styles['table__amount']}>$2,026</td>
            <td className={styles['table__amount']}>$2,809</td>
          </tr>
          <tr>
            <th className={styles['table__sub-th']}>Fundraising</th>
            <td className={styles['table__amount']}>$2,026</td>
            <td className={styles['table__amount']}>$2,809</td>
          </tr>
          <tr>
            <th className={styles['table__sub-th']} colSpan={3}>
              Administration
            </th>
          </tr>
          <tr className={styles['table__sub-th-data']}>
            <th className={styles['table__data-th']}>Domestic</th>
            <td className={styles['table__amount']}>$15,517</td>
            <td className={styles['table__amount']}>$19,636</td>
          </tr>
          <tr className={styles['table__sub-th-data']}>
            <th className={styles['table__data-th']}>International</th>
            <td className={styles['table__amount']}>$4,212</td>
            <td className={styles['table__amount']}>$4,560</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th className={styles['table__main-th']} scope='rowgoup'>
              Excess (Deficiency) of Revenue over Expenditures
            </th>
            <td className={styles['table__main-th-highlight']}>$1,279</td>
            <td className={styles['table__main-th-highlight']}>($488)</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Table
