import React from 'react'

export const Devtable = (props) => {
  return (
    <>
     <table>
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>option</th>
                    </tr>
                    <tr>
                        <td>{props.item.dname}</td>
                        <td>{props.item.demail}</td>
                        <td>{props.item.drole}</td>
                    </tr>
                
                </table>
    </>
  )
}
