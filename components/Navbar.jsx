import Image from "next/image";
import React from "react";

const Navbar = () => {
  
  return (
    <div className="shadow">
      <div className="bg-[#ab1d1c]">
        <div className="w-full max-w-[1263px] mx-auto">
          <Image
            src={"/hero.webp"}
            height={60}
            width={1263}
            className=" object-contain cursor-pointer "
            alt="hero"
          />
        </div>
      </div>
      <div className="w-full max-w-[1263px] mx-auto h-[68px] flex items-center ">
        <Image
          src={"/fahasa-logo.webp"}
          width={216}
          height={38}
          className="object-contain cursor-pointer"
          alt="logo"
        />
        <div className="flex items-center w-[99px] justify-end ">
          <Image src={"/ico_menu.svg"} width={36} height={36} alt="icon-menu" />
          <Image
            src={"/icon_seemore_gray.svg"}
            width={16}
            height={16}
            alt="icon-menu"
          />
        </div>
        <div className="relative flex-1  px-2 ">
          <input
            type="text"
            placeholder="Manifest - 7 Bước Để Thay Đổi Cuộc Đời Bạn Mãi Mãi"
            className=" text-sm pl-[24px] border border-[#CDCFD0] h-10 rounded-lg w-full"
          />

          <button className="absolute right-1 mr-2 top-1/2 bottom-1/2 transform -translate-y-1/2  bg-main-color rounded-lg  h-[30px] w-[72px]">
            <Image
              className="mx-auto"
              src={"/ico_search_white.svg"}
              width={20}
              height={20}
              alt="icon-search"
            />
          </button>
        </div>
        <div className="flex items-center gap-3 text-xs pl-[24px]">
          <div className="flex-col gap-1  group relative">
            <div className="cursor-pointer">
              <Image
                className="mx-auto"
                src={"/ico_noti_gray.svg"}
                width={24}
                height={24}
                alt="icon-notification"
              />
              <p>Thông Báo</p>
            </div>

            <div className="absolute group-hover:block hidden   right-0 mt-[16px] bg-white rounded-lg w-[264px] p-4 text-sm  shadow before:absolute group-hover:before:block before:hidden  before:right-0 before:w-full before:h-[16px] before:-top-[16px]">
              <div className="flex items-center gap-2 pb-4 ">
                <Image
                  className="text-[#0D0E0F]"
                  src={"/ico_noti_black.svg"}
                  width={16}
                  height={16}
                  alt="icon-notification"
                />
                <p className="text-[#0D0E0F] font-bold text-base cursor-default">
                  Thông báo
                </p>
              </div>
              <div className="py-6 flex items-center justify-center">
                <Image
                  className="text-[#0D0E0F]"
                  src={"/ico_login.svg"}
                  width={80}
                  height={80}
                  alt="icon-notification"
                />
              </div>
              <div className="text-center text-base cursor-default ">
                Vui lòng đăng nhập để
              </div>
              <div className="text-center text-base mb-6 cursor-default">
                Xem thông báo
              </div>
              <button className="bg-[#C92127] border-2 border-[#C92127] h-10 rounded-lg w-full text-white ">
                Đăng nhập
              </button>
              <button className="bg-white border-2 border-[#C92127] text-[#C92127] h-10 rounded-lg w-full  mt-2 ">
                Đăng ký
              </button>
            </div>
          </div>
          <div className="flex-col gap-1 cursor-pointer">
            <Image
              className="mx-auto"
              src={"/ico_cart_gray.svg"}
              width={24}
              height={24}
              alt="icon-cart"
            />
            <p>Giỏ Hàng </p>
          </div>
          <div className="flex-col gap-1 cursor-pointer group relative  ">
            <Image
              className="mx-auto"
              src={"/ico_account_gray.svg"}
              width={24}
              height={24}
              alt="icon-account"
            />
            <p>Tài khoản</p>
            <div className="absolute group-hover:block hidden   right-0 mt-[16px] bg-white rounded-lg w-[252px] px-3 py-[16px] text-sm font-bold shadow before:absolute group-hover:before:block before:hidden  before:right-0 before:w-full before:h-[16px] before:-top-[16px]">
              <button className="bg-[#C92127] border-2 border-[#C92127] h-10 rounded-lg w-full text-white ">
                Đăng nhập
              </button>
              <button className="bg-white border-2 border-[#C92127] text-[#C92127] h-10 rounded-lg w-full  mt-2 ">
                Đăng ký
              </button>
            </div>
          </div>
          <div className="h-10 w-[75px] relative rounded-lg cursor-pointer border border-[#CDCFD0] flex items-center gap-1 justify-center ">
            <Image src={"/default.svg"} width={37} height={24} alt="icon-VN" />
            <Image
              src={"/icon_seemore_gray.svg"}
              width={16}
              height={16}
              alt="icon-menu"
            />
            <div className="absolute top-full right-0 bg-red-400 px-2 py-[6px]  rounded-lg w-[94px] ">
              <div className="flex items-center gap-2 p-2 rounded-lg h-[40px] bg-[#7A7E7F]  ">
                <Image
                  src={"/default.svg"}
                  width={36}
                  height={24}
                  alt="icon-vn"
                />
                <p>VN</p>
              </div>
              <div className="flex items-center gap-1 p-2">
                <Image
                  src={"/english.svg"}
                  width={36}
                  height={24}
                  alt="icon-EN"
                />
                <p>EN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
