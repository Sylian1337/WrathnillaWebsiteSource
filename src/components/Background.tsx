const Background = () => {

  return (
    <>
      <div className="fixed inset-0 z-[-2]">

       

        {/* Background Image */}
      <img
        src="/images/Login-Static.jpeg"
        alt="Background"
        sizes="100vw"
        className="object-cover"
      />
        
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/100" />
    </div>

      
    </>
  );
};

export default Background;
