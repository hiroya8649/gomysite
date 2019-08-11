import React, { Component } from 'react';
import _CSS from './resume.scss';

export default class Resume extends Component {
  render() {
    return <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 name-container">
            <p className="name">TSUHAO CHANG</p>
          </div>
          <div className="col-sm-7">
            <div className="birthday">&#x1F382; 1997-04-09 (22)</div>
            <div className="phone">&#x1F4F1; 0987-041-849</div>
            <div className="email">&#x2709; 1loya4wk@gmail.com</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="title">Profile</div>
            <div className="desc">My name is Roy, was born and now living in Taiwan. I just finished my studying in National Taiwan University of Science and Technology (台灣科技大學) as a Bachelor. Had lived in Japan for half a year and worked as a part time web engineer when I study in Shibaura Institute of Technology (芝浦工業大学) there as an exchange student. Now I decide to continue my studying from next year. Before that, I would like to find some place to learn about GO, AWS, GCP and other knowledge to improve my skills.</div>
            <div className="title">Experience</div>
            <div className="subtitle">Backend & Frontend Developer (Part Time)</div>
            <div className="desc">ACCESS CO. LTD. (in Tokyo)</div>
            <div className="explain">2019.04 - 2019.07</div>
            <div className="subtitle">Backend & Frontend Developer (Intern)</div>
            <div className="desc">ACCESS CO. LTD. (in Taipei)</div>
            <div className="explain">2018.10 - 2019.02</div>
            <div className="subtitle">QA Engineer (Intern)</div>
            <div className="desc">Umbo Computer Vision Inc.</div>
            <div className="explain">2018.06 - 2019.08</div>
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
            <div className="desc">Deployed on Heroku.</div>
            <div className="desc">The format and design are all made by myself.</div>
            <div className="desc">Repository is <a href="https://github.com/hiroya8649/gomysite">here</a>.</div>
          </div>
          <div className="col-sm-4 skill-list">
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