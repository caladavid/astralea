import React, { useEffect, useState } from 'react'

const ReadMore = ({ children, length = 300 }) => {
  const text = children || '';
  const [isReadMore, setIsReadMore] = useState(true);
  const [maxLength, setMaxLength] = useState(length);

  // Function to toggle read more state
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

   // Effect to update maxLength based on window width
  useEffect(() => {
    // Update maxLength based on window width
    const updateMaxLength = () => {
      const windowWidth = window.innerWidth;

       // Adjust maxLength based on desired resolutions
      if (windowWidth < 768) {
        setMaxLength(length + 50);
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        setMaxLength(length + 100);
      } else {
        setMaxLength(length + 150);
      }
    };

    // Call update function on component mount and window resize
    updateMaxLength();
    window.addEventListener('resize', updateMaxLength);

    // Limpia el listener del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', updateMaxLength);
    };
  }, []); 

  return (
    <>
      {text && (
        <p className="inline w-[90%]">
          {isReadMore ? text.slice(0, maxLength) : text}
          {text.length > maxLength && (
            <span
              onClick={toggleReadMore}
              className="cursor-pointer text-secondaryColor hover:text-tertiaryColor"
            >
              {isReadMore ? " ...read more" : " show less"}
            </span>

          )}
        </p>

      )}

    </>
  )
}

export default ReadMore