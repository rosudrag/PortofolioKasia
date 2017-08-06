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
        <div>
          {content}
        </div>
    );
};

export default MainBody;
