import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import BarChartIcon from '@mui/icons-material/BarChart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloudIcon from '@mui/icons-material/Cloud';
import MeassageIcon from '@mui/icons-material/Message';
import CancelIcon from '@mui/icons-material/Cancel';

const iconSize = 30;

const applications = [
	{
		color: '#00C853',
		headline: 'Application 1',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <BuildIcon style={{ fontSize: iconSize }} />,
		mdDelay: '0',
		smDelay: '0',
	},
	{
		color: '#6200EA',
		headline: 'Application 2',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
		mdDelay: '200',
		smDelay: '200',
	},
	{
		color: '#0091EA',
		headline: 'Application 3',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <MeassageIcon style={{ fontSize: iconSize }} />,
		mdDelay: '400',
		smDelay: '0',
	},
	{
		color: '#d50000',
		headline: 'Application 4',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <ComputerIcon style={{ fontSize: iconSize }} />,
		mdDelay: '0',
		smDelay: '200',
	},
	{
		color: '#DD2C00',
		headline: 'Application 5',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <BarChartIcon style={{ fontSize: iconSize }} />,
		mdDelay: '200',
		smDelay: '0',
	},
	{
		color: '#64DD17',
		headline: 'Application 6',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
		mdDelay: '400',
		smDelay: '200',
	},
	{
		color: '#304FFE',
		headline: 'Application 7',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <CloudIcon style={{ fontSize: iconSize }} />,
		mdDelay: '0',
		smDelay: '0',
	},
	{
		color: '#C51162',
		headline: 'Application 8',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <CodeIcon style={{ fontSize: iconSize }} />,
		mdDelay: '200',
		smDelay: '200',
	},
	{
		color: '#00B8D4',
		headline: 'Application 9',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
		icon: <CancelIcon style={{ fontSize: iconSize }} />,
		mdDelay: '400',
		smDelay: '0',
	},
];

export { applications };
