import React from 'react';

const StatusTable = (props) => {
  return (
    <div className='mt-6 border rounded-xl p-6'>
      <table>
        <thead>
         <tr>
            <td>STATUS</td>
            <td>SERVICE NAME</td>
            <td>END POINT</td>
            <td>RESPONSE TIME</td>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>OK</span>
            </td>
            <td>
              <span>PINPAY</span>
            </td>
            <td>
              <span>https://www.bluewalnut.co.kr/api/v1/helthcheck</span>
            </td>
            <td>
              <span>00:00:00 00.02.00</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default StatusTable;