import React from 'react';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h3>Submitted Data</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Languages</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.firstName || 'N/A'}</td>
              <td>{entry.lastName || 'N/A'}</td>
              <td>{entry.gender || 'N/A'}</td>
              <td>{Array.isArray(entry.languages) ? entry.languages.join(', ') : 'N/A'}</td>
              <td>{entry.email || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
