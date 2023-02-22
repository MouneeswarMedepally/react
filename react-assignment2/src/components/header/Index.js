import react from 'react';
// import { ReactDOM } from 'react';
import HeaderLeft from './header-left';
import HeaderRight from './header-right';
import './header.css';
class HeaderComponent extends react.Component{
    render(){
        return(
            <header>
                <div className='header-div'>
                    <HeaderLeft />
                    <HeaderRight />
                </div>
            </header>
        )
    }
}

export default HeaderComponent;