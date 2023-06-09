import LogoutOutlined  from "@mui/icons-material/LogoutOutlined"
import MenuOutlined  from "@mui/icons-material/MenuOutlined"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({drawerWith = 240}) => {
  return (
    <AppBar position="fixed" sx={{
      width:{sm:`calc(100% - ${drawerWith}px)`},
      ml:{sm:`${drawerWith}px`}
    }}>
      <Toolbar>
        <IconButton
        color="inherit"
        edge="start"
        sx={{mr:2, display:{sm:"none"}}}>
          <MenuOutlined/>
        </IconButton>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">Journal App</Typography>
          <IconButton color="error">
            <LogoutOutlined/>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
