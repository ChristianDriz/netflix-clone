import Image from "next/image";

type Reasons = {
    title: string;
    description: string
    iconUrl: string;
};

type Props = {
    reasons: Reasons[];
};

export default function Reasons_Section({ reasons } : Props ) {
    return (
        <section className="w-full px-6 sm:px-8 4xl:px-20 7xl:px-37 mb-14 4xl:mb-16">
            <div className="mx-auto 9xl:w-7xl ">
                <div className="mt-3 4xl:mt-4">
                    <h2 className="text-lg leading-5.5 4xl:text-2xl 4xl:leading-7 9xl:text-[32px] 9xl:leading-9 font-medium 9xl:font-bold">
                        More Reasons to Join
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-2 4xl:grid-cols-2 4xl:gap-3 7xl:grid-cols-4 7xl:gap-4 mt-3 4xl:mt-4">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="relative rounded-2xl px-4 4xl:px-6 7xl:px-4 9xl:px-6 pt-6 9xl:pt-8 pb-20 sm:pb-24 7xl:pb-32
                            bg-gradient-to-br from-[#192247] to-[#210e17]">
                            <h3 className="font-medium text-xl leading-6 7xl:text-2xl 7xl:leading-7">
                                {reason.title}
                            </h3>
                            <div className="mt-2 4xl:mt-3 7xl:mt-4 9xl:mt-6 text-[#FFFFFFB3]">
                                <p className="text-base leading-4.5">{reason.description}</p>
                            </div>
                            <div className="absolute bottom-1 right-1 4xl:bottom-3 4xl:right-2 7xl:bottom-4 7xl:right-3">
                                <Image 
                                    src={reason.iconUrl} 
                                    alt={reason.iconUrl} 
                                    width={72} 
                                    height={72}
                                />
                            </div>
                        </div>
                    ))}  
                </div>   
            </div>
        </section>
    )
}
