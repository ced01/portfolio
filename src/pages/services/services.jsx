import { Container, Image, Row, Col } from 'react-bootstrap';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';

import contactPicture from "../../assets/pictures/others/web-technology-3.png";
import "./services.css";


const data = {
    labels: ['Hey', 'I', 'am', 'an', 'example', '!'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: '#0541A4',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: '# of No Votes',
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
};

const doughnutData = {
    labels: ['I', 'AM', 'A', 'DOUGHNUT', 'EXAMPLE', '!'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
};

const options = {
    scales: {
        yAxes: [
        {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
        },
        {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
            drawOnArea: false,
            },
        },
        ],
    }
};

const dataBar = {
    labels: ['I', 'AM', 'A', 'BAR CHART', 'EXAMPLE', '!'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const optionsBar = {
    plugins: {
        legend: {
          display: false,
        },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    }
  };



function Services () {
   
  return (
    <Container fluid className="content">
        <Row>
            <Col>
                <Typography className="sub-title" variant="h5">
                  Analyse statistiques de vos données / Mise en forme graphique
                </Typography>
                <Typography className="sub-title" variant="subtitle1"> Design, maintenance, besoins informatique... </Typography>
            </Col>
        </Row>
        <Row>
            <Col md="8" sm="8" className="col-first-graph-container">
                <Image src={contactPicture} className="picture-code" rounded />
                <Line data={data} options={options} className="first-graph-example"/>
            </Col>
            <Col md="4" sm="4" className="col-doughnut-container">
                <Row>
                    <Doughnut data={doughnutData} className="doughnut"/>
                </Row>
                <Row>
                    <Bar data={dataBar} options={optionsBar} className="barchart" />
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default Services;