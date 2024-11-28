import * as React from "react"
import Link from "next/link"
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent } from "../ui/card";
import { Products } from "@prisma/client";


export default function Navbar() {
  const [cart, setCart] = React.useState<Products[]>([]);
  React.useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sepeti güncelle
  };

  return (
    <nav className="flex justify-between p-8 text-white fixed w-full top-0 left-0 z-50 bg-[rgb(103,142,97)]">
      <div className="text-3xl">
        <Link href="/">Shofi</Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Shop</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[300px]">
                <Link href="/shop" title="Introduction">
                  Shop
                </Link>
                <Link href="/shop/cart" title="Installation">
                  Cart
                </Link>
                <Link href="/shop/wishlist" title="Typography">
                  Wishlist
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Pages</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[300px]">
                <Link href="/pages/about" title="Introduction">
                  About
                </Link>
                <Link href="/pages/login" title="Installation">
                  Login
                </Link>
                <Link href="/pages/register" title="Typography">
                  Register
                </Link>
                <Link href="/pages/profile" title="Typography">
                  Profile
                </Link>
                <Link href="/home" title="Typography">
                  Checkout
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink>Coupons</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Blog</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[300px]">
                <Link href="/blog" title="Introduction">
                  Blog Standard
                </Link>
                <Link href="/blog/details" title="Installation">
                  Blog Details
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact">
              <NavigationMenuLink>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex w-1/5">
        <Input placeholder="Search" className="rounded-2xl rounded-e-none bg-white text-black py-5" />
        <Button className="bg-black hover:bg-stone-900 rounded-2xl rounded-s-none py-5">Search</Button>
      </div>
      <div className="flex gap-3 justify-center text-2xl">
        <div className="flex items-center">
          <div className="border rounded-full p-1">
            <CiUser />
          </div>
          <p className="text-sm">User</p>
        </div>
        <div className="rounded-full p-1 border m-auto">
          <Link href="/shop/wishlist">
            <MdFavoriteBorder />
          </Link>
        </div>
        <div className="rounded-full p-1 border h-9">
          <Sheet>
            <SheetTrigger>
              <CiShoppingCart />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription>
                  {cart.length === 0 ? (
                    <p>Sepetinizde ürün bulunmamaktadır.</p>
                  ) : (
                    cart.map((product) => (
                      <Card key={product.id} className="items-center m-auto mb-5 w-full">
                        <CardContent className="m-auto p-6">
                          <div className="flex w-full items-center gap-4 justify-center p-4">
                            <div className="flex-1 text-start">
                              <img src={product.product_image} alt={product.name} className="object-cover w-1/2 h-1/2" />
                            </div>
                            <div className="grid">
                              <div className="flex-1 text-start">
                                <p>{product.name}</p>
                              </div>
                              <div className="flex-1 text-start">
                                <p>{product.price} $</p>
                              </div>
                            </div>
                            <div>
                              <Button variant="destructive" onClick={() => removeFromCart(product.id)}>
                                X
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Link href="/shop/cart">
                    <Button>View Cart</Button>
                  </Link>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>

  )
}



