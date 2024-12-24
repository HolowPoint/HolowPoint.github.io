import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '@mui/material/styles';

const PortfolioTable = () => {
  // Sample data
  const data = [
    {
      id: '1',
      company: 'Amazon',
      sector: 'E-commerce',
      investment: 'High',
    },
    {
      id: '2',
      company: 'Costco',
      sector: 'Retail',
      investment: 'Medium',
    },
    {
      id: '3',
      company: 'Tesla',
      sector: 'Automotive',
      investment: 'High',
    },
    {
      id: '4',
      company: 'Shopify',
      sector: 'E-commerce',
      investment: 'Medium',
    },
    {
      id: '5',
      company: 'Uber',
      sector: 'Transportation',
      investment: 'High',
    },
  ];

  // Material-UI Table columns
  const muiColumns = [
    { field: 'company', headerName: 'Company', width: 150 },
    { field: 'sector', headerName: 'Sector', width: 150 },
    { field: 'investment', headerName: 'Investment Level', width: 180 },
  ];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Portfolio Table</h2>

      {/* Material-UI Table */}
      <div>
        <h3>Material-UI Table</h3>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={data} columns={muiColumns} pageSize={5} disableSelectionOnClick />
        </div>
      </div>
    </div>
  );
};

export default PortfolioTable;
