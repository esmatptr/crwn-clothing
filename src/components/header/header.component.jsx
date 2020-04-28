import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

// Utils
import { auth } from '../../firebase/firebase.utils';

// Redux
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Styles
import './header.styles.scss';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionDiv,
    OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            !hidden ?
                <CartDropdown />
                : null
        }
    </HeaderContainer>

    // <div className='header'>
    //     <Link to="/">
    //         <Logo className='logo' />
    //     </Link>
    //     <div className='options'>
    //         <Link className='option' to="/shop">
    //             SHOP
    //          </Link>
    //         <Link className='option' to="/contact">
    //             CONTACT
    //          </Link>
    //         {
    //             currentUser ?
    //                 <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
    //                 :
    //                 <Link className='option' to='signin'>SIGN IN</Link>
    //         }
    //         <CartIcon />
    //     </div>
    //     {
    //         !hidden ?
    //             <CartDropdown />
    //             : null
    //     }
    // </div>
)

// const mapStateToProps = state => ({
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps, {})(Header);