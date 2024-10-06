
export default function DESCRIPTION() {
    return (
        <div className="flex flex-col w-full items-center gap-8 py-4 bg-opacity-95 rounded-3xl mt-8"
            style={{
                background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);"
            }}>
            
            <div className="flex flex-row w-full items-center gap-2">
                <span className="h-2 bg-red-900 grow rounded-full"></span>
                <h1 className="font-main text-3xl md:text-4xl lg:text-6xl text-red-900 bg-slate-100 rounded-md p-2 shadow-xl">MUNAFA</h1>
                <span className="h-2 bg-red-900 grow rounded-full"></span>
            </div>
            

            
            <div className="flex flex-col gap-8 text-sm md:text-base lg:text-xl">
                <p className="text-center max-w-screen-md font-serif">
                    MUNAFA is a unique financial challenge where participants are 
                    provided with a commodity and must use their financial skills,
                    strategies, and entrepreneurial spirit to multiply the value of that
                    commodity as much as possible within a 5-hour time frame.
                </p>
                <p className="text-center max-w-screen-md font-serif">
                    The event is open to anyone with a passion for finance and money-
                    making strategies, providing an excellent platform to showcase
                    financial acumen. The top performers will be judged based on their
                    ability to generate profit while adhering to the competition rules. The
                    event promises a blend of excitement, creativity, and practical
                    financial strategy application.
                </p>
            </div>

            <div className="flex flex-row w-full items-center gap-2">
                <span className="h-2 bg-red-800 grow rounded-full"></span>
                <h1 className="font-main text-3xl md:text-4xl p-2">💸</h1>

                {/* <button className="w-32 h-8 rounded-md bg-red-800 text-white font-bold font-serif hover:bg-red-950 shadow-lg">Rule Book</button> */}
                <button 
                className="w-32 h-8 rounded-md bg-red-800 text-white font-bold font-serif hover:bg-red-950" 
                onClick={() => window.open(require("../assets/Munafa_Rulebook.pdf"), '_blank')}
                >
                Rule Book
                </button>


                <h1 className="font-main text-3xl md:text-4xl p-2">💸</h1>
                <span className="h-2 bg-red-800 grow rounded-full"></span>
            </div>

        </div>
    )
}
