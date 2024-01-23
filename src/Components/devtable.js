import React from 'react'

export const Devtable = (props) => {
  // console.log(props.item);
  function fn(text, count){
    return text.slice(0, count) + (text.length > count ? "..." : "");
}
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
                        <td>{fn(props.item.demail,15)}</td>
                        <td>{props.item.drole}</td>
                    </tr>
                
                </table>
    </>
  )
}
