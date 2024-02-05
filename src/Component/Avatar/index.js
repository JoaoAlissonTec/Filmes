import styles from './index.module.css'
import {MdPerson} from 'react-icons/md'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Avatar({name, img, dynamicClass}){

  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      {name}
    </Tooltip>
  )

  return(
    <div className={styles.info}>
      <OverlayTrigger placement='top' delay={{show:100, hide:0}} overlay={renderTooltip}>
        <div className={`${styles.avatar} ${styles[dynamicClass]}`}>
          {img != null ? <img src={"https://image.tmdb.org/t/p/w100_and_h100_face"+img} alt={name}/>:<MdPerson/>}
        </div>
      </OverlayTrigger>
    </div>
  )
}