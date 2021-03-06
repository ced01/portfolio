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
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginTop:'5%',
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
                <Typography variant="h5">Comp??tences</Typography>
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
                    aria-label="scrollable auto tabs example"
                    >
                    <Tab label="Data Driven France" {...a11yProps(0)} />
                    <Tab label="Air France / KLM" {...a11yProps(1)} />
                    <Tab label="Beepeers" {...a11yProps(2)} />
                    <Tab label="Qenvi" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} className="description">
                    <b>Juin 2019 ?? D??cembre 2020</b><br/><br/>
                    J???ai apport?? mes comp??tences en <b>JavaScript</b> pour aider au d??veloppement d???une jeune pousse dans 
                    le domaine du recrutement sur internet. L?????quipe ?? grandit au fur ?? mesure jusqu????? atteindre 5 
                    personnes, le CIO, 2 commerciaux, un stagiaire et moi. L???objectif ??tant d?????valuer la performance des 
                    diff??rentes plateformes de recrutement et de r??attribuer le trafic. J???ai d??velopp?? une solution 
                    permettant de g??n??rer et manager les scripts de collecte de donn??es en JavaScript, d??velopp?? la 
                    version b??ta du Dashboard de visualisation de donn??es et statistiques avec <b>Chart.js</b> et d??velopp?? la 
                    partie serveur avec <b>express/NodeJS</b>. Afin que la collecte soit exhaustive, nous avons test?? le script 
                    sur les navigateurs de diff??rents OS. Dans ce cadre j???ai manag?? un stagiaire qui nous ?? aid??
                    g??n??rer un grand nombre de scripts pour les diff??rentes plateformes de support emploi. J???ai aussi d??velopp?? des <b>batch </b>  
                    sur le server <b>Node.js/SQL</b> lanc??s depuis forever pour traiter les donn??es ?? fournir au Dashboard et r??alis??s 
                    les appels aux API tierces pour les donn??es manquantes. <br/><br/> 
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
                    <b>Avril 2018 ?? Avril 2019</b><br/><br/>
                    J???ai rejoint une ??quipe de 7 personnes dans le d??partement cargo pour participer ?? l???impl??mentation 
                        d???applications <b>B2B</b> dans un context <b>SAFe (agile)</b> et anglophone. Les soci??t??s clientes d???Air France 
                        r??cup??raient leur colis via un processus trop couteux en documents. L???employ?? Air France via une 
                        application de r??gulation peut manager le statut des clients et ceux-ci peuvent acc??der ?? l???information 
                        ?? travers les ??crans mis ?? leur disposition. Air France souhaitait mettre en place le <b>BDD</b> dans les 
                        cycles de d??veloppement. J???ai effectu?? des d??placements ?? Paris et Amsterdam pour participer ?? la 
                        r??daction et des nouvelles fonctionnalit??s/features dans le respect de la m??thode agile. Les ??quipes 
                        du Cargo s?????changeaient des messages SOAP et nous avions une application <b>Java REST (Spring4) </b> 
                        requ??t??e par l???application <b>Angular5</b>. J???ai impl??ment?? des fonctionnalit??s front-end, configur?? 
                        l???environnement de test BDD pour l???int??gration continue <b>(bamboo, JIRA/XRAY)</b>, Impl??mentation des 
                        nouveaux tests BDD et apporter mon support ?? la <b>r??daction des User Stories</b>.
                    
                </TabPanel>
                <TabPanel value={value} index={2} className="description">
                    <b>D??cembre 2017 ?? Mars 2018</b><br/><br/>
                    Beepeers est une start-up dans le domaine de l?????v??nementiel qui produit des applications 
??ph??m??res pour des festivals. Les applications sont issues d???un Framework en <b>Reactjs</b> propre ?? 
beepeers qui permet de les g??n??rer rapidement. J???ai Impl??ment?? des <b>composants r??utilisables</b> pour le 
Framework, une page <b>responsive pour eFanzone</b> de l???application d??di??e au printemps du violon et la 
maintenance des diff??rentes applications les plages electroniques, le cabaret al??atoire
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
                        <a href="https://www.cabaret-aleatoire.com/" target="_blank" rel="noreferrer" ><ListItemText primary="Cabaret al??atoire" /></a>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <a href="https://www.plages-electroniques.com/"target="_blank" rel="noreferrer"><ListItemText primary="Plages ??lectronique" /></a>
                        </ListItem>
                        </List> 
                </TabPanel>
                <TabPanel value={value} index={3} className="description">
                    Qenvi est la soci??t?? de conseil qui m'a permis d'avoir les exp??riences au sein de 
                    beepeers et d'Air France. Elle m'a guid??e lors des diff??rents challenges.
                </TabPanel>
            </Col>
            <Col md="6" sm="12">
            <Carousel className="carousel-size">
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