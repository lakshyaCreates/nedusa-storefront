import Link from "next/link";

import { Cart } from "../cart";

export const Nav = () => {
    return (
        <nav className="flex items-center gap-4">
            <Link href={"/account"}>Account</Link>
            <Cart />
        </nav>
    );
};
