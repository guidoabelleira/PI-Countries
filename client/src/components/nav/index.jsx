import {Link} from 'react-router-dom';
export default function Nav() {
    return <div>
        <Link to="/home">
            <div>Home</div>
        </Link>
        <Link to="/activity">
            <div>Activity</div>
        </Link>
        <Link to="/about">
            <div>About</div>
        </Link>
    </div>
};