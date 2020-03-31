import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { barChart } from 'react-icons-kit/feather/barChart'
import { ic_local_shipping } from 'react-icons-kit/md/ic_local_shipping'
import { paperPlane } from 'react-icons-kit/fa/paperPlane'
import { list } from 'react-icons-kit/feather/list'
import { money } from 'react-icons-kit/fa/money'
import { calculator } from 'react-icons-kit/fa/calculator'

const Menu = (props) => {
    return (
        
        <div>
            <div>
                <Link to={'/app'}>
                    <div className="column is-12 has-text-centered menu-item active" title={'Dashboard'} style={{ float: 'none' }}>
                            <Icon size={22} icon={barChart} />
                    </div>
                </Link>
                <Link to={'/freights'}>
                    <div className="column is-12 has-text-centered menu-item" title={'Meus Fretes'} style={{ float: 'none' }}>
                        <Icon size={22} icon={paperPlane} />
                    </div>
                </Link>
                <Link to={'/drivers'}>
                    <div className="column is-12 has-text-centered menu-item" title={'Meus Motoristas'} style={{ float: 'none' }}>
                        <Icon size={22} icon={ic_local_shipping} />
                    </div>
                </Link>
                <Link to={'/ranking'}>
                    <div className="column is-12 has-text-centered menu-item" title={'Ranking'} style={{ float: 'none' }}>
                        <Icon size={22} icon={list} />
                    </div>
                </Link>
                <Link to={'/sales'}>
                    <div className="column is-12 has-text-centered menu-item" title={'Faturamento'} style={{ float: 'none' }}>
                        <Icon size={22} icon={money} />
                    </div>
                </Link>
                <Link to={'/freight-sum'}>
                    <div className="column is-12 has-text-centered menu-item" title={'Cálculo Frete'} style={{ float: 'none' }}>
                        <Icon size={22} icon={calculator} />
                    </div>
                </Link>
             </div>
        </div>
    )
}

export default Menu
