import { useEffect, useState } from "react";

function Counter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16); // تحديث كل 16ms (حوالي 60fps)

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  return (

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">
            +<Counter target={500} duration={2000} />
          </div>
          <div className="text-gray-600 dark:text-gray-400">كورس</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">
            +<Counter target={1000} duration={2000} /><span className="text-2xl">k</span>
          </div>
          <div className="text-gray-600 dark:text-gray-400">طالب</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">
            +<Counter target={50} duration={2000} />
          </div>
          <div className="text-gray-600 dark:text-gray-400">مسار تعليمي</div>
        </div>
      </div>
  );
}
