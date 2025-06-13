import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import jibLogo from "./assets/icons/logo-w.png";
import noteBook from "./assets/images/note_book.png";
import lenovoLogo from "./assets/images/p_lenovo.png";
import asusLogo from "./assets/images/p_asus.png";
import msiLogo from "./assets/images/p_msi.png";
import nvidiaLogo from "./assets/images/p_nvidia.png";
import intelLogo from "./assets/images/p_intel.png";
import amdLogo from "./assets/images/p_amd.png";
import ipLogo from "./assets/images/p_ip.png";
import menuLogo from "./assets/icons/icon-menu.svg";
import monitor from "./assets/icons/monitor.svg";
import badgeAsus from "./assets/images/badge_asus.png";
import searchGray from "./assets/icons/search-gray.svg";
import iconAI from "./assets/icons/iconAI.svg";
import discount from "./assets/icons/dis-tag.svg";
import shoppingCart from "./assets/icons/shop-cart.svg";
import heart from "./assets/icons/heart.svg";
import profile from "./assets/icons/profile.svg";
import searchBlue from "./assets/icons/search-blue.svg";

const searchSuggestions = ["MSI", "Lenovo", "Asus", "Microsoft", "LG"];

const products = [
  {
    id: 1,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    fullPrice: "฿ 49,900",
    badge: "HOT",
  },
  {
    id: 2,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    fullPrice: "฿ 49,900",
    badge: "HOT",
  },
  {
    id: 3,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    fullPrice: "฿ 49,900",
    badge: "HOT",
  },
  {
    id: 4,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    fullPrice: "฿ 49,900",
    badge: "HOT",
  },
  {
    id: 5,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    fullPrice: "฿ 49,900",
    badge: "HOT",
  },
  {
    id: 6,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    fullPrice: "฿ 49,900",
    badge: "HOT",
  },
  {
    id: 7,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 32,900",
    fullPrice: "฿ 49,900",
    badge: "NEW",
  },
  {
    id: 8,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 28,900",
    fullPrice: "฿ 49,900",
    badge: "SALE",
  },
  {
    id: 9,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 34,900",
    fullPrice: "฿ 49,900",
    badge: "HOT",
  },
  {
    id: 10,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 31,900",
    fullPrice: "฿ 49,900",
    badge: "NEW",
  },
  {
    id: 11,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 35,900",
    fullPrice: "฿ 49,900",
    badge: "HOT",
  },
  {
    id: 12,
    name: "(โน้ตบุ๊ค) ASUS ROG STRIX G17 G713RC-HX032W (ECLIPSE GRAY)",
    price: "฿ 29,900",
    fullPrice: "฿ 49,900",
    badge: "SALE",
  },
];

const brands = [
  { name: "Lenovo", logo: lenovoLogo },
  { name: "ASUS", logo: asusLogo },
  { name: "MSI", logo: msiLogo },
  { name: "NVIDIA", logo: nvidiaLogo },
  { name: "Intel", logo: intelLogo },
  { name: "AMD", logo: amdLogo },
  { name: "Ip", logo: ipLogo },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("Notebook โน๊ตบุ๊ค เกมมิ่ง");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <div
        className="bg-[#1B135C] text-white p-4 relative"
        style={{
          background: "linear-gradient(90deg, #221692 19.58%, #1A1354 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <img
          src={menuLogo}
          alt="JBL Logo"
          className="w-10 h-10 absolute left-4 top-[25px]"
        />

        <div className="flex items-center justify-between max-w-6xl mx-auto gap-6 ">
          <div className="flex items-center space-x-4 w-full">
            <div className="text-2xl font-bold">
              <img src={jibLogo} alt="JBL Logo" className="w-15 h-14" />
            </div>
            <div className="relative flex-1 ">
              <div
                className="relative"
                style={{
                  background:
                    "linear-gradient(90deg, #8B52DB, #FFFFFF, #972997)",
                  borderRadius: "99px",
                  padding: "2px",
                  boxShadow: "0px 0px 7px 0px #E3B0FF",
                }}
              >
                <img
                  src={iconAI}
                  alt="ai"
                  className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  className="w-full px-[40px] py-2 rounded-full text-black border-0 outline-none"
                  style={{
                    background: "#F2F3FF",
                    borderRadius: "99px",
                  }}
                  placeholder="ค้นหาสินค้า..."
                />
                <span className="absolute right-[50px] top-1/2 transform -translate-y-1/2 text-[#868CFF]">
                  AI Search{" "}
                </span>
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <img src={searchBlue} alt="search" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img src={heart} alt="heart" className="w-10 h-10" />
              <span className="absolute top-5 -right-2 bg-[#FDAF17] text-white text-[10px] rounded-full px-[5px] flex items-center justify-center">
                99+
              </span>
            </div>
            <div className="relative">
              <img src={shoppingCart} alt="cart" className="w-10 h-10" />
              <span className="absolute top-5 -right-2 bg-[#FDAF17] text-white text-[10px] rounded-full px-[5px] flex items-center justify-center">
                99+
              </span>
            </div>
            <img src={profile} alt="profile" className="w-8 h-8" />

          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 p-6 max-w-6xl mx-auto">
          {/* Search Dropdown */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white rounded-[16px] shadow-lg p-6 mb-6 relative z-10 max-h-[700px] overflow-y-auto"
              >
                <div className="">
                  {searchSuggestions.map((suggestion, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ backgroundColor: "#f3f4f6" }}
                      className="flex items-center space-x-3 p-2 rounded cursor-pointer"
                    >
                      {/* <Search className="w-4 h-4 text-gray-500" /> */}
                      <img
                        src={searchGray}
                        alt="JBL Logo"
                        className="w-4 h-4"
                      />
                      <div className="flex gap-1 flex-1 font-[600] text-[14px]">
                        <span className="text-[#291ABD] ">Notebook</span>
                        <span className="text-[#646464]">{suggestion}</span>
                      </div>
                      <ArrowUpLeft className="w-4 h-4 text-[#A3A3A3] ml-auto" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-[16px] font-semibold text-[#4E4E4E] mb-3">
                    หมวดหมู่
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 p-2 rounded cursor-pointer">
                      <img src={monitor} alt="JBL Logo" className="w-5 h-5" />
                      {/* <monitor className="w-4 h-4 text-[#4437C5]" /> */}
                      <div className="flex gap-1 font-semibold text-[14px] ">
                        <span className="text-[#291ABD]">Notebook</span>
                        <span className="text-[#646464]">สำหรับเล่นเกม</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 px-2 py-1 rounded cursor-pointer">
                      <img src={monitor} alt="JBL Logo" className="w-5 h-5" />
                      {/* <monitor className="w-4 h-4 text-[#4437C5]" /> */}
                      <div className="flex gap-1 font-semibold  text-[14px]">
                        <span className="text-[#291ABD]">Notebook</span>
                        <span className="text-[#646464]">สำหรับทำงาน</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[16px] flex gap-1 mb-3 items-center">
                    <span className="font-semibold text-[#4E4E4E]">สินค้า</span>
                    <span className="text-[#A3A3A3] text-[14px]">
                      (32 รายการ)
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="bg-[#221690] text-white px-3 py-1 rounded-full text-[12px] w-[80px] text-center">
                      คุ้มที่สุด
                    </span>
                    <span className="bg-[#F4F6F8] text-[#221690] px-3 py-1 rounded-full text-[12px] w-[80px] text-center">
                      เป็นที่นิยม
                    </span>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="mt-6 overflow-x-auto">
                  <div className="flex gap-4 pb-4">
                    {products.map((product) => (
                      <motion.div
                        key={product.id}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white border rounded-lg p-3 cursor-pointer relative flex-shrink-0 w-48"
                      >
                        <img
                          src={badgeAsus}
                          alt="badge"
                          className="absolute top-2 right-2 w-auto h-2"
                        />
                        <div className="rounded-lg  mb-3">
                          <img
                            src={noteBook}
                            alt={product.name}
                            className="w-full h-25 object-contain"
                          />
                        </div>
                        <div className=" mb-2 text-[12px] font-semibold">
                          <span className="text-[#291ABD] ">NOTEBOOK</span>{" "}
                          <span className="text-[#646464]">{product.name}</span>
                        </div>
                        <div className="flex justify-between items-end font-semibold">
                          <img src={discount} alt="discount" className="" />
                          <span className="text-[#454545] text-[16px]">
                            {product.price}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mt-6">
                  <div className="text-[16px] font-semibold text-[#4E4E4E] mb-3">
                    แบรนด์
                  </div>
                  <div className="flex items-center">
                    {brands.map((brand, index) => (
                      <motion.img
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        src={brand.logo}
                        alt={brand.name}
                        className="h-10 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-[16px] font-semibold text-[#4E4E4E] mb-2 flex gap-2 items-center">
                    สเปคสินค้า
                    <img src={iconAI} alt="ai" className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={searchGray}
                        alt="JBL Logo"
                        className="w-4 h-4"
                      />
                      <div className="flex gap-1 flex-1 font-[600] text-[14px]">
                        <span className="text-[#291ABD] ">Notebook</span>
                        <span className="text-[#646464] uppercase">
                          CPU Intel
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src={searchGray}
                        alt="JBL Logo"
                        className="w-4 h-4"
                      />
                      <div className="flex gap-1 flex-1 font-[600] text-[14px]">
                        <span className="text-[#291ABD] ">Notebook</span>
                        <span className="text-[#646464] uppercase">
                          CPU AMD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
