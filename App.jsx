import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CircleUserRound,
  ShoppingCart,
  Heart,
  Search,
  AlignLeft,
  Monitor ,
  ArrowUpLeft 
} from "lucide-react";
import jibLogo from "./assets/icons/logo-w.png";
import noteBook from "./assets/images/note_book.png";
import lenovoLogo from './assets/images/lenovo.png'
import asusLogo from './assets/images/asus.png'
import msiLogo from './assets/images/msi.png'
import nvidiaLogo from './assets/images/nvidia.png'
import intelLogo from './assets/images/intel.svg'
import amdLogo from './assets/images/amd.png'
import acerLogo from './assets/images/acer.jpg'

const searchSuggestions = ["MSI", "Lenovo", "Asus", "Microsoft", "LG"];

const products = [
  {
    id: 1,
    name: "NOTEBOOK โน๊ตบุ๊ค ASUS ROG STRIX G17 G713RC-HX070W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    badge: "HOT",
  },
  {
    id: 2,
    name: "NOTEBOOK โน๊ตบุ๊ค ASUS ROG STRIX G17 G713RC-HX070W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    badge: "HOT",
  },
  {
    id: 3,
    name: "NOTEBOOK โน๊ตบุ๊ค ASUS ROG STRIX G17 G713RC-HX070W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    badge: "HOT",
  },
  {
    id: 4,
    name: "NOTEBOOK โน๊ตบุ๊ค ASUS ROG STRIX G17 G713RC-HX070W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    badge: "HOT",
  },
  {
    id: 5,
    name: "NOTEBOOK โน๊ตบุ๊ค ASUS ROG STRIX G17 G713RC-HX070W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    badge: "HOT",
  },
  {
    id: 6,
    name: "NOTEBOOK โน๊ตบุ๊ค ASUS ROG STRIX G17 G713RC-HX070W (ECLIPSE GRAY)",
    price: "฿ 36,900",
    badge: "HOT",
  },
  {
    id: 7,
    name: "NOTEBOOK โน๊ตบุ๊ค MSI Gaming GF63 Thin 11UC-692TH",
    price: "฿ 32,900",
    badge: "NEW",
  },
  {
    id: 8,
    name: "NOTEBOOK โน๊ตบุ๊ค Lenovo IdeaPad Gaming 3 15ACH6",
    price: "฿ 28,900",
    badge: "SALE",
  },
  {
    id: 9,
    name: "NOTEBOOK โน๊ตบุ๊ค HP Pavilion Gaming 15-dk2000TX",
    price: "฿ 34,900",
    badge: "HOT",
  },
  {
    id: 10,
    name: "NOTEBOOK โน๊ตบุ๊ค Acer Nitro 5 AN515-57-74NU",
    price: "฿ 31,900",
    badge: "NEW",
  },
  {
    id: 11,
    name: "NOTEBOOK โน๊ตบุ๊ค Dell G15 5515 Gaming Laptop",
    price: "฿ 35,900",
    badge: "HOT",
  },
  {
    id: 12,
    name: "NOTEBOOK โน๊ตบุ๊ค ASUS TUF Gaming F15 FX506HF",
    price: "฿ 29,900",
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
  { name: "Acer", logo: acerLogo },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("Notebook โน๊ตบุ๊ค เกมมิ่ง");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <div className="bg-[#1B135C] text-white p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto gap-4">
          <div className="flex items-center space-x-4 w-full">
            <div className="text-2xl font-bold">
              <img src={jibLogo} alt="JBL Logo" className="w-15 h-14" />
            </div>
            <div className="relative flex-1 ">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                className="w-full px-4 py-2 rounded-full text-black"
                placeholder="ค้นหาสินค้า..."
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Heart className="w-6 h-6 text-white" />
              <span className="absolute top-2 -right-1 bg-orange-500 text-white text-[10px] rounded-full w-5 h-4 flex items-center justify-center">3+</span>
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-white" />
              <span className="absolute top-2 -right-1 bg-orange-500 text-white text-[10px] rounded-full w-5 h-4 flex items-center justify-center">5+</span>
            </div>
            <CircleUserRound className="w-6 h-6 text-white" />

            {/* <Search className="w-6 h-6 text-white" /> */}
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
                className="bg-white rounded-lg shadow-lg p-6 mb-6 relative z-10 max-h-[700px] overflow-y-auto"
              >
                <div className="">
                  {searchSuggestions.map((suggestion, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ backgroundColor: "#f3f4f6" }}
                      className="flex items-center space-x-3 p-2 rounded cursor-pointer"
                    >
                      <Search className="w-4 h-4 text-gray-500" />
                      <div className="flex gap-1 font-semibold flex-1">
                        <span className="text-[#4437C5]">Notebook</span>
                        <span className="text-gray-700">{suggestion}</span>
                      </div>
                      <ArrowUpLeft className="w-4 h-4 text-gray-500 ml-auto" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-gray-600 mb-3">
                    หมวดหมู่
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 p-2 rounded cursor-pointer">
                    <Monitor className="w-4 h-4 text-[#4437C5]" />
                      <div className="flex gap-1 font-semibold  ">
                        <span className="text-[#4437C5]">Notebook</span>
                        <span className="text-gray-700">ทั้งหมด</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 px-2 py-1 rounded cursor-pointer">
                    <Monitor className="w-4 h-4 text-[#4437C5]" />
                      <div className="flex gap-1 font-semibold  ">
                        <span className="text-[#4437C5]">Notebook</span>
                        <span className="text-gray-700">ทั้งหมด</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm text-gray-600 mb-3">
                    สินค้า (33 รายการ)
                  </div>
                  <div className="flex space-x-2">
                    <span className="bg-[#1B135C] text-white px-3 py-1 rounded-full text-sm w-[100px] text-center">
                      คุ้มที่สุด
                    </span>
                    <span className="bg-blue-100 text-[#1B135C] px-3 py-1 rounded-full text-sm w-[100px] text-center">
                      เป็นที่นิยม
                    </span>
                  </div>
                  {/* <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">ทั้งหมด</button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">คอมพิวเตอร์</button>
                  </div> */}
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
                        {product.badge && (
                          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            {product.badge}
                          </span>
                        )}
                        <div className="rounded-lg p-4 mb-3">
                          <img
                            src={noteBook}
                            alt={product.name}
                            className="w-full h-20 object-contain"
                          />
                        </div>
                        <div className="text-xs text-blue-600 font-semibold mb-1">
                          NOTEBOOK
                        </div>
                        <div className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {product.name}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {product.price}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mt-6">
                  <div className="text-sm text-gray-600 mb-3">แบรนด์</div>
                  <div className="flex space-x-8 items-center">
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
                  <div className="text-sm text-gray-600 mb-2">
                    ผู้ผลิตสินค้า
                  </div>
                  <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Notebook CPU INTEL
                    </span>
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
