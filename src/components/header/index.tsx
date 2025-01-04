import { Nav } from "./nav";

export default function Header() {
    return (
        <header className="h-20 w-screen border-b">
            <div className="wrap">
                <div className="flex size-full items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tighter">
                        Nedusa
                    </h2>
                    <Nav />
                </div>
            </div>
        </header>
    );
}
