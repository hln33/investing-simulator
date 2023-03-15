import React from 'react';

import CompetitionSidebar from './CompetitionSidebar';
import CompetitionStandings from './CompetitionStandings';
import CompetitionGraph from './CompetitionGraph';
import CompetitionInvite from './CompeititonInvite';

function Competition(props) {
    
    return (
        <div>
            <h1>Competition Screen</h1>
            <CompetitionInvite />
            <CompetitionSidebar />
            <CompetitionGraph />
            <CompetitionStandings />
        </div>
    );
}

export default Competition