import React from 'react';
import { BodyContainer } from 'phenomic';

import Loading from '../Loading';

const MainBody = (props) => {
    const { isLoading, body } = props;
    const content = isLoading ? <Loading />
        : <BodyContainer>
            { body }
            </BodyContainer>;
    return (
        <div className="col-xs-12" style={{ padding: '0px' }}>
          {content}
        </div>
    );
};

export default MainBody;
