import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import TextField from '@mui/material/TextField'; // 導入文字區塊
import SearchIcon from '@mui/icons-material/Search'; // 搜索圖案
import Dramalist from './components/Dramalist';
import Classlist from './components/Classlist';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import './App.css' // 保留此 import
import AddDrama from './components/AddDrama';
import { Snackbar } from '@mui/material';


const queryClient = new QueryClient();
const pages = ['首頁', '電視劇', '類別'];
const settings = ['Login'];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <><AppBar position="static" sx={{backgroundColor: 'black',}}>
      <Container maxWidth="xl">
        <CssBaseline />
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            大小姐戲劇城
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* 搜索欄 */}
          <Box sx={{ flexGrow: 1, display: 'flex'}}>
              <TextField
                placeholder="今天想看些什麼......"
                fullWidth
                variant="outlined"
                sx={{
                  '& input': {
                    color: 'white', //文字白色
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton color="secondary" edge="end" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar alt="Remy Sharp" src="src\static\images\cards\1.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                setting === 'Login' ? (
                  <MenuItem key={setting} component="a" href="/login" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                )
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Box display="100%" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <AddDrama />
                        <Link to="/">電視劇</Link>
                        {' | '}
                        <Link to="/Classlist">類別</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Dramalist />} />
                        <Route path="Classlist" element={<Classlist />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </QueryClientProvider>
        

    </>
    
  );
}
export default App;