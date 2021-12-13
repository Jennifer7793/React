import React, { useRef, useCallback, useEffect } from 'react';
import { css } from '@emotion/css';

const style = css`
  position: relative;
  .memo-btn__redner-tip {
    left: 0;
    top: 0;
    padding: 2px;
    background-color: #e67e22;
    border: 4px solid #d35400;
    height: 100%;
    color: white;
    display: inline-block;
    vertical-align: middle;
    font-size: 24px;
    font-weight: bold;
    margin-right: 5px;
    border-radius: 4px;
    padding: 4px 10px;
    &.style-animate {
      animation: bounceKeyFrames 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
  @keyframes bounceKeyFrames {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const MemoButton = (props) => {
  const { children, onClick, className } = props;

  const refCount = useRef(0);
  const refMemoTipEl = useRef(null);
  useEffect(() => {
    refCount.current += 1;
    const { current } = refMemoTipEl;
    if (current) {
      current.classList.remove('style-animate');
      current.classList.add('style-animate');
    }
  });
  const atAnimationEnd = useCallback(() => {
    refMemoTipEl.current.classList.remove('style-animate');
  }, []);
  return (
    <div className={style}>
      <span className="memo-btn__redner-tip" onAnimationEnd={atAnimationEnd} ref={refMemoTipEl}>
        {refCount.current}
      </span>
      <button className={`my-btn ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default React.memo(MemoButton);
