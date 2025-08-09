const Background = () => {
  // Use the correct path for GitHub Pages deployment
  const isProduction = typeof window !== 'undefined' && window.location.hostname === 'sylian1337.github.io';
  const imagePath = isProduction ? '/WrathnillaWebsiteSource/images/Login-Static.jpeg' : '/images/Login-Static.jpeg';
  
  return (
    <>
      <div className="fixed inset-0 z-[-2]">
        {/* Background Image */}
        <img
          src={imagePath}
          alt="Background"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/100" />
      </div>
    </>
  );
};

export default Background;
