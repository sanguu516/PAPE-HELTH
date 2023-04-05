export default function Header() {
  return (
    <div className="bg-main-color w-full">
      <div className=" h-[80px] flex ml-[360px] ">
        <div className="w-[1200px] flex justify-between">
          <a
            className="text-5xl mt-[10px] font-bold text-header-color"
            href="#"
          >
            PAPE HELTH
          </a>
          <div className="flex justify-end ">
            <button className="text-sm bg-white	font-bold mr-[30px] mt-[17px] w-[46px] h-[46px] rounded-full">
              알림
            </button>

            <button className="text-sm bg-white	font-bold w-[46px] mt-[17px] h-[46px] rounded-full">
              메시지
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
