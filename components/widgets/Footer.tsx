export const Footer = () => {
    return (
        <div className="min-h-screen mx-auto py-5 bg-black text-white">
            <div className="border-b mx-10 my-10 pb-3 border-white">
                <div className="flex mb-5 font-montreal text-xl uppercase justify-between space-x-10 grid-2 gap-6">
                    <div className="flex space-x-20">
                        <div className="">
                            v1.0.0.1        
                        </div>
                        <div className="">
                            basement — a digital studio who make cool shit that performs
                        </div>
                    </div>
                    <div className="">
                        &copy; 2023
                    </div>
                </div>
            </div>
            {/* end of banner text */}

            <div className="footer-img my-5 mx-10">
                <p className="text-9xl -leading-loose -tracking-wide font-display">
                    Any<br/> project <br/> in mind? <br/>
                    <span className="hover:border-b-8 hover:-pb-5 hover:border-oranged text-oranged">drop a line</span>
                </p>
            </div>
        </div>
    )
}