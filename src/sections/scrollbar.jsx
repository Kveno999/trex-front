import React, {useEffect, useState} from "react";


const ScrollBar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            const scrollPercentage = (position / height) * 100;
            setScrollPosition(scrollPercentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed right-4 top-0 bottom-0 w-6 z-50 hidden md:block">
            <div className="h-full bg-gray-900 relative rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 right-0 bg-yellow-500 rounded-full"
                    style={{height: `${scrollPosition}%`}}
                ></div>
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute w-6 h-6 left-1/2 transform -translate-x-1/2"
                        style={{
                            top: `${(index + 1) * 10}%`,
                            opacity: scrollPosition >= (index + 1) * 10 ? 1 : 0.3,
                            transition: 'opacity 0.3s ease'
                        }}
                    >

                        <svg height="26px" width="26px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-337.92 -337.92 1187.84 1187.84"
                             xml:space="preserve" fill="currentColor"
                             className={`text-${scrollPosition >= (index + 1) * 10 ? 'black-500' : 'gray-600'}`}>
                                <g>
                                    <path
                                          d="M249.03 20.844c-15.316.043-30.757 3.48-44 9.187-7.74-.592-15.25-.91-22.5-.905-90.62.073-143.082 46.573-163.968 126.313v340.218h189.313c-5.18-54.53 5.24-114.066 27.28-154.625-28.882-4.973-57.912-8.197-85.843-9.217l-7.656-.282-1.22-7.592c-9.48-58.97-10.128-119.04 22.064-176.47l16.313 9.126c-28.177 50.266-29 102.555-20.97 157.062 81.76 4.08 170.21 25.267 239.376 54.844 22.725-5.73 33.816-29.686 41.842-65.5l-31.968 21.625-10.03-44.438-45.69 30.907-10.78-47.72-43.25 29.22-10.688-47.313-43.812 29.626-15-66.406 70.844-47.906 10.687 47.344 43.813-29.625 10.78 47.718 43.25-29.25 10.032 44.407 45.656-30.875 7.688 34.063c20.848-26.98 35.224-66.535 14.406-85.28-25.446-22.914-52.26-43.34-79.406-60.564-6.566-24.932-61.027-77.113-93.75-47.874-14.44-21.414-38.472-29.88-62.813-29.812zm2.19 21.625c18.102 0 32.593 14.55 32.593 32.78 0 3.19-.453 6.25-1.282 9.156-3.084-6.24-9.503-10.562-16.936-10.562-10.436 0-18.906 8.47-18.906 18.906 0 6.22 3.018 11.713 7.656 15.156-1.03.097-2.07.125-3.125.125-18.104 0-32.626-14.55-32.626-32.78s14.522-32.78 32.625-32.78z"/>
                                </g>
                            </svg>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScrollBar;