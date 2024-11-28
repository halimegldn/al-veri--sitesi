import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiVimeoLine } from "react-icons/ri";
import { MdOutlineMarkEmailRead, MdOutlineAddLocationAlt } from "react-icons/md";

const Account: { title: string; href: string; }[] = [
    { title: "Track Orders", href: "/" },
    { title: "Shipping", href: "/" },
    { title: "Wishlist", href: "/" },
    { title: "My Account", href: "/" },
    { title: "Order History", href: "/" },
    { title: "Returns", href: "/" }
]
const Information: { title: string; href: string }[] = [
    { title: "Our Story", href: "/" },
    { title: "Careers", href: "/" },
    { title: "Privacy Policy", href: "/" },
    { title: "Terms", href: "/" },
    { title: "Latest News", href: "/" },
    { title: "Contact Us", href: "/" }
]
export default function Footer() {
    return (
        <div className="flex justify-evenly w-full p-24" style={{ backgroundColor: "rgb(244, 247, 249)" }}>
            <div className="flex-col w-1/4 me-5">
                <Link href="/" className="text-3xl font-bold">Shofy</Link>
                <p>We are a team of designers and developers that create high quality Website</p>
                <div className="flex">
                    <div className="text-2xl border-gray-500 border-2 my-auto me-2 rounded-full p-1">
                        <Link href="/"><FaFacebookF /></Link>
                    </div>
                    <div className="text-2xl border-gray-500 border-2 my-auto me-2 rounded-full p-1">
                        <Link href="/"><FaTwitter /></Link>
                    </div>
                    <div className="text-2xl border-gray-500 border-2 my-auto me-2 rounded-full p-1">
                        <Link href="/"><FaLinkedinIn /></Link>
                    </div>
                    <div className="text-2xl border-gray-500 border-2 my-auto rounded-full p-1">
                        <Link href="/"><RiVimeoLine /></Link>
                    </div>
                </div>
            </div>
            <div className="flex-col w-1/4">
                <h4 className="font-bold">My Account</h4>
                {Account.map((item) => (
                    <div className="flex-col">
                        <Link href={item.href}>{item.title}</Link>
                    </div>
                ))}
            </div>
            <div className="flex-col w-1/4">
                <h4 className="font-bold">Information</h4>
                {Information.map((item) =>
                    <div className="flex-col">
                        <Link href={item.href}>{item.title}</Link>
                    </div>
                )}
            </div>
            <div className="flex-col w-1/4">
                <h4 className="font-bold">Talk To Us</h4>
                <div className="flex-col">
                    <p className="text-xs">Got Questions? Call us</p>
                    <Link href="/">+670 413 90 762</Link>
                </div>
                <div className="flex items-center">
                    <MdOutlineMarkEmailRead className="text-2xl" />
                    <Link href="/" className="ps-3">shofy@gmail.com</Link>
                </div>
                <div className="flex">
                    <MdOutlineAddLocationAlt className="text-2xl" />
                    <Link href="/" className="ps-3">79 Sleepy Hollow St.Jamaica, New York 1432</Link>
                </div>
            </div>
        </div>
    )
}