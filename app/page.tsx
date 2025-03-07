import Hero_Section from "./components/layout/HeroSection/hero"
import Trending_Section from "./components/layout/TrendingSection/trending"
import Reasons_Section from "./components/layout/ReasonsSection/reason";
import FAQ_Section from "./components/layout/FAQSection/faq";

import { Trending } from "./constants/Trending"
import { Reasons } from "./constants/Reasons";
import { FAQ } from "./constants/FAQ";

export default function page() {

    const shuffled_trending = [...Trending].sort(() => Math.random() - 0.5);

    return (
        <div className="max-w-9xl mx-auto text-white">
            <Hero_Section />
            <Trending_Section trending={shuffled_trending}/>
            <Reasons_Section reasons={Reasons}/>
            <FAQ_Section faqs={FAQ}/>
        </div>
    )
}
