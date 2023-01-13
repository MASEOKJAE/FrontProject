// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';

export default function GradePage() {
    return(
        <>
        <Container>

            <Typography variant="h4" gutterBottom>
                컴퓨터 네트워크 1분반
            </Typography>
        </Container>
        <Card>
            <div class="event-year">
                <h2>토큰 들어갈 자리</h2>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar 
                        sx={{ width: 120, height: 120 }} 
                        src="https://assets.poap.xyz/ethrank-season-three-2023-logo-1672072413312.png" alt="ETHRank Season Three" />
                    
                    <Avatar 
                        sx={{ width: 120, height: 120 }} 
                        src="https://assets.poap.xyz/cryptoessay-2022-survivor-2022-logo-1672482556269.png" alt="cryptoEssay 2022 survivor" />

                    <Avatar 
                        sx={{ width: 120, height: 120 }} 
                        src="https://assets.poap.xyz/vi-a-argentina-ganar-el-mundial-qatar-2022-2022-logo-1671243171769.png" alt="Vi A Argentina Ganar El Mundial Qatar 2022" />
            
                </Stack>
            </div>
            
        </Card>
        </>
        
    );
}