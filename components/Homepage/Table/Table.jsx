import styles from './Table.module.scss'

import React from 'react'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

// TODO: replace hard coded data with data from snowflake
const Table = ({ data, introText }) => {
  console.log({ data })

  const availableYears = [...new Set(data.map((item) => item.YEAR_OR_TARGET))]

  const graphSections = [...new Set(data.map((item) => item.GRAPH_STATEMENT))]

  const firstSectionRows = data.filter(
    (item) => item.GRAPH_STATEMENT === graphSections[0]
  )
  const firstSectionTitles = [
    ...new Set(firstSectionRows.map((section) => section.DISAGGREGATION))
  ]

  return (
    <div className={styles['table']}>
      <p className={styles['table__intro']}>{introText}</p>

      <table>
        <thead>
          <tr>
            <td colSpan={1}></td>
            <th className={styles['table__year']} scope='col'>
              {availableYears[0]}
            </th>
            <th className={styles['table__year']} scope='col'>
              {availableYears[1]}
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
              {graphSections[0]}
            </th>
          </tr>
          {firstSectionTitles.map((title) => {
            const firstYearValue = firstSectionRows.find(
              (row) =>
                row.DISAGGREGATION === title &&
                row.YEAR_OR_TARGET === availableYears[0]
            )
            const secondYearValue = firstSectionRows.find(
              (row) =>
                row.DISAGGREGATION === title &&
                row.YEAR_OR_TARGET === availableYears[1]
            )
            return (
              <tr
                className={
                  title === 'Total Revenue' && styles['table__td-highlight']
                }
              >
                <th
                  className={
                    title !== 'Total Revenue' && styles['table__data-th']
                  }
                >
                  {title}
                </th>
                <td className={styles['table__amount']}>
                  {formatter.format(firstYearValue?.VALUE)}
                </td>
                <td className={styles['table__amount']}>
                  {formatter.format(secondYearValue.VALUE)}
                </td>
              </tr>
            )
          })}
          <tr>
            <th
              className={styles['table__main-th']}
              scope='rowgoup'
              colSpan={3}
            >
              {graphSections[1]}
            </th>
          </tr>

          {/* TODO: Hook the rest of the table up to the data somehow */}
          {/* {secondSectionTitles.map((title) => {
            const subDataTitle = title.split(' | ')
            console.log({ subDataTitle })
            if (subDataTitle.length === 1) {
              return (
                <tr>
                  <th className={styles['table__sub-th']} colSpan={3}>
                    {subDataTitle[0]}
                  </th>
                </tr>
              )
            }
            return (
              <>
                <tr className={styles['table__sub-th-data']}>
                  <th className={styles['table__data-th']}>
                    {subDataTitle[1]}
                  </th>
                  <td className={styles['table__amount']}>$382,455</td>
                  <td className={styles['table__amount']}>$324,182</td>
                </tr>
              </>
            )
          })} */}
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
            <td className={styles['table__amount']}>$35,343</td>
            <td className={styles['table__amount']}>$43,672</td>
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
          <tr>
            <th className={styles['table__sub-th']}>Total Expenditures</th>
            <td className={styles['table__amount']}>$439,553</td>
            <td className={styles['table__amount']}>$394,859</td>
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
