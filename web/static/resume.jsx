import React, { Component } from 'react';
import _CSS from './resume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Resume extends Component {
  render() {
    return <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 name-container">
            <p className="name">TSUHAO CHANG (張 祖浩)</p>
          </div>
          <div className="col-lg-7">
            <span className="fa-icon"><FontAwesomeIcon icon="birthday-cake" /></span> 1997-04-09 (Male)<div />
            <span className="fa-icon"><FontAwesomeIcon icon="phone" /></span> 0987-041-849<div />
            <span className="fa-icon"><FontAwesomeIcon icon="envelope" /></span> 1loya4wk@gmail.com
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="title">Profile</div>
            <div className="desc">我是張祖浩，生於台灣。2019/08於台灣科技大學資工系學士畢業。剛經歷過半年於日本芝浦工大的留學，同時於東京一家公司兼職Web開發工程師後，決定繼續回台攻讀碩士。在入學前，想先尋找約半年的實習機會，希望能主要學習AWS、GCP等雲端平台，以及Golang、Nodejs等技術充實自己。</div>
            <p />
            <div className="desc">My name is Roy, was born and now living in Taiwan. I just finished my studying in National Taiwan University of Science and Technology (台灣科技大學) as a Bachelor. Had lived in Japan for half a year and worked as a part time web engineer when I studied in Shibaura Institute of Technology (芝浦工業大学) as an exchange student. Now I decide to continue my studying from next year. Before that, I would like to find some place to learn mainly about AWS, GCP cloud platform, and others like Golang, Nodejs to improve my skills.</div>
            <div className="title">Experience</div>
            <div className="subtitle">Backend & Frontend Developer (Part Time)</div>
            <div className="desc">ACCESS CO. LTD. (in Tokyo)</div>
            <div className="explain">2019.04 - 2019.07</div>
            <div className="subtitle">Backend & Frontend Developer (Intern)</div>
            <div className="desc">ACCESS CO. LTD. (in Taipei)</div>
            <div className="explain">2018.10 - 2019.02</div>
            <div className="subtitle">QA Engineer (Intern)</div>
            <div className="desc">Umbo Computer Vision Inc.</div>
            <div className="explain">2018.06 - 2018.08</div>
            <div className="subtitle">Japanese Translator (Part Time)</div>
            <div className="desc">Taiwan G2 Corporation</div>
            <div className="explain">2017.07 - 2018.12</div>

            <div className="title">Education</div>
            <div className="subtitle">National Taiwan University of Science and Technology (台灣科技大學)</div>
            <div className="desc">Bachelor of Computer Science and Information Engineering</div>
            <div className="explain">2015.09 - 2019.08</div>
            <div className="subtitle">Shibaura Institute of Technology (日本芝浦工業大学)</div>
            <div className="desc">As an exchange student</div>
            <div className="explain">2019.04 - 2019.08</div>

            <div className="title">What are used in this resume</div>
            <div className="desc">Backend: Golang, Gin</div>
            <div className="desc">Frontend: React, Webpack, Scss, Bootstrap</div>
            <div className="desc">Deployed on <a href="https://hiroya-resume.herokuapp.com/">Heroku</a>.</div>
            <div className="desc">Github repository is <a href="https://github.com/hiroya8649/gomysite">here</a>.</div>
          </div>
          <div className="col-lg-4 skill-list">
            <div className="title">Skill</div>
            <div>
              <div className="subtitle">Language</div>
              <div className="skill">Chinese</div>
              <div className="explain">Native speaker</div>
              <div className="point">
                <div className="progress-bar" style={{ width: "100%" }}>１０</div>
              </div>
              <div className="skill">Japanese</div>
              <div className="explain">JLPT N1</div>
              <div className="point">
                <div className="progress-bar" style={{ width: "90%" }}>９</div>
              </div>
              <div className="skill">English</div>
              <div className="explain">TOEIC 920</div>
              <div className="point">
                <div className="progress-bar" style={{ width: "70%" }}>７</div>
              </div>
            </div>
            <div>
              <div className="subtitle">Knowledge</div>
              <div className="skill">Unix-like OS</div>
              <div className="explain">Familiar with Ubuntu, OSX</div>
              <div className="point">
                <div className="progress-bar" style={{ width: "90%" }}>９</div>
              </div>
              <div className="skill">Backend Development</div>
              <div className="explain">Laravel, Phoenix, Gin...</div>
              <div className="point">
                <div className="progress-bar" style={{ width: "80%" }}>８</div>
              </div>
              <div className="skill">Version Control System</div>
              <div className="explain">Github, Gitbucket</div>
              <div className="point">
                <div className="progress-bar" style={{ width: "80%" }}>８</div>
              </div>
              <div className="skill">Database (&Design)</div>
              <div className="explain">MySQL, PostgreSQL, MongoDB, PlantUML...</div>
              <div className="point">
                <div className="progress-bar" style={{ width: "80%" }}>８</div>
              </div>
              <div className="skill">Frontend Development</div>
              <div className="explain">React, Redux, Webpack...</div>
              <div className="point">
                <div className="progress-bar" style={{ width: "60%" }}>６</div>
              </div>
            </div>
            <div>
              <div className="subtitle">Programming Language</div>
              <div className="skill">Elixir</div>
              <div className="explain">Backend development in ACCESS CO. LTD. </div>
              <div className="point">
                <div className="progress-bar" style={{ width: "80%" }}>８</div>
              </div>
              <div className="skill">Python</div>
              <div className="explain">Experience in Keras, deep learning in school. </div>
              <div className="point">
                <div className="progress-bar" style={{ width: "80%" }}>８</div>
              </div>
              <div className="skill">Javascript</div>
              <div className="explain">Frontend development in ACCESS CO. LTD. </div>
              <div className="point">
                <div className="progress-bar" style={{ width: "70%" }}>７</div>
              </div>
              <div className="skill">Java, PHP, C++, C#</div>
              <div className="explain">Basic level & experience in school. </div>
              <div className="point">
                <div className="progress-bar" style={{ width: "60%" }}>６</div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div>;
  }
}