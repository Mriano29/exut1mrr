import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import { IconButton } from '@mui/material'; '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Noticia({title, date,likes,avatarUrl,avatarAlt, bgUrl,bgAlt, message}){
    const[data, setData] = useState({like: false, likes:likes});
    const handleLike= (e) =>{
        setData({
            ...data,
            like: !data.like
        })
      };
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        const handleCloseWhatsApp = () => {
            setOpen(false);
            console.log("Enviando por Whatsapp...");
        };
        const handleCloseTelegram = () => {
            setOpen(false);
            console.log("Enviando por Telegram...");
        };
    return(
        <>
            <Card sx={{margin:2}}>
                <CardHeader
                    avatar={<Avatar src={avatarUrl} alt={avatarAlt}/>}
                    title={title}
                    subheader={date}
                    >
                        <MoreVertIcon/> 
                    </CardHeader>
                <CardMedia
                    component="img"
                    title='Noticia'
                    image={bgUrl}
                    alt={bgAlt}
                    height={194}
                />
                <CardContent>
                    {message}
                </CardContent>
                <CardActions>
                    <IconButton onClick={handleLike}>
                        <Typography>
                            {data.likes}
                        </Typography>
                        {data.like === true ? <FavoriteIcon color="success" /> : <FavoriteBorderIcon color="success"/>}
                    </IconButton>
                    <IconButton onClick={handleClickOpen} disabled={!data.like}>
                        <ShareIcon/>
                    </IconButton>
                    <Dialog open={open}  onClose={handleClose}  aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <DialogTitle>
                            {"Compartir"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                ¿A través de qué plataforma quieres compartir?
                              </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <IconButton onClick={handleCloseWhatsApp}>
                                <WhatsAppIcon/>
                            </IconButton>
                        <IconButton onClick={handleCloseTelegram}>
                            <TelegramIcon/>
                        </IconButton>
                        </DialogActions>
                    </Dialog>
                </CardActions>
            </Card>
        </>
    )
}