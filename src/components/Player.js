import { useEffect, useState } from "react";

export default function Player({ player, handleSelect }) {
  const { name, role, age, img } = player;

  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (player.quantity >= 1) {
      setBtnDisabled(true);
    }
  }, [player.quantity]);

  return (
    <div className="max-w-2xl mx-auto my-2">
      <div className="bg-slate-50 m-2 shadow-md rounded-md max-w-sm dark:bg-slate-700 ">
        <img className="w-fit rounded-t-md bg-zinc-700" src={img} alt={name} />
        <div className="px-4 py-3">
          <h2 className="text-slate-900 font-bold text-xl tracking-tight mb-1 dark:text-white">
            {name}
          </h2>
          <p className="text-md font-normal text-slate-700 dark:text-slate-400">
            <span className="font-semibold">Age:</span> {age}
          </p>
          <p className="text-md font-normal text-slate-700 mb-4 dark:text-slate-400">
            <span className="font-semibold">Role:</span> {role}
          </p>
          <button
            disabled={btnDisabled}
            onClick={() => handleSelect(player)}
            className={`w-full py-2 font-bold text-md text-center border-2 rounded-sm ${
              btnDisabled
                ? "text-gray-200 bg-gray-500 rounded focus:outline-none"
                : "text-slate-900 border-teal-600 hover:bg-teal-500 focus:ring-4 focus:ring-teal-300 dark:text-white dark:border-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            } `}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
