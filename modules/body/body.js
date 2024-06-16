import jquery from "jquery";
import { debounce } from 'lodash';
import './body.css';

jquery(() => {
    jquery('body').append(
        "<p>Dashboard data for the students</p>",
        "<button>Click here to get started</button>",
        "<p id='count'></p>",
    );

    let count = 0;
    function updateCounter() {
        count += 1;
        jquery('#count').text(` ${count} clicks on the button`);
    }

    jquery('button').on('click', debounce(updateCounter, 1000));
});
