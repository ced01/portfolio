import React, { Fragment } from 'react';
import { Row, Col, Container, Carousel, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';
import "./skills.css";

import dataDrivenLogo from "../../assets/pictures/exp/af-klm.png";
import airFranceKlmLogo from "../../assets/pictures/exp/dataDriven.png";
import beepeersLogo from "../../assets/pictures/exp/beepeers.png";
import qenviLogo from "../../assets/pictures/exp/qenvi_robotics_logo.png";


function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <span
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'} >
                {children}
            </Typography>
          </Box>
        )}
      </span>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop:'3%',
    },
    rootlist: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

function Skills () {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Container fluid className="content">
        <Row>
            <Col>
                <Typography variant="h5">Compétences</Typography>
            </Col>
        </Row>
        <Row>
            <Col md="6" sm="12" className={classes.root} >
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs"
                    >
                    <Tab label="Data Driven France" {...a11yProps(0)} />
                    <Tab label="Air France / KLM" {...a11yProps(1)} />
                    <Tab label="Beepeers" {...a11yProps(2)} />
                    <Tab label="Qenvi" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} className="description">
                    <b>Juin 2019 à Décembre 2020</b><br/><br/>
                    J’ai apporté mes compétences en <b>JavaScript</b> pour aider au développement d’une jeune pousse dans 
                    le domaine du recrutement sur internet. L’équipe à grandit au fur à mesure jusqu’à atteindre 5 
                    personnes, le CIO, 2 commerciaux, un stagiaire et moi. L’objectif étant d’évaluer la performance des 
                    différentes plateformes de recrutement et de réattribuer le trafic. J’ai développé une solution 
                    permettant de générer et manager les scripts de collecte de données en JavaScript, développé la 
                    version béta du Dashboard de visualisation de données et statistiques avec <b>Chart.js</b> et développé la 
                    partie serveur avec <b>express/NodeJS</b>. Afin que la collecte soit exhaustive, nous avons testé le script 
                    sur les navigateurs de différents OS. Dans ce cadre j’ai managé un stagiaire qui nous à aidé
                    générer un grand nombre de scripts pour les différentes plateformes de support emploi. J’ai aussi développé des <b>batch </b>  
                    sur le server <b>Node.js/SQL</b> lancés depuis forever pour traiter les données à fournir au Dashboard et réalisés 
                    les appels aux API tierces pour les données manquantes. <br/><br/> 
                    <List className={classes.rootlist}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <Fragment>
                                    <WorkIcon />
                                </Fragment>
                            </Avatar>
                            </ListItemAvatar>
                            <a href="https://data-driven-hr.fr/" target="_blank" rel="noreferrer" ><ListItemText primary="Data Driven France"/></a>
                        </ListItem>
                    </List>
                </TabPanel>
                <TabPanel value={value} index={1} className="description"> 
                    <b>Avril 2018 à Avril 2019</b><br/><br/>
                    J’ai rejoint une équipe de 7 personnes dans le département cargo pour participer à l’implémentation 
                        d’applications <b>B2B</b> dans un context <b>SAFe (agile)</b> et anglophone. Les sociétés clientes d’Air France 
                        récupéraient leur colis via un processus trop couteux en documents. L’employé Air France via une 
                        application de régulation peut manager le statut des clients et ceux-ci peuvent accéder à l’information 
                        à travers les écrans mis à leur disposition. Air France souhaitait mettre en place le <b>BDD</b> dans les 
                        cycles de développement. J’ai effectué des déplacements à Paris et Amsterdam pour participer à la 
                        rédaction et des nouvelles fonctionnalités/features dans le respect de la méthode agile. Les équipes 
                        du Cargo s’échangeaient des messages SOAP et nous avions une application <b>Java REST (Spring4) </b> 
                        requêtée par l’application <b>Angular5</b>. J’ai implémenté des fonctionnalités front-end, configuré 
                        l’environnement de test BDD pour l’intégration continue <b>(bamboo, JIRA/XRAY)</b>, Implémentation des 
                        nouveaux tests BDD et apporter mon support à la <b>rédaction des User Stories</b>.
                    
                </TabPanel>
                <TabPanel value={value} index={2} className="description">
                    <b>Décembre 2017 à Mars 2018</b><br/><br/>
                    Beepeers est une start-up dans le domaine de l’évènementiel qui produit des applications 
éphémères pour des festivals. Les applications sont issues d’un Framework en <b>Reactjs</b> propre à 
beepeers qui permet de les générer rapidement. J’ai Implémenté des <b>composants réutilisables</b> pour le 
Framework, une page <b>responsive pour eFanzone</b> de l’application dédiée au printemps du violon et la 
maintenance des différentes applications les plages electroniques, le cabaret aléatoire
                    <br/><br/>
                    <List className={classes.rootlist}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <Fragment>
                                    <WorkIcon />
                                </Fragment>
                            </Avatar>
                            </ListItemAvatar>
                            <a href="http://efanzone.beepeers.com/" target="_blank" rel="noreferrer"><ListItemText primary="Efanzone "/></a>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <a href="https://www.cabaret-aleatoire.com/" target="_blank" rel="noreferrer" ><ListItemText primary="Cabaret aléatoire" /></a>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <a href="https://www.plages-electroniques.com/"target="_blank" rel="noreferrer"><ListItemText primary="Plages électronique" /></a>
                        </ListItem>
                        </List> 
                </TabPanel>
                <TabPanel value={value} index={3} className="description">
                    Qenvi est la société de conseil qui m'a permis d'avoir les expériences au sein de 
                    beepeers et d'Air France. Elle m'a guidée lors des différents challenges.
                </TabPanel>
            </Col>
            <Col md="6" sm="12">
                <Carousel className="carousel-size" controls={false}>
                    <Carousel.Item className="carrousel-item">
                        <Image 
                            className="d-block w-100 size" 
                            src={dataDrivenLogo} 
                            alt="dataDrivenLogo" 
                            rounded 
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carrousel-item">
                        <Image 
                            className="d-block w-100 size" 
                            src={airFranceKlmLogo}
                            alt="airFranceKlmLogo"
                            rounded 
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carrousel-item">
                        <Image 
                            className="d-block w-100 size" 
                            src={beepeersLogo}
                            alt="beepeersLogo"
                            rounded 
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carrousel-item">
                        <Image 
                            className="d-block w-100 size" 
                            src={qenviLogo}
                            alt="qenviLogo"
                            rounded 
                        />
                    </Carousel.Item>
                </Carousel>
             </Col>
        </Row>
    </Container>
  );
}

export default Skills;