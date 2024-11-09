import React from 'react';
import BasicTable from '../components/BasicTable';
import { useState } from 'react';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { Stack, Typography, useTheme } from '@mui/material';
import groupService from '../services/groupService';

function Group(props) {

  const theme = useTheme()
  const [columnTitle, setColumn] = useState(['MÃ NHÓM', 'TÊN NHÓM']);
  const [groupData, setGroupData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchGroupData = async () => {
    try {
      setLoading(true);
      setError(null);
      setTimeout(async () => {
        let response = await groupService.getAllGroup();
        setGroupData(response.data);
        setLoading(false)
      }, 1500);

    } catch (error) {
      setError('Không thể tải dữ liệu');
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchGroupData();
  }, [])

  return (
    <div>
      <Typography sx={{ width: '95%', margin: '10px auto', textTransform: "uppercase", fontWeight: 600, color: theme.palette.primary.main }} variant='h6'> Danh Sách Nhóm</Typography>

      {loading && <Stack
        sx={{ width: '95%', margin: '10px auto', flexDirection: 'row', alignItems: 'center', gap: '10px' }}
      >
        Đang tải dữ liệu nhóm<CircularProgress size={20} />
        {error && <p>{error}</p>}
      </Stack>}
      {!loading &&
        <BasicTable data={groupData} columnTitle={columnTitle} />
      }
    </div>
  );
}

export default Group;