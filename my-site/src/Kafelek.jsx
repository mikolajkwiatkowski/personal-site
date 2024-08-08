export default function Kafelek({ children, bgImg, bg}) {
    return (
        <div style={{backgroundImage:`url(${bgImg})`}} className={` ${bg} bg-cover bg-center shadow-2xl rounded-3xl text-white w-full h-full`}>

            {children}
        </div>
    );
}

