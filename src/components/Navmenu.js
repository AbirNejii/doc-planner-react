import React from 'react';


function Navmenu(props) {
    return (
        <div class="bignavbar">
            <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1>" />

            <div class="smallnavbar">
                <ul class="firstul">
                    <li class="lienhover">
                        <a href="">About us</a>
                    </li>
                    <li class="lienhover">
                        <a href="">Career</a>
                    </li>
                    <li class="department lienhover">
                        Department
                        <ul class="dropdown">
                            <li>
                                Marketing and PR
                            </li>
                            <li>
                                Customer Success and sales
                            </li>
                            <li>
                                IT, Poduct,design and UX
                            </li>
                            <li>
                                Finance and administration
                            </li>
                            <li>
                                HR and More
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navmenu;