import { RootLayout } from "@/app/components/layout/RootLayout/RootLayout";
import { Home } from "@/app/components/pages/home/home";
import { NextPage } from "next";

const HomePage: NextPage = () => {
    return <RootLayout title="Site">
        <Home />
    </RootLayout>
}

export default HomePage