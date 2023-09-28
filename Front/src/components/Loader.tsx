const Loader = () => {
    const body= document.querySelector('body')
    if(body !== null){

        body.style.overflow='hidden!important'
    }
    return (
        <div className="loading-screen">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;