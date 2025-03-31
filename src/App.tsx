import classes from './classes.module.scss';
import Girl from './pages/intro-page/images/girl.svg';
import MaskGroup from './assets/mask_group.svg';
import MaskGroup2 from './assets/Mask_group_2.svg';
import Card from './assets/card.svg';
import Stats from './assets/stats.svg';
import BananaMan from './assets/bananaman.svg';
import Lights from './assets/lights.svg';
import Lights2 from './assets/lights_2.svg';
import Ellipse from './assets/ellipse.svg';
import Box from './assets/box.svg';
import Abstract from './assets/abstract.svg';
import Abstract2 from './assets/abstract2.svg';
import ServiceGirl from './assets/serviceGirl.svg'; // :D
import Logo from './assets/logo.svg';
import Stars from './assets/stars.svg';
import ModalGirl from './assets/modalGirl.svg'; // not modEl!
import ModalBg from './assets/modal.svg';
import { useState } from "react";

const App = () => {
    const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);

    return (
      <div className={classes.main_container}>
          <div className={`${classes.modal_window_wrap} ${isModalWindowOpen && classes.is_open}`} onClick={() => setIsModalWindowOpen(false)}>
              <div className={classes.modal_window_content}>
                  <img src={ModalGirl} className={classes.modalGirl}/>
                  <img src={ModalBg} className={classes.modal_bg}/>
              </div>
          </div>
          <header className={classes.header}>
          <div className={classes.header_content}>
                  <img src={Logo} className={classes.logo}/>
                  <nav className={classes.menu}>
                      <div className={classes.menu_item}>Главная</div>
                      <div className={classes.menu_item}>Процесс работы</div>
                      <div className={classes.menu_item}>Сравнение</div>
                      <div className={classes.menu_item}>Услуги</div>
                  </nav>
                  <button className={classes.special_button} onClick={() => setIsModalWindowOpen(prev => !prev)}>
                      <div className={classes.button_content}>Оставить заявку</div>
                      <img src={Stars} className={classes.stars} />
                  </button>
              </div>
          </header>
          <div className={classes.first_section_container}>
              <img src={Girl} className={classes.girl}/>
              <img src={MaskGroup} className={classes.mask_group}/>
              <img src={MaskGroup2} className={classes.mask_group_2}/>
              <img src={Card} className={classes.card}/>
              <img src={Stats} className={classes.stats}/>
              <img src={BananaMan} className={classes.bananaman}/>
              <img src={Lights} className={classes.lights}/>
          </div>

          <div className={classes.second_section_container}>
              <h1 className={classes.heading}>описание процесса работы</h1>
              <img src={Lights2} className={classes.lights_2}/>
              <img src={Ellipse} className={classes.ellipse_1}/>
              <img src={Ellipse} className={classes.ellipse_2}/>
              <img src={Box} className={classes.box}/>
              <div className={classes.process_cards_container}>
                  <div className={classes.process_card}/>
                  <div className={classes.process_card}/>
                  <div className={classes.process_card}/>
                  <div className={classes.process_card}/>
              </div>
          </div>

          <div className={classes.third_section_container}>
              <h1 className={classes.heading}>сравнение с настройкой и без</h1>
              <div className={classes.compare_container}>
                  <div className={classes.game_card}/>
                  <div className={classes.info}/>
              </div>
          </div>

          <div className={classes.fourth_section_container}>
              <h1 className={classes.heading}>услуги</h1>
              <div className={classes.services_container}>
                  <div className={classes.service}/>
                  <div className={classes.service}/>
                  <div className={classes.service}/>
              </div>
              <img src={Abstract} className={classes.abstract}/>
              <img src={Abstract2} className={classes.abstract_2}/>
              <img src={ServiceGirl} className={classes.service_girl}/>
          </div>
      </div>
    )
}

export default App;
