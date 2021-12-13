import React from 'react';
import HooksUseMemo from './components/HooksUseMemo';
import HooksUseCallback from './components/HooksUseCallback';
import HooksUseLayoutEffect from './components/HooksUseLayoutEffect';
import HooksUseLayoutEffectExample from './components/HooksUseLayoutEffectExample';
import CustomHooks from './components/CustomHooks';

const ReactMemoExample = () => {
  return (
    <div>
      {/* <HooksUseMemo /> */}
      {/* <HooksUseCallback /> */}
      <div className="row">
        <div className="col-6">
          <HooksUseLayoutEffect />
        </div>
        <div className="col-6">
          <HooksUseLayoutEffect isLayoutEffect />
        </div>
      </div>
      {/* <HooksUseLayoutEffectExample /> */}
      {/* <CustomHooks /> */}
    </div>
  );
};

export default ReactMemoExample;
