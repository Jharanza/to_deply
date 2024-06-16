import jquery from "jquery";
import './header.css';

jquery(() => {
    jquery('body').append(
        "<img id='logo'>",
        "<p>Holberton Dashboard</p>",
    );
});
