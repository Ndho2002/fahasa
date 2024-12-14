import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
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
      <div className="w-full max-w-[1263px] mx-auto h-[68px] flex items-center cursor-pointer">
        <Image
          src={"/fahasa-logo.webp"}
          width={216}
          height={38}
          className="object-contain"
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
          <div className="flex-col gap-1 cursor-pointer">
            <Image
              className="mx-auto"
              src={"/ico_noti_gray.svg"}
              width={24}
              height={24}
              alt="icon-notification"
            />
            <p>Thông Báo</p>
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
          <div className="flex-col gap-1 cursor-pointer">
            <Image
              className="mx-auto"
              src={"/ico_account_gray.svg"}
              width={24}
              height={24}
              alt="icon-account"
            />
            <p>Tài khoản</p>
          </div>
          <div className="h-10 w-[75px] rounded-lg cursor-pointer border border-[#CDCFD0] flex items-center gap-1 justify-center ">
            <Image
              src={"/default.svg"}
              width={37}
              height={24}
              alt="icon-VN"
            />
            <Image
              src={"/icon_seemore_gray.svg"}
              width={16}
              height={16}
              alt="icon-menu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
