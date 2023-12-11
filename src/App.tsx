import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import './App.css'
import BiologicalSection from './pages/BiologicalSection'

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Biological data
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <BiologicalSection />
    </>
  )
}

export default App
