import React, { Component } from 'react';
import _CSS from './resume.scss';

export default class Resume extends Component {
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="name">TSUHAO CHANG</div>
          <div className="phone">0987-041-849</div>
          <div className="email">1loya4wk@gmail.com</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
        </div>
        <div className="col-sm-4">
          <div className="title">Skills</div>
          <div>
            <div className="subtitle">Languages</div>
            <div className="skill">Chinese</div>
            <div className="explain">Native speaker</div>
            <div className="point">・・・・・・・・・・１０</div>
            <div className="skill">Japanese</div>
            <div className="explain">JLPT N1</div>
            <div className="point">・・・・・・・・・９</div>
            <div className="skill">English</div>
            <div className="explain">TOEIC 920</div>
            <div className="point">・・・・・・・７</div>
          </div>
          <div>
            <div className="subtitle">Knowledge</div>
            <div className="skill">Unix-like OS</div>
            <div className="explain">Familiar with Ubuntu, OSX</div>
            <div className="point">・・・・・・・・・９</div>
            <div className="skill">Backend Framework</div>
            <div className="explain">Laravel, Phoenix, Gin...</div>
            <div className="point">・・・・・・・・８</div>
            <div className="skill">Version Control System</div>
            <div className="explain">Github, Gitbucket</div>
            <div className="point">・・・・・・・・８</div>
            <div className="skill">Database (&Design)</div>
            <div className="explain">MySQL, PostgreSQL, MongoDB, PlantUML...</div>
            <div className="point">・・・・・・・・８</div>
            <div className="skill">Frontend Knowledge</div>
            <div className="explain">React, Redux, Webpack...</div>
            <div className="point">・・・・・・６</div>
          </div>
          <div>
            <div className="subtitle">Programming Languages</div>
            <div className="skill">Elixir</div>
            <div className="explain">Backend development in ACCESS CO. LTD. </div>
            <div className="point">・・・・・・・・８</div>
            <div className="skill">Python</div>
            <div className="explain">Experience in Keras, deep learning in school. </div>
            <div className="point">・・・・・・・・８</div>
            <div className="skill">Javascript</div>
            <div className="explain">Frontend development in ACCESS CO. LTD. </div>
            <div className="point">・・・・・・・７</div>
            <div className="skill">Java, PHP, C++, C#</div>
            <div className="explain">Basic level & experience in school. </div>
            <div className="point">・・・・・・６</div>
          </div>
        </div>
      </div >
    </div >;
  }
}