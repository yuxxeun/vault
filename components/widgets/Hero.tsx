export const Hero = () => {
  return (
    <>
      <div className="flex flex-col h-screen heroBg md:bg-black">
        <div className="px-10 invisible lg:visible mt-5 text-white font-montreal text-3xl flex justify-between">
          <p>A digital studio making cool shit that performs.</p>
          <p>Any project in mind? Drop us a line.</p>
        </div>
        <div className="flex mx-auto mt-auto mb-5">
          <div className="text-white">
            <div className="text-oranged mt-auto text-4xl lg:text-12xl font-display">
              <p className="text-center">basement.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
