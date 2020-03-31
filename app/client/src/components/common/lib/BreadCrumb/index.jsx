
import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const getPath = (data) => {
    const { location: { pathname } } = data
    const { to_translate } = data,
            $t = to_translate()

    switch (true) {
        case _.includes(pathname, '/app'):
            return (<li className="is-active"> <Link to={'/app'}> {$t('modules.app')}  </Link> </li>)

        case _.includes(pathname, '/schedule'):
            return (<li className="is-active"> <Link to={'/schedule'}> {$t('modules.schedule')}  </Link> </li> )

        case _.includes(pathname, '/dashboard'):
            return (<li> <Link to={'/dashboard'}> {$t('modules.dashboard')}  </Link> </li>)

        case _.includes(pathname, '/freight'):
            return (<li className="is-active"> <Link to={'/freights'}>  {$t('modules.freight')}  </Link> </li>)

        case _.includes(pathname, '/ranking'):
            return (<li className="is-active"> <Link to={'/ranking'}> {$t('modules.ranking')}  </Link> </li>)

        case _.includes(pathname, '/sales'):
            return (<li className="is-active"> <Link to={'/sales'}> {$t('modules.billing')}  </Link> </li>)

        case _.includes(pathname, '/account'):
            return (<li className="is-active"> <Link to={'/sales'}> {$t('modules.account')}  </Link> </li>)

        case _.includes(pathname, '/employees/add'):
            return ([
                <li> <Link to={'/employees'}> {$t('modules.employees')}  </Link> </li>,
                <li className="is-active"> <Link to={'/employees/add'}> {$t('modules.employeesAdd')}  </Link> </li>
            ])

        case _.includes(pathname, '/employees/edit/'):
            return ([
                <li> <Link to={'/drivers'}> {$t('modules.employees')}  </Link> </li>,
                <li className="is-active"> <Link to={'/employees/add'}> {$t('modules.driversEdit')}  </Link> </li>
            ])
     
        case _.includes(pathname, '/drivers/edit/'):
            return ([
                <li> <Link to={'/drivers'}> {$t('modules.drivers')}  </Link> </li>,
                <li> <Link to={`/drivers/edit/${_.get(data, 'driver.one._id')}`}> {$t('modules.driversEdit')}  </Link> </li>,
                <li className="is-active"> <span class="tag is-light">{_.get(data, 'driver.one.name')} </span> </li>

            ])


               
        case _.includes(pathname, '/employees'):
            return (<li className="is-active"> <Link to={'/employees'}> {$t('modules.employees')}  </Link> </li>)
            
        case _.includes(pathname, '/drivers/add'):
            return ([
                <li> <Link to={'/drivers'}> {$t('modules.drivers')}  </Link> </li>,
                <li className="is-active"> <Link to={'/drivers/add'}> {$t('modules.driversAdd')}  </Link> </li>
            ])        
        case _.includes(pathname, '/drivers'):
            return (<li className="is-active"> <Link to={'/drivers'}> {$t('modules.drivers')} </Link> </li>)

            default:
            return (<li className="is-active"> <Link to={'/shipping'}> {$t('modules.shipping')}   </Link> </li>)

        }

}

const BreadCrumb = (props) => {
    return (
        <nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">SCiOSYS</a></li>
                { getPath(props) }
            </ul>
        </nav>

    )
}
export default BreadCrumb