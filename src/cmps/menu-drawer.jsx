import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { AppNav } from './app-nav';

export function MenuDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    return (
        <div className='flex'>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button className='header-menu-btn' onClick={toggleDrawer(anchor, true)}></button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <Box
                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 260 }}
                            role="presentation"
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <div className="drawer-content-wrapper">
                                <div className="drawer-content">
                                    <AppNav />
                                    <button className="contact-us-btn ">contact us</button>


                                </div>
                                    <div className="ornaments">
                                        <img className="ornament-circle" src="https://res.cloudinary.com/dqhfnvtca/image/upload/v1688646618/Combined_Shape_Copy_o2chxb.svg" alt="ornament" />
                                    </div>
                            </div>

                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}