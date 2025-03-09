import Hero_Section from "./components/layout/HeroSection/hero"
import Trending_Section from "./components/layout/TrendingSection/trending"
import Reasons_Section from "./components/layout/ReasonsSection/reason";
import FAQ_Section from "./components/layout/FAQSection/faq";

import { Reasons } from "./constants/Reasons";
import { FAQ } from "./constants/FAQ";
import { getTrendingItems } from "@/lib/config";

export const revalidate = 60; //1 minute

export default async function page() {

    try {
        const trending = await getTrendingItems();

        return (
            <div className="max-w-9xl mx-auto text-white ">
                <Hero_Section />
                <Trending_Section trending={trending}/>
                <Reasons_Section reasons={Reasons}/>
                <FAQ_Section faqs={FAQ}/>
            </div>
        ) 

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
