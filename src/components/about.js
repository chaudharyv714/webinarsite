import '../App.js';

function about() {
    return (
        <div id="about">
            <div className="con">
                <div className="content">
                    <span>
                        <i className="bg far fa-bookmark"></i>
                        <h3>About</h3>
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus perspiciatis quibusdam? Necessitatibus, nesciunt! Vitae odio ipsam iusto ex, quam tempore doloribus officiis vel laborum culpa reprehenderit ullam accusamus. Magnam?</p>
                </div>
                <div className="content">
                    <span>
                        <i className="bg fab fa-dochub"></i>
                        <h3>About</h3>
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus perspiciatis quibusdam? Necessitatibus, nesciunt! Vitae odio ipsam iusto ex, quam tempore doloribus officiis vel laborum culpa reprehenderit ullam accusamus. Magnam?</p>
                </div>
            </div>

            <div className="image">
                <img src="rajpath.jpg" alt="rajpath" />
            </div>
        </div>
    );
};

export default about;