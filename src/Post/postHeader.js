import React, { PropTypes } from 'react';
import styles from './index.css';

const PostHeader = (props) => {
    return (
        <div className="col-xs-12 center-xs">
            <header className={'row col-xs-12 ' + styles.header }>
                <div className="col-xs-12">
                    {
                        props.pageDate &&
                        <time key={ props.pageDate.toISOString() }>
                        { props.pageDate.toDateString() }
                        </time>
                    }
                </div>

                <div className={'col-xs-12 ' + styles.alignCenterText}>
                    Tags: { props.tags }
                </div>
            </header>
        </div>
    );
};

PostHeader.propTypes = {
    pageDate: PropTypes.object.isRequired,
    tags: PropTypes.string.isRequired
};

export default PostHeader;
