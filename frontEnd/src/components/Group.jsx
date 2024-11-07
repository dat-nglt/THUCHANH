import React from 'react';
import BasicTable from './BasicTable';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';

function Group(props) {

  const theme = useTheme()
  const [groupData, setGroupData] = useState([]);
  const [columnTitle, setColumn] = useState(['MÃ NHÓM', 'TÊN NHÓM']);
  const [error, setError] = useState();

  const fetchGroupData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/get-all-group');
      setGroupData(response.data.data)
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchGroupData();
  }, [])

  return (
    <div>
      <Typography sx={{ width: '95%', margin: '10px auto', textTransform: "uppercase", fontWeight: 600, color: theme.palette.primary.main }} variant='h6'> Danh Sách Nhóm</Typography>
      {!error && (
        <BasicTable data={groupData} columnTitle={columnTitle} />
      )}
    </div>
  );
}

export default Group;