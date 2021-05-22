import * as styles from "../styles/PowerUpsTab.module.css"
import data from "../PowerUps.json";
import PowerUp from "./PowerUp";

export default function PowerUpsTab({onUpdate, clicks})
{       
    return(
        <div className={styles.tab}>
            {data.map((e, i) => <PowerUp key={i} name={e.name} desc={e.desc} price={e.price} multi={e.multi} photo={e.photo} canBuy={e.price <= clicks} onBuy={() => onUpdate( e.price, e.multi )}/>)}
        </div>
    )
}