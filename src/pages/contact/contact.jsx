import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Divider from '@material-ui/core/Divider';

import "./contact.css";

import contactPicture from "../../assets/pictures/others/original.jpg";
import profilPicture from "../../assets/pictures/others/profil.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  rootContact: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop:'2%'
  },
}));

function Contact () {
  const classes = useStyles();
  return (
    <Container fluid className="content">
        <Image src={contactPicture} className="picture" rounded />
        <Row className="info">
          <Col md="4" sm="6">
            <Image src={profilPicture} className="profil" rounded />
          </Col>
          <Col md="8" sm="6">
            <List className={classes.root}>
            <Typography className="sub-title" variant="h6">Réseaux sociaux</Typography>
              <ListItem>
                <ListItemAvatar>
                <Avatar>
                  <MenuBookIcon />
                </Avatar>
                </ListItemAvatar>
                <a href="https://www.superprof.fr/decouverte-web-aide-langage-dynamique-javascript.html" target="_blank" rel="noreferrer"><ListItemText primary="Super prof"/></a>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                <Avatar>
                  <LanguageIcon />
                </Avatar>
                </ListItemAvatar>
                <a href="https://www.linkedin.com/in/c%C3%A9dric-lautard-9849b1a4/" target="_blank" rel="noreferrer" ><ListItemText primary="LinkedIn" /></a>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                <Avatar>
                  <LanguageIcon />
                </Avatar>
                </ListItemAvatar>
                  <a href="https://www.malt.fr/profile/cedriclautard"target="_blank" rel="noreferrer"><ListItemText primary="Malt" /></a>
              </ListItem>
            </List>
              <List className={classes.rootContact}>
              <Typography className="sub-title" variant="h6">Contact</Typography>
                <ListItem>
                  <ListItemAvatar>
                  <Avatar>
                    <PhoneIphoneIcon />
                  </Avatar>
                  </ListItemAvatar>
                  <a href="tel:+33643953809" ><ListItemText primary="(+33)643953809"/></a>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                  <Avatar>
                    <MailOutlineIcon />
                  </Avatar>
                  </ListItemAvatar>
                    <a href="mailto:cedlautard@gmail.com?subject=Votre demande: &body=Que puis je pour vous ?" ><ListItemText primary="cedlautard@gmail.com"/></a>
                </ListItem>
              </List>
          </Col>
        </Row>
    </Container>
  );
}

export default Contact;