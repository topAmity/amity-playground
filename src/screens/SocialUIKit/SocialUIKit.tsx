// pages/Home.js
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './SocialUIKit.css'


import { useState } from "react";

import { AmityUiKitSocial, AmityUiKitProvider} from '@amityco/ui-kit'


const apiKey = "b0efe95a3288a36049318d18505c16888400d8e4e963697e";
const SocialUIKit = () => {
    const [userId, setUserId] = useState('Johny Storm');
    return (

        <Navbar>
            <div>
            <AmityUiKitProvider
                key={userId}
                apiKey={apiKey}
                apiRegion='eu'
                userId={userId}
                displayName={userId}
             
            >
                <AmityUiKitSocial />
            </AmityUiKitProvider>
            </div>
        </Navbar>

    );
};

export default SocialUIKit;
