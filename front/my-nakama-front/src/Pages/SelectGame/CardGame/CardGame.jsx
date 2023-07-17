import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Button, Modal } from '@mui/material'
import image from '../../../assets/download.jpeg'
import { Link } from 'react-router-dom'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function CardGame({ game }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Card
      sx={{
        width: '300px',
        height: '400px',
        backgroundColor: '#00BFA5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 25px',
        margin: '5px',
        border: '1px solid',
      }}
    >
      <Link to={`/dashboard/game/${game.game_title}`}>
        <CardHeader
          sx={{
            width: '88%',
            height: '60px',
            textAlign: 'center',
          }}
          title={game.game_title.toUpperCase()}
        />
      </Link>

      <Typography sx={{ textAlign: 'center', marginBottom: '30px' }}>
        {' '}
        {game.game_controll_age}
      </Typography>
      <CardMedia component="img" height="180vh" image={image} />
      <Box>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#FF5100' }}
          onClick={handleOpen}
          sx={{
            marginTop: '15px',
            marginBottom: '5px',
          }}
        >
          Description
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography paragraph>{game.game_description}</Typography>
          </Box>
        </Modal>
      </Box>
    </Card>
  )
}
