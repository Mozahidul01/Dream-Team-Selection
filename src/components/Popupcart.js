import { Users, X } from "react-feather";
import CartContainer from "./CartContainer";

const PopupCart = ({ isOpen, cartToggle, selectedPlayer }) => {
  return (
    <div>
      {isOpen && (
        <div
          className={`fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-800 p-4 shadow-md rounded-md z-10 w-3/4 max-w-[720px] max-h-[80vh] bg-slate-50 text-black dark:bg-slate-700 dark:text-white ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Player Selected: {selectedPlayer.length}
            </p>
            <button
              onClick={() => cartToggle()}
              className="p-2 self-end rounded-full hover:bg-slate-800"
            >
              <X />
            </button>
          </div>

          <div className="py-2">
            {selectedPlayer.map((player) => (
              <CartContainer key={player.id} player={player} />
            ))}
          </div>

          <button className="w-full py-2 text-slate-900 font-bold text-md text-center border-2 rounded-sm border-teal-600 hover:bg-teal-500 focus:ring-4 focus:ring-teal-300 dark:text-white dark:border-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
            Select Playing XI
          </button>
        </div>
      )}
      <button
        onClick={() => cartToggle()}
        className="fixed flex items-center justify-center bottom-0 right-0 shadow-md w-14 h-14 mr-4 mb-4 rounded-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-700 dark:text-white dark:hover:bg-teal-800"
      >
        {isOpen ? <X /> : <Users />}
      </button>
    </div>
  );
};

export default PopupCart;
