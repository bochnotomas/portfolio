import React, { useEffect } from 'react';
import styles from './MyProjects.module.css';
import img from '../../images/cryptozoid_clay.svg';
import cryptozoid from '../../images/cryptozoid_clay.svg';
import salezilla from '../../images/salezilla.svg';
import weatherio from '../../images/weatherio_clay.svg';
import todoloui from '../../images/todoloui_clay.svg';
import hackaton from '../../images/hackaton_clay.svg';
import game from '../../images/game.svg';
import bot from '../../images/chatbot.svg';
import cal from '../../images/calculator.svg';
import domestic from '../../images/domestic.svg';
import aardwark from '../../images/aardwark.svg';
import eurowag from '../../images/eurowag.svg';
import swissre from '../../images/swissre.svg';
import elcom from '../../images/elcom.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function MyProjects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div data-aos='fade-up' className={styles.title}>
        <h1>Industrial Projects</h1>
      </div>

      <div data-aos='fade-up' className={styles.project}>
        <div className={styles.col_2}>
          <h2>Aardwark</h2>
          <p>
            I have been employed by this company which provided mentorship in my
            early development career and outsourced me to companies such as
            EUROWAG or Swiss Re.
          </p>
        </div>
        <div className={styles.col_1} id={styles.company}>
          <img src={aardwark} alt='' />
        </div>
      </div>

      <div data-aos='fade-up' className={styles.project}>
        <div className={styles.col_1} id={styles.company}>
          <img src={eurowag} alt='' />
        </div>
        <div className={styles.col_2}>
          <h2>EUROWAG</h2>
          <p>
            Worked in a team build of senior developers, and testers in an agile
            environment. Day-to-day work involved sprint planning, daily
            stand-ups, sprint retrospectives, and refinements.
          </p>
          <p>
            My tech stack was: React, Redux, Typescript, and Git (BitBucket).
          </p>
        </div>
      </div>

      <div data-aos='fade-up' className={styles.project}>
        <div className={styles.col_2}>
          <h2>Swiss Re</h2>
          <p>
            Worked in a team build of senior developers, designers, and testers
            with more than ten years of experience within a space. This position
            gave me a great starting point in my career along with plenty of
            knowledge and experience that I gained along the way. I worked in an
            agile environment, which involved sprint planning, daily stand-ups,
            sprint retrospectives, and refinements.
          </p>
          <p>
            My tech stack was: React with Material UI, Typescript, MobX React
            state management library, and Git (BitBucket).
          </p>
        </div>
        <div className={styles.col_1} id={styles.company}>
          <img src={swissre} alt='' />
        </div>
      </div>

      <div data-aos='fade-up' className={styles.project}>
        <div className={styles.col_1} id={styles.company}>
          <img src={elcom} alt='' />
        </div>
        <div className={styles.col_2}>
          <h2>ELCOM</h2>
          <p>
            Two-week Internship in a company as a Tester. I have tested an
            application, which was in a process of beta testing. A wonderful
            experience for me as I could have seen how Software is being
            developed and tested. I could have seen how it is to work with
            real-life software engineers and how it is to work in a software
            developing company overall.
          </p>
        </div>
      </div>

      <div data-aos='fade-up' className={styles.title}>
        <h1>Personal Projects</h1>
      </div>

      <div className={styles.project_container}>
        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_2}>
            <h2>Salezilla</h2>
            <p>
              An auction site where users can upload details of items they no
              longer want and sell them to other users. All the items for sale
              are stored in a database.
            </p>
            <p>Mongo DB, Node.js, Express.js, React with Router and Redux</p>
            <div className={styles.buttons}>
              <a href='https://github.com/bochnotomas/salezilla'>
                <button>Source code</button>
              </a>
              <a href='https://salezillamernapp.herokuapp.com/'>
                <button>Live preview</button>
              </a>
              <a href='https://www.linkedin.com/feed/update/urn:li:activity:6975981027949187073/'>
                <button>Article</button>
              </a>
            </div>
          </div>
          <div className={styles.col_1}>
            <img src={salezilla} alt='' />
          </div>
        </div>
        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_1}>
            <img src={cryptozoid} alt='' />
          </div>

          <div className={styles.col_2}>
            <h2>Cryptozoid</h2>
            <p>
              This was one of my first serious react projects, the
              cryptocurrency tracker. The main focus of this project was to
              apply all the learned stuff that I have gained from practising
              react and setting myself a challenge to build something that I am
              passionate about.
            </p>
            <p>React</p>
            <div className={styles.buttons}>
              <a href='https://github.com/bochnotomas/crypto_tracker'>
                <button>Source code</button>
              </a>
              <a href='https://bochnotomas.github.io/crypto_tracker/'>
                <button>Live preview</button>
              </a>
              <a href='https://www.linkedin.com/pulse/cryptocurrency-tracker-called-cryptozoid-tom%25C3%25A1%25C5%25A1-bochnovi%25C4%258D-1f/?trackingId=svresui2TMSq0uVGW2EESQ%3D%3D'>
                <button>Article</button>
              </a>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_2}>
            <h2>Weatherio</h2>
            <p>
              The weather dashboard. The main focus of this project was to learn
              how to handle asynchronous actions in my code with the use of
              asynchronous vanilla Javascript and APIs.
            </p>
            <p>JavaScript, WebPack</p>
            <div className={styles.buttons}>
              <a href='https://github.com/bochnotomas/weatherio'>
                <button>Source code</button>
              </a>
              <a href='https://www.linkedin.com/pulse/weatherio-tom%25C3%25A1%25C5%25A1-bochnovi%25C4%258D/?trackingId=f5wpv3NqSgKVHuqLzkfNQQ%3D%3D'>
                <button id={styles.article}>Article</button>
              </a>
            </div>
          </div>

          <div className={styles.col_1}>
            <img src={weatherio} alt='' />
          </div>
        </div>

        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_1}>
            <img src={todoloui} alt='' />
          </div>

          <div className={styles.col_2}>
            <h2>ToDoLoui</h2>
            <p>
              This is a to-do list app that lets you save your tasks on your
              local storage and separate them into Today's tasks and This week's
              tasks so you can stay organized during these busy days.
            </p>
            <p>JavaScript, WebPack</p>
            <div className={styles.buttons}>
              <a href='https://github.com/bochnotomas/todolist'>
                <button>Source code</button>
              </a>
              <a href='https://bochnotomas.github.io/todolist/'>
                <button>Live preview</button>
              </a>
              <a href='https://www.linkedin.com/pulse/todoloui-tom%C3%A1%C5%A1-bochnovi%C4%8D/'>
                <button>Article</button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_2}>
            <h2>2nd Prize on CovHack 2021</h2>
            <p>
              Me and a group of my friends joined the 2021 Coventry University
              Hackathon and we won the 2nd place. We created a project named
              parakeet-wp which allows users to keep all of their favourite
              wordpress pages in one place. I was mainly a designer since I was
              learning React at that time.
            </p>
            <p>React Native</p>
            <div className={styles.buttons}>
              <a href='https://github.com/Vendari/parakeet-wp'>
                <button>Source code</button>
              </a>
              <a href='https://www.linkedin.com/feed/update/urn:li:activity:6769343696287657984/'>
                <button id={styles.article}>Article</button>
              </a>
            </div>
          </div>

          <div className={styles.col_1}>
            <img src={hackaton} alt='' />
          </div>
        </div>
        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_1}>
            <img src={game} alt='' />
          </div>

          <div className={styles.col_2}>
            <h2>Multiplayer Rogue-like game</h2>
            <p>
              Last group project of my first year. We were supposed to make a
              game but we were not allowed to use graphics. It is inspired by
              first Doom and walls and everything is rendered with characters.
            </p>
            <p>C++</p>
            <div className={styles.buttons}>
              <a href='https://github.com/bochnotomas/multiplayer_roguelike'>
                <button>Source code</button>
              </a>
              <a href='https://www.youtube.com/watch?v=7IaDBKnWA7E'>
                <button>Live preview</button>
              </a>
              <a href='https://www.linkedin.com/pulse/multiplayer-rogue-like-tom%C3%A1%C5%A1-bochnovi%C4%8D/'>
                <button>Article</button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_2}>
            <h2>Sven the Chatbot</h2>
            <p>
              One of the first group projects at my university was a ChatBot. We
              decided to make a bot that simply acts as your companion
              throughout the game. My job was work with Database, little bit of
              webscraping and API creation in Django, Python.
            </p>
            <p>Python, Django</p>
            <div className={styles.buttons}>
              <a href='https://www.youtube.com/watch?v=YGjHxd8RXtc'>
                <button id={styles.live_preview}>Live preview</button>
              </a>
              <a href='https://www.linkedin.com/pulse/minecraft-chatbot-python-tom%C3%A1%C5%A1-bochnovi%C4%8D/'>
                <button id={styles.article}>Article</button>
              </a>
            </div>
          </div>
          <div className={styles.col_1}>
            <img src={bot} alt='' />
          </div>
        </div>
        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_1}>
            <img src={cal} alt='' />
          </div>

          <div className={styles.col_2}>
            <h2>Calculator</h2>
            <p>
              Personal calculator made as a result of refreshing my knowledge
              about JavaScript.
            </p>
            <p>JavaScript</p>
            <div className={styles.buttons}>
              <a href='https://github.com/bochnotomas/calculator'>
                <button>Source code</button>
              </a>
              <a href='https://bochnotomas.github.io/calculator/'>
                <button>Live preview</button>
              </a>
              <a href='https://www.linkedin.com/pulse/getting-started-tom%C3%A1%C5%A1-bochnovi%C4%8D/'>
                <button>Article</button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className={styles.project}>
          <div className={styles.col_2}>
            <h2>Domestic Repairs Website</h2>
            <p>
              I have been asked to develop a website for a company that
              specialises in the repair of domestic white goods such as washing
              machines and cookers. There was emphasis on back-end
              functionality, thus design is very simple.
            </p>
            <p>JavaScript, Node.js, Koa.js</p>
            <div className={styles.buttons}>
              <a href='https://github.com/bochnotomas/domestic_repairs'>
                <button>Source code</button>
              </a>
              <a href='https://www.youtube.com/watch?v=LNBXs-N-lRY'>
                <button>Live preview</button>
              </a>
            </div>
          </div>
          <div className={styles.col_1}>
            <img src={domestic} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
