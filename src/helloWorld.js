import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const HelloWorld = ({ flags }) => {
  console.log("flags?", flags["videoCap"], flags["verboseLog"], flags);
    return  ( <div>{JSON.stringify(flags)}</div> )

    //flags["videoCap"] ? <div>Flag on</div> : <div>Flag off</div>;
};

export default withLDConsumer()(HelloWorld);
