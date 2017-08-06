import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import styles from './index.css';


const PostHeader = (props) => {
    return (
        <div>
            <header className={ styles.header }>
                <Flex align='center' col={3} wrap={true} justify='center'>
                    <Box col={12} className={styles.alignCenterText}>
                        {
                            props.pageDate &&
                            <time key={ props.pageDate.toISOString() }>
                            { props.pageDate.toDateString() }
                            </time>
                        }
                    </Box>

                    <Box col={12} className={styles.alignCenterText}>
                        Tags: { props.tags }
                    </Box>
                </Flex>

            </header>
        </div>
    );
};

PostHeader.propTypes = {
    pageDate: PropTypes.object.isRequired,
    tags: PropTypes.string.isRequired
};

export default PostHeader;
