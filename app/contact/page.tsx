'use client'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Image,
    Tabs,
    Tab,
    Card,
    CardBody,
    RadioGroup,
    Radio,
    Input,
    Textarea,
    Spacer,

} from "@nextui-org/react";

export default function Contact() {
    const [Name, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Message, setMessage] = React.useState("");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validationEmailState = React.useMemo(() => {
        if (Email === "") return undefined;

        return validateEmail(Email) ? "valid" : "invalid";
    }, [Email]);
    const Submit = () => {

    }
    return (
        <main>
            <Navbar>
                <NavbarBrand>
                    <Image src="/logo.jpg" alt="Logo" width={36} height={36} className="rounded-xl" />
                    <p className="font-bold text-inherit">EpicLiem</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4">
                    <NavbarItem>
                        <Link href='/'>
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

            <div className="flex flex-col items-center justify-center my-10">
                <h1 className="text-4xl font-bold">Contact Me</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Tabs>
                    <Tab key="email" title="Email">
                        <Card>
                            <CardBody>
                                <p className="text-2xl font-bold">Email</p>
                                <p className="text-xl">You can email me at <a href="mailto:liem@epicliem.com" className="font-bold">liem@epicliem.com</a></p>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="discord" title="Discord">
                        <Card>
                            <CardBody>
                                <p className="text-2xl font-bold">Discord</p>
                                <p className="text-xl">You can DM me on Discord at <a href="https://discordapp.com/users/734087770070450266" className="font-bold">MonisVerse</a></p>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="twitter" title="Twitter">
                        <Card>
                            <CardBody>
                                <p className="text-2xl font-bold">Twitter</p>
                                <p className="text-xl">You can DM me on Twitter at <a href="https://twitter.com/monisverse" className="font-bold">@monisverse</a></p>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="form" title="Form" className="w-1/2">
                        <Card className="">
                            <CardBody>
                                <p className="text-2xl font-bold">Form</p>
                                <div className="flex flex-col">
                                    <p className="text-xl">What do  you need?</p>
                                    <RadioGroup>
                                        <Radio value="website">Build a Website</Radio>
                                        <Radio value="help">Need Help</Radio>
                                        <Radio value="issue">Issue with Epicliem.com</Radio>
                                        <Radio value="other">Other</Radio>
                                    </RadioGroup>
                                    <Spacer y={1} />
                                    <Input label="Name" placeholder="Enter your name" variant="underlined" value={Name} onValueChange={setName} isRequired/>
                                    <Spacer y={1} />
                                    <Input
                                        label="Email"
                                        placeholder="Enter your email"
                                        type="email"
                                        variant="underlined"
                                        color={validationEmailState === "invalid" ? "danger" : "success"}
                                        errorMessage={validationEmailState === "invalid" && "Please enter a valid email"}
                                        validationState={validationEmailState}
                                        onValueChange={setEmail}
                                        isRequired/>
                                    <Spacer y={1} />
                                    <Textarea placeholder="Message" value={Message} onValueChange={setMessage} />
                                    <Spacer y={1} />
                                    <Button color="primary" variant="flat" onClick={Submit}>Submit</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </main>
    )
}
