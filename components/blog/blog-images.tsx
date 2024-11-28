"use client"
import * as React from "react";

export default function BlogImages() {

    return (
        <div className="py-32">
            <div className="relative flex items-center justify-around h-96 bg-center bg-gray-900 opacity-80" style={{ backgroundImage: "url(https://shofy-grocery-next-js.vercel.app/assets/images/author/author-bg.jpg)" }}>
                <div className="text-center text-white w-1/2">
                    <p className="text-xl">We work with top suppliers and manufacturers to ensure that every item we sell meets our high standards for durability, performance, and style.</p>
                </div>
                <div className="flex">
                    <div className="grid">
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_01.7c725c73.png&w=96&q=75" />
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_03.e826f278.png&w=128&q=75" />
                    </div>
                    <div className="grid">
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_02.e3d8f7fd.png&w=96&q=75" />
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_04.1cb32db2.png&w=96&q=75" />
                    </div>
                </div>

            </div>
        </div>
    );
}
