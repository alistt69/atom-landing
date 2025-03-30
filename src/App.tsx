import classes from './classes.module.scss';
import Girl from './pages/intro-page/images/girl.svg';
import MaskGroup from './assets/mask_group.svg';
import Card from './assets/card.svg';
import Stats from './assets/stats.svg';

const App = () => {
  return (
    <>
        <div className={classes.first_section_container}>
            <img src={Girl} className={classes.girl}/>
            <img src={MaskGroup} className={classes.mask_group}/>
            <img src={Card} className={classes.card}/>
            <img src={Stats} className={classes.stats}/>
        </div>
        yeah im gonna take my horse
    </>
  )
}

export default App;
