import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profiledetail">Profile Detail</Link>
                </li>
                <li>
                    <Link to="/profileupdate">Profile Update</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
