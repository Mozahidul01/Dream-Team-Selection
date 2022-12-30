import { Users, X } from "react-feather";

const PopupCart = ({ isOpen, cartToggle }) => {
  return (
    <div>
      {isOpen && (
        <div
          className={`fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2.5 mr-4 shadow-md rounded-md z-10 w-3/4 max-w-[720px] bg-slate-50 text-black dark:bg-slate-700 dark:text-white ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button
            onClick={() => cartToggle()}
            className="p-2 self-end rounded-full hover:bg-slate-800"
          >
            <X />
          </button>

          <div className="py-2">
            <li>list-item1</li>
            <li>list-item2</li>
            <li>list-item3</li>
            <li>list-item4</li>
            <li>list-item5</li>
            <li>list-item6</li>
            <li>list-item7</li>
            <li>list-item8</li>
            <li>list-item9</li>
            <li>list-item10</li>
            <li>list-item11</li>
            <li>list-item12</li>
            <li>list-item13</li>
            <li>list-item14</li>
            <li>list-item15</li>
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
