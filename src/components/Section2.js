import React from 'react'
// import { Button } from 'react-bootstrap';

export default function Section2() {
    return (
        <div>
            <section class="section2">

                <div class="div-section2 div-color1">
                    <h3>For patients</h3>

                    <p>Find a doctor, book a visit and solve any health-related doubt</p>
                    <div class="liste-image">
                        <select class="domain-switcher">
                            <option>Choose country</option>
                            <option value="http://www.doctoraliar.com">Argentina</option>
                            <option value="http://www.doctoralia.com.au">Australia</option>
                            <option value="http://www.doctoralia.com.br">Brazil</option>
                            <option value="http://www.doctoralia.cl">Chile</option>
                            <option value="http://www.doctoralia.co">Colombia</option>
                            <option value="http://www.znamylekar.cz">Czech</option>
                            <option value="http://www.doctoralia-fr.com">France</option>
                            <option value="http://www.miodottore.it">Italy</option>
                            <option value="http://www.doctoralia.com.mx">Mexico</option>
                            <option value="http://www.doctoralia.pe">Peru</option>
                            <option value="http://www.znanylekarz.pl">Poland</option>
                            <option value="http://www.doctoralia.com.pt">Portugal</option>
                            <option value="http://www.doctoralia.es">Spain</option>
                            <option value="http://www.doktortakvimi.com">Turkey</option>
                            <option value="http://www.doctoralia.co.uk">UK</option>
                        </select>
                        <img src="https://www.docplanner.com/img/screen-marketplace@2x.png" />
                    </div>
                </div>

                <div class="div-section2 div-color2">
                    <h3>For doctor</h3>
                    <p>Save time managing visits and cut no-shows by half</p>
                    <div class="liste-image liste-image2">
                        <img src="https://www.docplanner.com/img/screen-saas@2x.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}
