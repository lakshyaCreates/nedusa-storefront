import { ShoppingCartIcon } from "lucide-react";

import { Button } from "./ui/button";

export const Cart = () => {
    return (
        <div className="relative">
            <Button size={"default"} variant={"outline"} className="relative">
                <ShoppingCartIcon />
                <span>(00)</span>
            </Button>
        </div>
    );
};
