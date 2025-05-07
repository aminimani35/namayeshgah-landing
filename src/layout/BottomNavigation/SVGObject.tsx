import React from 'react';
import GajMarketLogo from '../BottomNavigation/GajMarket';
import Gaj from "../BottomNavigation/Gaj"
import GajAzmon from "../BottomNavigation/GajAzmon"
import Gajino from "../BottomNavigation/Gajino"

interface SVGObjectProps {
    width?: string;
    height?: string;
    title: string;
    isActive: boolean;
}

const SVGObject: React.FC<SVGObjectProps> = ({  title, isActive  }) => {

    switch (title) {
        case 'gm':
            return (
                  <>
                  <GajMarketLogo isActive={isActive}/>
                  </>
            );
        case 'gj':
            return (
                  <Gaj isActive={isActive}/>
            );
        case 'az':
            return (
                  <GajAzmon isActive={isActive}/>
            );
        case 'gajino':
            return (
                  <Gajino isActive={isActive}/>
            );
        default:
            return null;
    }
};

export default SVGObject;
