import { Link } from 'react-router-dom';
import './offers.css';
import { Navbar } from './navbar';
const Offers =()=>{
    return(
        <div className="Offers">
            <Navbar />
            <br></br>
    <div className="cards">
        <div className="card1"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9" height="300" width="300"/>
            <center>
            <button className='btn'><Link to="/1">Redeem</Link></button>
            </center></div>

        <div className="card1"><img src="https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" height="300" width="300"/>
            <center><button className='btn'><Link to="/2">Redeem</Link></button>
            </center></div>

        <div className="card1"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStM3HLQyCkcRrXD8hGHmg62nWo4aE8vqBZY6ayWqBGR97-6jnX" height="300" width="300"/>
            <center><button className='btn'><Link to="/3">Redeem</Link></button>
            </center></div>
    </div>

    {/* <div class="cards">
        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023678/off2_rhorig.jpg" height="300" width="300"/> 
            <center><button className='btn'><Link to="/4">Redeem</Link></button>
            </center> </div>

        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023918/rsz_addchk99_q71szu.jpg" height="300" width="300"/> 
            <center><button className='btn'><Link to="/5">Redeem</Link></button>
            </center></div>

        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023918/VEGZINGER_yvdiw7.jpg" height="300" width="300"/>
            <center><button className='btn'><Link to="/6">Redeem</Link></button>
            </center></div>
    </div> */}
    </div>
    )
};
export default Offers;