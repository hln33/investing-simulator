import React from 'react';

import CompetitionSidebar from 'components/Competition/CompetitionSidebar';
import CompetitionStandings from 'components/Competition/CompetitionStandings';
import CompetitionGraph from 'components/Competition/CompetitionGraph';
import CompetitionInvite from 'components/Competition/CompeititonInvite';

import Card from 'components/PrimeReact/Card/Card';
import Toolbar from 'components/PrimeReact/Toolbar/Toolbar';

import './style.scss';
import Button from 'components/PrimeReact/Button/Button';

function Competition({ ...props }) {

    const leftToolbarContents = (
        <>
            <div className="mr-5 font-bold text-gray-700">Start Date: </div>
            <div className="mr-5 font-bold text-gray-700">End Date: </div>
            <div className="font-bold text-gray-700">Player Size: </div>
        </>
    );
    
    const rightToolbarContents = (
        <>
            <Button className="mr-2" label="Start Competition" icon="pi pi-arrow-circle-right" iconPos="right"/>
            <CompetitionInvite />
        </>
    );

    return (
        <Card className="competition-card mx-4">
            <div className="text-5xl font-bold text-gray-700 text-center">
                Competition Page
            </div>

            <Toolbar className="my-3 bg-gray-300" left={leftToolbarContents} right={rightToolbarContents} />

            <CompetitionSidebar />
            <CompetitionGraph />
            <CompetitionStandings />
        </Card>
    );
}

export default Competition