import React from 'react';
import { Sparklines , SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function findAvgData(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines width={100} height={100} data={props.data} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type={'avg'} />
            </Sparklines>
            <div>{findAvgData(props.data)} {props.units}</div>
        </div>
    );
}
