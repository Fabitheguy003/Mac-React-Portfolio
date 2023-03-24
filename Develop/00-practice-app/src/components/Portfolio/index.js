import React from 'react';
import FingerSpelling from '../../assets/images/ASL Fingerspelling Game - Cent Browser 2023-03-06 11_09_12 AM.png';
import SpaceTrek from '../../assets/images/ST-01-landing.png';
import Quizsrl from '../../assets/images/Quiz and 4 more pages - Personal - Microsoft​ Edge 2023-03-23 6_19_21 PM.png';
import NoteTaker from '../../assets/images/Quiz and 4 more pages - Personal - Microsoft​ Edge 2023-03-23 6_22_08 PM.png';


function Portfolio() {
    return (
        <section className="portfolio">
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
            <div class="col">
                <div class="card">
                    <img
                        src={FingerSpelling}
                        alt="FingerSpelling"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">FingerSpelling</p>
                        <a href="https://github.com/johnxlai/asl-fingerspelling-game" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://asl-fingerspelling-game.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={SpaceTrek}
                        alt="SpaceTrek"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">SpaceTrek</p>
                        <a href="https://github.com/Fabitheguy003/Space-Trek.srl" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://scorpionfiko.github.io/UTOR-PROJ01-TEAM12-Space-Trek/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={Quizsrl}
                        alt="Quizsrl"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Quizsrl</p>
                        <a href="https://github.com/Fabitheguy003/srl.quiz" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://fabitheguy003.github.io/srl.quiz/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={NoteTaker}
                        alt="NoteTaker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">NoteTaker</p>
                        <a href="https://github.com/Fabitheguy003/notering-taker-agenda" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://notering-taker-agenda.herokuapp.com//" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Portfolio;