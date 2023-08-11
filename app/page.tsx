'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";


export default function Home() {
  return (
    <main>
        <Navbar>
            <NavbarBrand>
                <Image src="/logo.jpg" alt="Logo" width={36} height={36} className="rounded-xl" />
                <p className="font-bold text-inherit">EpicLiem</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4">
                <NavbarItem isActive>
                    <Link color="foreground" href='/'>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='/about'>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='/projects'>
                        Projects
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Button as={Link} color="primary" href="/contact" variant="flat">Contact</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
        {/*Hero*/}
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">EpicLiem</h1>
            <p className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Fullstack Developer</p>
        </div>

        {/*About*/}
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">About Me</h1>

            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                <Card className="col-span-12 sm:col-span-8 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Location</p>
                        <p className="text-white font-medium text-large">Philadelphia</p>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Philadelphia"
                        className="z-0 w-full h-full object-cover"
                        src="/philadelphia.png"
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Favorite Food</p>
                        <p className="text-white font-medium text-large">Cheesburger</p>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Cheesburger"
                        className="z-0 w-full h-full object-cover"
                        src="/cheeseburger.png"
                    />
                </Card>
                <Card className="col-span-4 sm:col-span-6 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Favorite Hobby</p>
                        <p className="text-white font-medium text-large">Coding</p>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Coding"
                        className="z-0 w-full h-full object-cover"
                        src="/code.png"
                    />
                </Card>
                <Card className="col-span-8 sm:col-span-6 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Favorite Sport</p>
                        <p className="text-white font-medium text-large">Basketball</p>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Basketball"
                        className="z-0 w-full h-full object-cover"
                        src="/basketball.png"
                    />
                </Card>

            </div>
            {/* advertise for hire as a freelancer */}
            <Card className="my-28" isPressable onPress={() => window.location.href = "/contact"}>
                <CardHeader>
                    <p className="text-2xl font-bold">Hire Me</p>
                </CardHeader>
                <CardBody>
                    <ul className="list-disc list-inside">
                        <li>Fullstack Developer</li>
                        <li>React, Next.js, Node.js, Python, Pytorch, Rust</li>
                        <li>Quick</li>
                        <li>Reliable</li>
                    </ul>
                </CardBody>
                <CardFooter>
                    <Button color="primary" variant="flat" href="/contact">
                        Contact Me
                    </Button>
                </CardFooter>
            </Card>


        </div>

    </main>
  )
}
