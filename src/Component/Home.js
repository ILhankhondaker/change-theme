import React from 'react';

const Home = () => {
    return (
        <div >
            <div class="hero min-h-screen bg-base-200 px-12">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ytimg.com/vi/xodD0nw2veQ/maxresdefault.jpg"
                        class="max-w-sm rounded-lg shadow-2xl"
                        alt="Ilhan Khondaker"
                    />

                    <div className="px-10 ">
                        <h1 class="text-5xl font-bold text-info">
                            Just Toggle & Change Theme
                        </h1>

                        <div class="divider"></div>
                        <div className="">
                            <h1 className='text-3xl font-bold mt-3'>Project Elements </h1>
                            <h1 className='text-1xl font-bold mt-3' >⇒ React App  </h1>
                            <h1 > <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noopener noreferrer">React App Install Docs </a> </h1>
                            <h1 className='text-1xl font-bold mt-3'>⇒ CSS Framework Tailwind</h1>
                            <h1 > <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer">CSS Framework Tailwind Install Docs </a> </h1>
                            <h1 className='text-1xl font-bold mt-3'>⇒ Tailwind Component Daisy UI</h1>
                            <h1 ><a href="https://daisyui.com/docs/install/" target="_blank" rel="noopener noreferrer"> Daisy UI Install Docs </a> </h1>
                            <h1 className='text-1xl font-bold mt-3'>⇒ React Router </h1>
                            <h1 > <a href="https://reactrouter.com/en/v6.3.0/getting-started/installation" target="_blank" rel="noopener noreferrer">React Router Install Docs </a> </h1> <br />
                            <p>We use Tailwind & Tailwind Component DaisyUI </p>
                            <p>Email : ilhankhondaker@gmail.com</p>
                            <a href="tel:+8801680576091">Phone: +8801680576091</a>
                            <p >Address: Banani Dahak</p>


                        </div>

                    </div>

                </div>

            </div>

            <div className='bg-base-200 p-5' > <h1 className='text-4xl font-bold text-center m-3 text-info'>You can here see how to build this project </h1>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe></div>


        </div>
    );
};

export default Home;