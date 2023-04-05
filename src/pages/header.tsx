export default function Header() {
  return (
    <div className="w-full h-[80px] flex justify-center bg-main-color">
      <div className="w-[1000px] flex justify-between">
        <a className="text-5xl mt-[10px] font-bold text-header-color" href="#">
          PAPE HELTH
        </a>
        <div className="flex justify-end">
          <button className="text-sm bg-white	font-bold mr-[30px] mt-[17px] w-[46px] h-[46px] rounded-full">
            알림
          </button>

          <button className="text-sm bg-white	font-bold w-[46px] mt-[17px] h-[46px] rounded-full">
            메시지
          </button>
        </div>
      </div>
    </div>
  );
}