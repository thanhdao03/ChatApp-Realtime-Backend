import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "thanh.dao01@example.com",
    fullName: "Trần Thanh Đào",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "ngoc.linh@example.com",
    fullName: "Nguyễn Ngọc Linh",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "thu.ha@example.com",
    fullName: "Phạm Thu Hà",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "minh.anh@example.com",
    fullName: "Lê Minh Anh",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "thao.nguyen@example.com",
    fullName: "Nguyễn Thảo Nguyên",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "mai.phuong@example.com",
    fullName: "Vũ Mai Phương",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "khanh.van@example.com",
    fullName: "Đặng Khánh Vân",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "my.linh@example.com",
    fullName: "Hoàng Mỹ Linh",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "quang.huy@example.com",
    fullName: "Nguyễn Quang Huy",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "duc.anh@example.com",
    fullName: "Trần Đức Anh",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "minh.hoang@example.com",
    fullName: "Lê Minh Hoàng",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "tien.dat@example.com",
    fullName: "Phạm Tiến Đạt",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "anh.tuan@example.com",
    fullName: "Đỗ Anh Tuấn",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "huy.hoang@example.com",
    fullName: "Bùi Huy Hoàng",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "van.thanh@example.com",
    fullName: "Ngô Văn Thành",
    password: "123456@2025",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];


export const seedDatabase = async () => {
  try {
    await connectDB();
    const count = await User.countDocuments();
    if (count > 0) {
      console.log("Database already seeded, skip.");
      return;
    }
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
