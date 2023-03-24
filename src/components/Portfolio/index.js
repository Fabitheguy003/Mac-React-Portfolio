import React from 'react';
import FingerSpelling from '../../images/ASL Fingerspelling.png';
import SpaceTrek from '../../images/SpaceTrek.png';
import Quizsrl from '../../images/Quiz.png';
import NoteTaker from '../../images/notetaker.png';
import WorkDayPlanner from '../../images/WorkPlanner.png';
import MacTextEditor from '../../images/MacTextEditor.png';


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
                        src={WorkDayPlanner}
                        alt="Quizsrl"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">WorkDayPlanner</p>
                        <a href="https://github.com/Fabitheguy003/DailyplannerAc" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://fabitheguy003.github.io/DailyplannerAc/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={MacTextEditor}
                        alt="Quizsrl"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">MacTextEditor</p>
                        <a href="https://github.com/Fabitheguy003/-text--editor.mac" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://mactexteditor.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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