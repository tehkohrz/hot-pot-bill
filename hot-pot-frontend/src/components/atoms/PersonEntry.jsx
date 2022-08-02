import React from 'react';

export default function PersonEntry({person}) {
  return (
    <tr>
      <td>{person.name}</td>
      <td>${person.amount}</td>
    </tr>
  )
}