import './Experience.css';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QentelliLogo from '../assets/Qentelli.svg';
import AccentureLogo from '../assets/accenture_logo.jpg';
import PramatiLogo from '../assets/pramati_technologies_logo.jpg';


const logoData = [
    { name: 'Software Engineer - Product Engineering | Qentelli', icon: QentelliLogo ,text:'Developed interactive dashboards using React and Apache ECharts for enterprise applications. Improved data visualization and frontend performance as part of a cross-functional Agile team.'},
    { name: 'Application Development Analyst | Accenture', icon: AccentureLogo ,text:'Built user-focused admin and client modules using WaveMaker and JavaScript technologies.Implemented REST APIs, tested UI with Jest, and contributed to responsive, accessible UI designs.'},
    { name: 'Development Intern | Pramati', icon: PramatiLogo ,text:'Designed and developed a library management system using C#, MySQL, and HTML/CSS. Created a secure multi-level authentication dashboard and improved booking efficiency by 99%.'}
]
export default function Experience() {
  return (
      <section id="experience" className="page-section">
               <h3 className='section-title'>/Experience.</h3>
               <p className="section-subtext">Selected work I've taken in the past.</p>
                    <div className="card-grid">
                            {logoData.map((item, idx) => (
                <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="150"
                    image={item.icon}
                    alt={item.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.text}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
  ))}
</div>

    </section>
  );
}

