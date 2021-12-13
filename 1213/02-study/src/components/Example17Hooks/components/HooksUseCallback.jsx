import { useState, useCallback } from 'react';
import MemoButton from './MemoButton';

const HooksUseCallback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  /* const incrementCallback = () => {
    setCount(count + 1);
  };
  const incrementUseCallback1 = useCallback(() => {
    setCount(count + 1);
  }); // 這樣寫和上面的 incrementCallback 結果是一樣的
  const incrementUseCallback2 = useCallback(() => {
    setCount(count + 1);
  }, [count]); // 當 count 有變時，會回傳新的 function

  const incrementUseCallback3 = useCallback(() => {
    // wrong
    setCount(count + 1);
  }, []);

  const incrementUseCallback4 = useCallback(() => {
    // correct
    setCount((prev) => prev + 1);
  }, []); */

  return (
    <section data-name="HooksUseCallback">
      <h2>count:{count}</h2>
      <h2>count2:{count2}</h2>
      <MemoButton className="bg-warning" onClick={incrementCallback}>
        add
      </MemoButton>
      <MemoButton className="bg-warning" onClick={incrementUseCallback1}>
        addCallback1
      </MemoButton>
      <MemoButton className="bg-info" onClick={incrementUseCallback2}>
        addCallback2
      </MemoButton>
      <MemoButton className="bg-danger" onClick={incrementUseCallback3}>
        addCallback3
      </MemoButton>
      <MemoButton className="bg-success" onClick={incrementUseCallback4}>
        addCallback4
      </MemoButton>
      <button className="my-btn mt-2" onClick={() => setCount2(count2 + 1)}>
        setCount2
      </button>
    </section>
  );
};

export default HooksUseCallback;
